"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function TestUploadPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testUpload = async () => {
    setLoading(true);
    try {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

      console.log("Config:", { cloudName, uploadPreset });

      if (!cloudName || !uploadPreset) {
        toast.error("Missing environment variables");
        return;
      }

      // Create a simple test file
      const testFile = new File(["test content"], "test.txt", {
        type: "text/plain",
      });

      const formData = new FormData();
      formData.append("file", testFile);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
          mode: "cors",
        }
      );

      const data = await response.json();
      setResult(data);

      if (data.secure_url) {
        toast.success("Upload successful!");
      } else {
        toast.error("Upload failed");
      }
    } catch (error) {
      console.error("Test error:", error);
      toast.error("Test failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cloudinary Test</h1>
      <button
        onClick={testUpload}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? "Testing..." : "Test Upload"}
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      <div className="mt-4">
        <h2 className="font-bold">Environment Variables:</h2>
        <pre className="text-sm">
          Cloud Name:{" "}
          {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "NOT SET"}
          {"\n"}
          Upload Preset:{" "}
          {process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "NOT SET"}
        </pre>
      </div>
    </div>
  );
}
