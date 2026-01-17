"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  User,
  Building,
  Mail,
  MessageSquare,
  FileText,
  Clock,
  Lock,
  Eye,
  ChevronRight,
  Upload,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import MediaUpload from "@/app/components/MediaUpload";
import { useFormSubmission } from "@/app/hooks/useFormSubmission";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ReportAbusePage() {
  const [step, setStep] = useState(1);
  const [reportType, setReportType] = useState<"individual" | "business">(
    "individual"
  );
  const [formData, setFormData] = useState({
    // Step 1
    reporterType: "victim", // victim, witness, organization
    // Step 2
    subjectName: "",
    subjectContact: "",
    subjectLocation: "",
    businessName: "",
    businessWebsite: "",
    businessRegistration: "",
    // Step 3
    incidentType: "",
    incidentDate: "",
    incidentLocation: "",
    description: "",
    financialLoss: "",
    emotionalImpact: "",
    // Step 4
    evidenceDescription: "",
    additionalInfo: "",
    anonymity: true,
    consent: false,
  });

  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Initialize form submission hook
  const { isSubmitting, submitForm } = useFormSubmission({
    apiKey: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || "",
    formName: "Abuse Report",
    allowFiles: true,
    maxFileSize: 10 * 1024 * 1024, // 10MB
  });

  const incidentTypes = [
    "Harassment",
    "Bullying",
    "Defamation",
    "Impersonation",
    "Threats",
    "Hate Speech",
    "Discrimination",
    "Stalking",
    "Privacy Violation",
    "Financial Abuse",
    "Emotional Abuse",
    "Cyberbullying",
    "Revenge Porn",
    "Doxing",
    "Other",
  ];

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please consent to the terms before submitting");
      return;
    }

    // Prepare report data
    const reportData = {
      report_type: "ABUSE_REPORT",
      subject_type: reportType,
      reporter_type: formData.reporterType,

      // Subject information
      subject_name:
        reportType === "individual"
          ? formData.subjectName
          : formData.businessName,
      subject_contact: formData.subjectContact,
      subject_location: formData.subjectLocation,
      business_website: formData.businessWebsite,
      business_registration: formData.businessRegistration,

      // Incident details
      incident_type: formData.incidentType,
      incident_date: formData.incidentDate,
      incident_location: formData.incidentLocation,
      description: formData.description,
      financial_loss: formData.financialLoss,
      emotional_impact: formData.emotionalImpact,

      // Additional info
      evidence_description: formData.evidenceDescription,
      additional_info: formData.additionalInfo,
      anonymity: formData.anonymity ? "ANONYMOUS" : "IDENTIFIED",

      // Metadata
      timestamp: new Date().toISOString(),
      urgency: "HIGH",
      subject: `🚨 ABUSE REPORT: ${
        reportType === "individual"
          ? formData.subjectName
          : formData.businessName
      }`,
    };

    const success = await submitForm(
      reportData,
      evidenceFiles,
      "evidence_urls"
    );

    if (success) {
      setSubmitted(true);
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          reporterType: "victim",
          subjectName: "",
          subjectContact: "",
          subjectLocation: "",
          businessName: "",
          businessWebsite: "",
          businessRegistration: "",
          incidentType: "",
          incidentDate: "",
          incidentLocation: "",
          description: "",
          financialLoss: "",
          emotionalImpact: "",
          evidenceDescription: "",
          additionalInfo: "",
          anonymity: true,
          consent: false,
        });
        setEvidenceFiles([]);
        setReportType("individual");
        setStep(1);
      }, 5000);
    }
  };

  const StepIndicator = () => (
    <div className="mb-8">
      <div className="relative flex justify-between">
        {/* Background line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 -z-10" />

        {/* Progress line */}
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-red-600 transform -translate-y-1/2 -z-10 transition-all duration-500"
          style={{ width: `${((step - 1) / 4) * 100}%` }}
        />

        {/* Steps */}
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="relative flex flex-col items-center">
            <div
              className={`
                w-10 h-10 md:w-12 md:h-12
                rounded-full flex items-center justify-center 
                text-sm md:text-base font-bold
                border-4 border-white
                transition-all duration-300
                ${
                  step >= num
                    ? "bg-red-600 text-white scale-110"
                    : "bg-gray-200 text-gray-400"
                }
              `}
            >
              {num}
            </div>
            <span className="absolute -bottom-6 text-xs md:text-sm font-medium text-gray-600 whitespace-nowrap">
              {num === 1 && "Type"}
              {num === 2 && "Subject"}
              {num === 3 && "Details"}
              {num === 4 && "Evidence"}
              {num === 5 && "Review"}
            </span>
          </div>
        ))}
      </div>

      {/* Current Step Label */}
      <div className="text-center mt-8">
        <p className="text-lg font-bold text-gray-900">
          {step === 1 && "Select Report Type"}
          {step === 2 && "Subject Information"}
          {step === 3 && "Incident Details"}
          {step === 4 && "Add Evidence"}
          {step === 5 && "Review & Submit"}
        </p>
      </div>
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
              Report <span className="text-red-600">Abuse</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Report abusive behavior, harassment, or harmful content. Your
              report is confidential and will be handled with care.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-red-600">48h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Confidential</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-red-600">Legal</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-green-800 text-lg">
                      Report Submitted Successfully!
                    </h3>
                    <p className="text-green-700">
                      We've received your report. Our team will review it and
                      contact you within 48 hours if needed.
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/resources/support"
                        className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center gap-1"
                      >
                        Get immediate support{" "}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <StepIndicator />

              {/* Step 1: Report Type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Who are you reporting?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setReportType("individual")}
                        className={`p-6 border-2 rounded-xl text-left transition-all ${
                          reportType === "individual"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">
                              Individual
                            </h4>
                            <p className="text-sm text-gray-600">
                              Report a person
                            </p>
                          </div>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Harassment or bullying</li>
                          <li>• Impersonation</li>
                          <li>• Threats or abuse</li>
                        </ul>
                      </button>

                      <button
                        type="button"
                        onClick={() => setReportType("business")}
                        className={`p-6 border-2 rounded-xl text-left transition-all ${
                          reportType === "business"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <Building className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">
                              Business/Organization
                            </h4>
                            <p className="text-sm text-gray-600">
                              Report a company
                            </p>
                          </div>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Scam or fraud</li>
                          <li>• Unethical practices</li>
                          <li>• Harmful content</li>
                        </ul>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Your relationship to the incident
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["victim", "witness", "organization"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, reporterType: type })
                          }
                          className={`p-4 border rounded-lg text-center transition-all ${
                            formData.reporterType === type
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="font-medium text-gray-900 capitalize">
                            {type === "victim" && "Victim"}
                            {type === "witness" && "Witness"}
                            {type === "organization" && "Organization"}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {type === "victim" && "I am the target"}
                            {type === "witness" && "I witnessed it"}
                            {type === "organization" && "On behalf of org"}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Subject Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {reportType === "individual"
                      ? "About the Person"
                      : "About the Business"}
                  </h3>

                  {reportType === "individual" ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Full Name or Alias *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subjectName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subjectName: e.target.value,
                            })
                          }
                          placeholder="Name or username of the person"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Contact Info (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.subjectContact}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subjectContact: e.target.value,
                              })
                            }
                            placeholder="Email, phone, or social media"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2">
                            Location (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.subjectLocation}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subjectLocation: e.target.value,
                              })
                            }
                            placeholder="City, State, or Online"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          placeholder="Official company name"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Website (Optional)
                          </label>
                          <input
                            type="url"
                            value={formData.businessWebsite}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                businessWebsite: e.target.value,
                              })
                            }
                            placeholder="https://example.com"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2">
                            Registration Number (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.businessRegistration}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                businessRegistration: e.target.value,
                              })
                            }
                            placeholder="Company registration ID"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                      disabled={isSubmitting}
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Incident Details */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    Incident Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Type of Abuse *
                      </label>
                      <select
                        required
                        value={formData.incidentType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            incidentType: e.target.value,
                          })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        disabled={isSubmitting}
                      >
                        <option value="">Select type of abuse</option>
                        {incidentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Date of Incident
                        </label>
                        <input
                          type="date"
                          value={formData.incidentDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              incidentDate: e.target.value,
                            })
                          }
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          Location of Incident
                        </label>
                        <input
                          type="text"
                          value={formData.incidentLocation}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              incidentLocation: e.target.value,
                            })
                          }
                          placeholder="Where did it happen?"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        required
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        rows={5}
                        placeholder="Please provide a detailed description of what happened..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Financial Loss (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.financialLoss}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              financialLoss: e.target.value,
                            })
                          }
                          placeholder="e.g., $500"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          Emotional Impact
                        </label>
                        <select
                          value={formData.emotionalImpact}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              emotionalImpact: e.target.value,
                            })
                          }
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          disabled={isSubmitting}
                        >
                          <option value="">Select impact level</option>
                          <option value="low">Low - Mild distress</option>
                          <option value="moderate">
                            Moderate - Significant distress
                          </option>
                          <option value="high">
                            High - Severe emotional impact
                          </option>
                          <option value="critical">
                            Critical - Requires immediate support
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                      disabled={isSubmitting}
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Evidence */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    Add Evidence
                  </h3>

                  <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> Evidence significantly
                        strengthens your report. Upload screenshots, emails,
                        messages, or any relevant documents. All files are kept
                        confidential.
                      </p>
                    </div>

                    <MediaUpload
                      onFilesSelected={setEvidenceFiles}
                      maxFiles={10}
                      maxSize={5}
                      label="Upload Evidence (Screenshots, Emails, Documents)"
                      disabled={isSubmitting}
                    />

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Evidence Description (Optional)
                      </label>
                      <textarea
                        value={formData.evidenceDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            evidenceDescription: e.target.value,
                          })
                        }
                        rows={3}
                        placeholder="Briefly describe what evidence you're providing..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        value={formData.additionalInfo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            additionalInfo: e.target.value,
                          })
                        }
                        rows={3}
                        placeholder="Any other relevant information..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                      disabled={isSubmitting}
                    >
                      Review & Submit
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Review & Submit */}
              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    Review Your Report
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-4">Report Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Report Type:</span>
                          <span className="font-semibold">
                            {reportType === "individual"
                              ? "👤 Individual"
                              : "🏢 Business"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Your Role:</span>
                          <span className="font-semibold capitalize">
                            {formData.reporterType}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subject:</span>
                          <span className="font-semibold">
                            {reportType === "individual"
                              ? formData.subjectName || "Not provided"
                              : formData.businessName || "Not provided"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Incident Type:</span>
                          <span className="font-semibold">
                            {formData.incidentType || "Not specified"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Evidence Files:</span>
                          <span className="font-semibold">
                            {evidenceFiles.length} file
                            {evidenceFiles.length !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200">
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
                        className="w-5 h-5 text-red-600 rounded focus:ring-red-500 mt-1"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="anonymity" className="ml-3 text-gray-700">
                        <span className="font-medium">
                          Submit anonymously (recommended)
                        </span>
                        <p className="text-sm text-gray-600 mt-1">
                          Your identity will be protected. We'll contact you
                          only if necessary for follow-up.
                        </p>
                      </label>
                    </div>

                    <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consent: e.target.checked,
                          })
                        }
                        className="w-5 h-5 text-red-600 rounded focus:ring-red-500 mt-1"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="consent" className="ml-3 text-gray-700">
                        <span className="font-medium">
                          I understand and consent to the following:
                        </span>
                        <ul className="text-sm text-gray-600 mt-1 list-disc list-inside space-y-1">
                          <li>
                            This report will be reviewed by our abuse response
                            team
                          </li>
                          <li>
                            False reports may result in legal consequences
                          </li>
                          <li>
                            We may share information with law enforcement if
                            required by law
                          </li>
                          <li>
                            I am providing accurate information to the best of
                            my knowledge
                          </li>
                        </ul>
                      </label>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Lock className="w-5 h-5" />
                        Your Report is Secure
                      </h4>
                      <p className="text-green-700 text-sm">
                        All reports are encrypted and handled with strict
                        confidentiality. You'll receive a confirmation email
                        with a tracking number.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-bold shadow-lg hover:from-red-700 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting Report...
                        </>
                      ) : (
                        <>
                          <Shield className="w-5 h-5" />
                          🚨 Submit Abuse Report
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </form>

          {/* Support Resources */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-gray-600 mb-6">
                If you're in immediate danger or need urgent support, please
                contact emergency services or these support organizations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    National Abuse Hotline
                  </h4>
                  <p className="text-red-600 font-bold text-lg">
                    1-800-799-7233
                  </p>
                  <p className="text-gray-600 text-sm">
                    24/7 confidential support
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Crisis Text Line
                  </h4>
                  <p className="text-red-600 font-bold text-lg">
                    Text HOME to 741741
                  </p>
                  <p className="text-gray-600 text-sm">
                    Free 24/7 crisis support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
