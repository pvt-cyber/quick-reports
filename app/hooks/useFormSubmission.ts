"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface UseFormSubmissionProps {
  apiKey: string;
  formName?: string;
  allowFiles?: boolean;
  maxFileSize?: number; // Add configurable max size
  allowedFileTypes?: string[]; // Add configurable file types
}

interface FormData {
  [key: string]: any;
}

interface UploadResponse {
  success: boolean;
  url?: string;
  error?: string;
}

interface CloudinarySignature {
  signature: string;
  timestamp: number;
  cloudName: string;
  apiKey: string;
  uploadPreset: string;
}

export const useFormSubmission = ({
  apiKey,
  formName = "Contact Form",
  allowFiles = false,
  maxFileSize = 10 * 1024 * 1024, // Default 10MB
  allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
    "application/pdf",
    "text/plain",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
  ],
}: UseFormSubmissionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState<string[]>([]);

  // Get Cloudinary signature from backend
  const getCloudinarySignature =
    async (): Promise<CloudinarySignature | null> => {
      try {
        const response = await fetch("/api/cloudinary-signature");

        if (!response.ok) {
          throw new Error(`Failed to get signature: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Failed to get Cloudinary signature:", error);
        toast.error("Failed to prepare file upload");
        return null;
      }
    };

  // Helper function to format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  // Enhanced file validation
  const validateFile = (file: File): { valid: boolean; message?: string } => {
    // Check file type
    if (!allowedFileTypes.includes(file.type)) {
      const fileExtension =
        file.name.split(".").pop()?.toUpperCase() || "UNKNOWN";
      return {
        valid: false,
        message: `File type not allowed (${fileExtension}): ${file.name}`,
      };
    }

    // Check file size
    if (file.size > maxFileSize) {
      return {
        valid: false,
        message: `File too large (${formatFileSize(
          file.size
        )} > ${formatFileSize(maxFileSize)}): ${file.name}`,
      };
    }

    // Optional: Check file name length
    if (file.name.length > 100) {
      return {
        valid: false,
        message: `File name too long (${file.name.length} characters): ${file.name}`,
      };
    }

    // Optional: Check for empty files
    if (file.size === 0) {
      return {
        valid: false,
        message: `File is empty: ${file.name}`,
      };
    }

    return { valid: true };
  };

  // Validate multiple files and return results
  const validateFiles = (
    files: File[]
  ): {
    validFiles: File[];
    invalidFiles: { file: File; reason: string }[];
  } => {
    const validFiles: File[] = [];
    const invalidFiles: { file: File; reason: string }[] = [];

    files.forEach((file) => {
      const validation = validateFile(file);
      if (validation.valid) {
        validFiles.push(file);
      } else {
        invalidFiles.push({
          file,
          reason: validation.message || "Unknown validation error",
        });
      }
    });

    return { validFiles, invalidFiles };
  };

  // Upload media to Cloudinary with signed preset
  const uploadToCloudinary = async (file: File): Promise<UploadResponse> => {
    // Validate file before upload
    const validation = validateFile(file);
    if (!validation.valid) {
      return {
        success: false,
        error: validation.message || "File validation failed",
      };
    }

    // Get signature from backend
    const signatureData = await getCloudinarySignature();

    if (!signatureData) {
      return {
        success: false,
        error: "Failed to get upload authorization",
      };
    }

    const formData = new FormData();

    // Append file
    formData.append("file", file);

    // Append required parameters for signed upload
    formData.append("upload_preset", signatureData.uploadPreset);
    formData.append("api_key", signatureData.apiKey);
    formData.append("timestamp", signatureData.timestamp.toString());
    formData.append("signature", signatureData.signature);

    // Optional: Add metadata
    formData.append(
      "context",
      `filename=${file.name}|uploaded_from=quiet_report|size=${file.size}|type=${file.type}`
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/upload`,
        {
          method: "POST",
          body: formData,
          mode: "cors",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Upload failed: ${errorData.error?.message || response.status}`
        );
      }

      const data = await response.json();

      if (data.secure_url) {
        return { success: true, url: data.secure_url };
      } else {
        return {
          success: false,
          error: data.error?.message || "Upload failed",
        };
      }
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Upload failed",
      };
    }
  };

  // Handle multiple media uploads
  const uploadMediaFiles = async (files: File[]): Promise<string[]> => {
    if (files.length === 0) return [];

    // Validate all files first
    const { validFiles, invalidFiles } = validateFiles(files);

    // Show errors for invalid files
    if (invalidFiles.length > 0) {
      invalidFiles.forEach(({ file, reason }) => {
        toast.error(reason, {
          duration: 5000,
          icon: "❌",
        });
      });

      // If no valid files remain, return empty array
      if (validFiles.length === 0) {
        toast.error("No valid files to upload");
        return [];
      }

      // Show warning about skipped files
      if (validFiles.length > 0) {
        toast(
          `Skipped ${invalidFiles.length} invalid file(s). Uploading ${validFiles.length} valid file(s).`,
          {
            duration: 3000,
            icon: "⚠️",
          }
        );
      }
    }

    // Get signature once for all files
    const signatureData = await getCloudinarySignature();

    if (!signatureData) {
      toast.error("Failed to get upload authorization");
      return [];
    }

    const uploadPromises = validFiles.map((file) =>
      uploadToCloudinaryWithSignature(file, signatureData)
    );

    const results = await Promise.all(uploadPromises);

    const successfulUploads = results
      .filter((result) => result.success && result.url)
      .map((result) => result.url as string);

    // Show error for failed uploads
    const failedCount = results.filter((r) => !r.success).length;
    if (failedCount > 0) {
      const failedMessages = results
        .filter((r) => !r.success)
        .map((r) => r.error)
        .filter(Boolean)
        .join(", ");

      toast.error(
        `${failedCount} file(s) failed to upload: ${failedMessages}`,
        { duration: 5000 }
      );
    }

    return successfulUploads;
  };

  // Helper function to upload with pre-fetched signature
  const uploadToCloudinaryWithSignature = async (
    file: File,
    signatureData: CloudinarySignature
  ): Promise<UploadResponse> => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", signatureData.uploadPreset);
    formData.append("api_key", signatureData.apiKey);
    formData.append("timestamp", signatureData.timestamp.toString());
    formData.append("signature", signatureData.signature);

    // Add folder and tags for better organization
    formData.append("folder", "quiet_reports/evidence");
    formData.append("tags", "report,evidence");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/upload`,
        {
          method: "POST",
          body: formData,
          mode: "cors",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error?.message || `Upload failed: ${response.status}`
        );
      }

      const data = await response.json();

      if (data.secure_url) {
        console.log(`✅ Upload successful: ${file.name} → ${data.secure_url}`);
        return { success: true, url: data.secure_url };
      } else {
        return {
          success: false,
          error: data.error?.message || "Upload failed",
        };
      }
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Upload failed",
      };
    }
  };

  // Submit form to Web3Forms
  const submitForm = async (
    formData: FormData,
    mediaFiles?: File[],
    mediaFieldName: string = "media_urls"
  ) => {
    setIsSubmitting(true);

    try {
      let mediaUrls: string[] = [];

      // Upload media files if provided
      if (mediaFiles && mediaFiles.length > 0) {
        if (!allowFiles) {
          toast.error("File upload is not allowed for this form");
          setIsSubmitting(false);
          return false;
        }

        // Quick pre-validation before showing loading toast
        const totalSize = mediaFiles.reduce((sum, file) => sum + file.size, 0);
        if (totalSize > maxFileSize * 10) {
          // Rough check: 10x individual limit
          toast.error("Total file size exceeds reasonable limit");
          setIsSubmitting(false);
          return false;
        }

        const uploadToast = toast.loading(
          `Uploading ${mediaFiles.length} file(s)...`
        );

        mediaUrls = await uploadMediaFiles(mediaFiles);
        toast.dismiss(uploadToast);

        if (mediaUrls.length === 0) {
          toast.error("Failed to upload any files. Please try again.");
          setIsSubmitting(false);
          return false;
        }

        setUploadedMedia(mediaUrls);

        // Show success summary
        if (mediaUrls.length > 0) {
          toast.success(`Successfully uploaded ${mediaUrls.length} file(s)`, {
            duration: 3000,
          });
        }
      }

      // Prepare form data for Web3Forms
      const formDataWithMedia = {
        ...formData,
        access_key: apiKey,
        subject: `${formName} Submission`,
        from_name: formData.name || formData.email || "Anonymous",
        [mediaFieldName]: mediaUrls.length > 0 ? mediaUrls.join(", ") : "",
        // Add additional metadata
        timestamp: new Date().toISOString(),
        website: "quiet-report.net",
        total_files: mediaFiles?.length || 0,
        uploaded_files: mediaUrls.length,
        max_file_size: formatFileSize(maxFileSize),
        allowed_file_types: allowedFileTypes.join(", "),
      };

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataWithMedia),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form submitted successfully!", {
          duration: 5000,
          icon: "✅",
        });
        return true;
      } else {
        console.error("Web3Forms error:", result);
        toast.error(
          result.message || "Failed to submit form. Please try again.",
          { duration: 5000 }
        );
        return false;
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.", { duration: 5000 });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Export validation function for use in components
  const validateFilesBeforeUpload = (files: File[]): boolean => {
    const { invalidFiles } = validateFiles(files);

    if (invalidFiles.length > 0) {
      invalidFiles.forEach(({ file, reason }) => {
        toast.error(reason, { duration: 4000 });
      });
      return false;
    }

    return true;
  };

  return {
    isSubmitting,
    uploadedMedia,
    submitForm,
    validateFilesBeforeUpload, // Export for component use
    maxFileSize,
    allowedFileTypes,
    formatFileSize, // Helper function
  };
};
