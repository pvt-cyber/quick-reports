"use client";

import { useState, useRef } from "react";
import {
  Upload,
  X,
  Image,
  File,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MediaUploadProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number; // in MB
  acceptedTypes?: string;
  label?: string;
  disabled?: boolean;
  onValidationError?: (error: string) => void;
}

export default function MediaUpload({
  onFilesSelected,
  maxFiles = 10,
  maxSize = 10, // Default 10MB
  acceptedTypes = "image/*,.pdf,.doc,.docx,.txt,.csv,.xls,.xlsx",
  label = "Upload Evidence",
  disabled = false,
  onValidationError,
}: MediaUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const maxBytes = maxSize * 1024 * 1024;

    // Check file size
    if (file.size > maxBytes) {
      return `File "${file.name}" exceeds ${maxSize}MB limit`;
    }

    // Check file count
    if (files.length >= maxFiles) {
      return `Maximum ${maxFiles} files allowed`;
    }

    // Better file type validation
    const extension = file.name.split(".").pop()?.toLowerCase() || "";

    // Check against the acceptedTypes string directly
    const acceptedTypesArray = acceptedTypes
      .split(",")
      .map((type) => type.trim().toLowerCase());

    // Check if file type matches any of the accepted types
    let isTypeValid = false;

    for (const acceptedType of acceptedTypesArray) {
      if (acceptedType === "*/*" || acceptedType === "image/*") {
        // Accept all files or all images
        isTypeValid = true;
        break;
      } else if (acceptedType.startsWith(".")) {
        // Extension check (e.g., .jpg, .pdf)
        if (`.${extension}` === acceptedType) {
          isTypeValid = true;
          break;
        }
      } else if (acceptedType.includes("/")) {
        // MIME type check (e.g., image/jpeg, application/pdf)
        if (file.type === acceptedType) {
          isTypeValid = true;
          break;
        } else if (acceptedType.endsWith("/*")) {
          // Wildcard MIME type (e.g., image/*, application/*)
          const [category] = acceptedType.split("/");
          if (file.type.startsWith(`${category}/`)) {
            isTypeValid = true;
            break;
          }
        }
      }
    }

    if (!isTypeValid) {
      return `File type "${extension}" not allowed. Accepted: ${acceptedTypes}`;
    }

    return null;
  };

  const handleFileChange = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles);
    const errors: string[] = [];
    const validFiles: File[] = [];

    // Validate each file
    newFiles.forEach((file) => {
      const error = validateFile(file);
      if (error) {
        errors.push(error);
        if (onValidationError) onValidationError(error);
      } else {
        validFiles.push(file);
      }
    });

    // Show validation errors
    if (errors.length > 0) {
      setValidationErrors(errors);
      setTimeout(() => setValidationErrors([]), 5000); // Clear after 5 seconds
    }

    // Add valid files
    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles].slice(0, maxFiles);
      setFiles(updatedFiles);
      onFilesSelected(updatedFiles);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesSelected(updatedFiles);
    setValidationErrors([]); // Clear errors when removing files
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return <Image className="w-5 h-5" />;
    } else if (file.type.includes("pdf")) {
      return <FileText className="w-5 h-5" />;
    } else if (file.type.includes("word") || file.type.includes("document")) {
      return <FileText className="w-5 h-5" />;
    } else if (file.type.includes("excel") || file.type.includes("sheet")) {
      return <FileText className="w-5 h-5" />;
    } else {
      return <File className="w-5 h-5" />;
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <span className="text-xs text-gray-500 ml-2">
          (Max {maxSize}MB per file, up to {maxFiles} files)
        </span>
      </label>

      {/* Validation Errors */}
      <AnimatePresence>
        {validationErrors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-50 border border-red-200 rounded-lg p-3"
          >
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                {validationErrors.map((error, index) => (
                  <p key={index} className="text-sm text-red-700">
                    {error}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Area */}
      <div
        className={`
          border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
          ${dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"}
          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:border-blue-400"
          }
        `}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (!disabled) handleFileChange(e.dataTransfer.files);
        }}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">
          Drag & drop files here or click to browse
        </p>
        <p className="text-sm text-gray-500">
          Supports images, PDFs, documents, spreadsheets (max {maxSize}MB each)
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes}
          onChange={(e) => handleFileChange(e.target.files)}
          className="hidden"
          disabled={disabled}
        />
      </div>

      {/* Selected Files */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            <h4 className="font-medium text-gray-700 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Selected Files ({files.length}/{maxFiles})
            </h4>
            <div className="space-y-2">
              {files.map((file, index) => (
                <motion.div
                  key={`${file.name}-${index}-${file.size}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group"
                >
                  <div className="flex items-center gap-3">
                    {getFileIcon(file)}
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)} •{" "}
                        {file.type.split("/")[1]?.toUpperCase() || "FILE"}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 rounded"
                    disabled={disabled}
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
