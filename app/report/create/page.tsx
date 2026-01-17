// app/report/create/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, Upload, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function CreateReportPage() {
  const [step, setStep] = useState(1);
  const [showAmount, setShowAmount] = useState(false);
  const [formData, setFormData] = useState({
    type: "person",
    category: "",
    title: "",
    description: "",
    amount: "",
    date: "",
    location: "",
    evidence: [] as File[],
    anonymity: true,
  });

  const categories = [
    "Online Shopping",
    "Investment Scam",
    "Phishing",
    "Fake Job Offer",
    "Tech Support",
    "Romance Scam",
    "Impersonation",
    "Other",
  ];

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitting report:", formData);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-12">
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              step >= num
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-400"
            } font-bold`}
          >
            {num}
          </div>
          {num < 4 && (
            <div
              className={`w-24 h-1 ${
                step > num ? "bg-red-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Shield className="w-20 h-20 text-red-600" />
                <AlertTriangle className="w-10 h-10 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CREATE your reporting account
            </h1>
            <p className="text-xl text-gray-600">
              Setup your own account to publish, edit and cancel your reports.
            </p>
            <div className="mt-6 inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-bold text-lg">
              <Lock className="w-5 h-5 mr-2" />
              Get Started, it's FAST & EASY!
            </div>
          </div>

          {/* Progress Steps */}
          <StepIndicator />

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            {/* Step 1: Report Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What are you reporting?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    onClick={() => {
                      setFormData({ ...formData, type: "person" });
                      nextStep();
                    }}
                    className="p-8 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200">
                        <span className="text-2xl">👤</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        REPORT A PERSON
                      </h3>
                      <p className="text-gray-600">
                        Report an individual for fraudulent activities
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, type: "business" });
                      nextStep();
                    }}
                    className="p-8 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        REPORT A BUSINESS
                      </h3>
                      <p className="text-gray-600">
                        Report a company or organization
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Report Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="Brief description of what happened"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      rows={4}
                      placeholder="Provide detailed information about the incident..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Evidence */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Add Evidence
                </h2>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                    <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      Drag and drop screenshots, emails, or documents here
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        setFormData({
                          ...formData,
                          evidence: [...formData.evidence, ...files],
                        });
                      }}
                      className="hidden"
                      id="evidence-upload"
                    />
                    <label
                      htmlFor="evidence-upload"
                      className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 cursor-pointer"
                    >
                      Choose Files
                    </label>
                  </div>

                  {formData.evidence.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Uploaded Files:</h4>
                      <div className="space-y-2">
                        {formData.evidence.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span>{file.name}</span>
                            <button
                              onClick={() => {
                                const newEvidence = [...formData.evidence];
                                newEvidence.splice(index, 1);
                                setFormData({
                                  ...formData,
                                  evidence: newEvidence,
                                });
                              }}
                              className="text-red-600 hover:text-red-800"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Review & Submit
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4">Report Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-semibold">
                          {formData.type === "person" ? "Person" : "Business"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-semibold">
                          {formData.category || "Not specified"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Title:</span>
                        <span className="font-semibold">
                          {formData.title || "Not specified"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Files:</span>
                        <span className="font-semibold">
                          {formData.evidence.length} files
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymity"
                      checked={formData.anonymity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          anonymity: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                    />
                    <label htmlFor="anonymity" className="ml-3 text-gray-700">
                      Submit anonymously (recommended)
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 font-bold shadow-lg"
                    >
                      🚨 Submit Report
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
