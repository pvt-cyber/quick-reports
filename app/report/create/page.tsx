"use client";

import Navigation from "@/app/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Upload,
  Lock,
  Loader2,
  CheckCircle,
  User,
  Mail,
  Phone,
  Eye,
  Edit,
  Building2,
  UserCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import MediaUpload from "@/app/components/MediaUpload";
import { useFormSubmission } from "@/app/hooks/useFormSubmission";
import toast from "react-hot-toast";

export default function CreateReportPage() {
  const [showPreview, setShowPreview] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [formData, setFormData] = useState({
    // Entity type (person or business)
    entityType: "person",

    // PERSONAL INFORMATION (Required - moved to top)
    fullName: "",
    email: "",
    phone: "",
    contactPreference: "email",

    // Report details
    category: "",
    title: "",
    description: "",
    amount: "",
    date: "",
    location: "",
  });

  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Initialize form submission hook
  const { isSubmitting, submitForm, validateFilesBeforeUpload } =
    useFormSubmission({
      apiKey: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || "",
      formName: "Report Submission",
      allowFiles: true,
      maxFileSize: 10 * 1024 * 1024,
      allowedFileTypes: [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
    });

  // Validation functions
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  // Check if personal info is valid (ALL required now)
  const isPersonalInfoValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      ((formData.contactPreference === "email" &&
        formData.email.trim() !== "" &&
        validateEmail(formData.email)) ||
        (formData.contactPreference === "phone" &&
          formData.phone.trim() !== "" &&
          validatePhone(formData.phone)))
    );
  };

  // Check if main report fields are valid
  const isReportValid = () => {
    return (
      formData.category.trim() !== "" &&
      formData.title.trim() !== "" &&
      formData.description.trim() !== ""
    );
  };

  // Check if form is ready for preview
  const isReadyForPreview = () => {
    return isPersonalInfoValid() && isReportValid();
  };

  // Check if form is ready for submission
  const isReadyForSubmission = () => {
    return isPersonalInfoValid() && isReportValid();
  };

  const handlePreview = () => {
    if (!isReadyForPreview()) {
      if (!isPersonalInfoValid()) {
        toast.error("Please fill in all required contact information");
      } else if (!isReportValid()) {
        toast.error("Please fill in all required report fields");
      }
      return;
    }
    setShowPreview(true);
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isReadyForSubmission()) {
      if (!isPersonalInfoValid()) {
        toast.error("Please provide valid contact information");
      }
      return;
    }

    setSubmitted(true);

    // Prepare form data
    const reportData = {
      // Entity type
      entity_type:
        formData.entityType === "person"
          ? "Individual"
          : "Business/Organization",
      entity_type_code: formData.entityType,

      // PERSONAL INFORMATION (Always included - no anonymity)
      reporter_full_name: formData.fullName,
      reporter_email: formData.email || "Not provided",
      reporter_phone: formData.phone || "Not provided",
      contact_preference: formData.contactPreference,

      // Report details
      category: formData.category,
      title: formData.title,
      description: formData.description,
      financial_amount: formData.amount || "Not specified",
      incident_date: formData.date || "Not specified",
      location: formData.location || "Not specified",

      // Metadata
      timestamp: new Date().toISOString(),
      subject: `🚨 ${
        formData.entityType === "person" ? "INDIVIDUAL" : "BUSINESS"
      } REPORT: ${formData.title}`,
    };

    const success = await submitForm(
      reportData,
      evidenceFiles,
      "evidence_urls"
    );

    if (success) {
      // Reset form
      setFormData({
        entityType: "person",
        fullName: "",
        email: "",
        phone: "",
        contactPreference: "email",
        category: "",
        title: "",
        description: "",
        amount: "",
        date: "",
        location: "",
      });
      setEvidenceFiles([]);
      setShowPreview(false);

      toast.success(
        "Report submitted successfully! You'll receive a confirmation email.",
        {
          duration: 6000,
          icon: "🚨",
        }
      );

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      setSubmitted(false);
    }
  };

  const categories = [
    "Online Shopping Fraud",
    "Investment Scam",
    "Phishing Attack",
    "Fake Job Offer",
    "Tech Support Scam",
    "Romance Scam",
    "Impersonation Fraud",
    "Business Email Compromise",
    "Cryptocurrency Scam",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <Shield className="w-16 h-16 text-red-600" />
                <AlertTriangle className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              File a Report
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Help protect others by reporting suspicious activities. Your
              report will be reviewed within 24-48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Mode Toggle */}
              <div className="flex border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${
                    !showPreview
                      ? "bg-red-600 text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Edit className="w-5 h-5 inline mr-2" />
                  Edit Report
                </button>
                <button
                  type="button"
                  onClick={handlePreview}
                  className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${
                    showPreview
                      ? "bg-red-600 text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Eye className="w-5 h-5 inline mr-2" />
                  Preview Report
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {!showPreview ? (
                    /* EDIT MODE - Single Form */
                    <motion.div
                      key="edit"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      {/* PERSONAL INFORMATION SECTION - MOVED TO TOP */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-200 pb-2">
                          <UserCircle className="w-6 h-6 text-blue-600" />
                          Your Contact Information
                          <span className="text-sm font-normal text-red-500 ml-2">
                            * All required
                          </span>
                        </h2>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                              <label className="block text-gray-700 mb-2">
                                Full Name{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                  type="text"
                                  value={formData.fullName}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      fullName: e.target.value,
                                    })
                                  }
                                  placeholder="Your full legal name"
                                  className="w-full pl-10 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  required
                                  disabled={isSubmitting}
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-gray-700 mb-2">
                                Email Address{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      email: e.target.value,
                                    })
                                  }
                                  placeholder="your@email.com"
                                  className="w-full pl-10 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  required={
                                    formData.contactPreference === "email"
                                  }
                                  disabled={isSubmitting}
                                />
                              </div>
                              {formData.email &&
                                !validateEmail(formData.email) && (
                                  <p className="text-red-500 text-sm mt-1">
                                    Please enter a valid email address
                                  </p>
                                )}
                            </div>

                            <div>
                              <label className="block text-gray-700 mb-2">
                                Phone Number{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      phone: e.target.value,
                                    })
                                  }
                                  placeholder="+1 (555) 123-4567"
                                  className="w-full pl-10 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  required={
                                    formData.contactPreference === "phone"
                                  }
                                  disabled={isSubmitting}
                                />
                              </div>
                              {formData.phone &&
                                !validatePhone(formData.phone) && (
                                  <p className="text-red-500 text-sm mt-1">
                                    Please enter a valid phone number
                                  </p>
                                )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-700 mb-2">
                              Preferred Contact Method{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-3">
                              <button
                                type="button"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    contactPreference: "email",
                                  })
                                }
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                  formData.contactPreference === "email"
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                }`}
                                disabled={isSubmitting}
                              >
                                Email
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    contactPreference: "phone",
                                  })
                                }
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                  formData.contactPreference === "phone"
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                }`}
                                disabled={isSubmitting}
                              >
                                Phone
                              </button>
                            </div>
                          </div>

                          <p className="text-sm text-blue-700 bg-white p-3 rounded-lg">
                            <strong>Note:</strong> Your contact information is
                            required for verification purposes and will be kept
                            confidential. We may need to reach you for
                            additional details about your report.
                          </p>
                        </div>
                      </div>

                      {/* Entity Type Selection */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-200 pb-2">
                          <Building2 className="w-6 h-6 text-red-600" />
                          Report Details
                        </h2>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                          <label className="block text-gray-700 font-medium mb-3">
                            What are you reporting?{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.entityType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                entityType: e.target.value,
                              })
                            }
                            className="w-full p-4 border-2 border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg bg-white"
                            disabled={isSubmitting}
                          >
                            <option value="person">
                              👤 Report an Individual Person
                            </option>
                            <option value="business">
                              🏢 Report a Business/Organization
                            </option>
                          </select>
                          <p className="mt-2 text-sm text-gray-600">
                            {formData.entityType === "person"
                              ? "Reporting an individual requires their name and identifying details if known."
                              : "Reporting a business requires company name and registration details if known."}
                          </p>
                        </div>
                      </div>

                      {/* Report Details */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">
                              Category <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={formData.category}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  category: e.target.value,
                                })
                              }
                              className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              required
                              disabled={isSubmitting}
                            >
                              <option value="">Select a category</option>
                              {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">
                              Title <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={formData.title}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  title: e.target.value,
                                })
                              }
                              placeholder="Brief summary of what happened"
                              className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              required
                              disabled={isSubmitting}
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">
                              Description{" "}
                              <span className="text-red-500">*</span>
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
                              placeholder="Provide detailed information about what happened, including dates, times, and any relevant details..."
                              className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              required
                              disabled={isSubmitting}
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 mb-2">
                              Amount Involved
                            </label>
                            <div className="relative">
                              <input
                                type={showAmount ? "text" : "password"}
                                value={formData.amount}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    amount: e.target.value,
                                  })
                                }
                                placeholder="$ amount if any"
                                className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent pr-16"
                                disabled={isSubmitting}
                              />
                              <button
                                type="button"
                                onClick={() => setShowAmount(!showAmount)}
                                className="absolute right-3 top-3 text-sm text-gray-600 hover:text-gray-900"
                              >
                                {showAmount ? "Hide" : "Show"}
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-700 mb-2">
                              Date of Incident
                            </label>
                            <input
                              type="date"
                              value={formData.date}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  date: e.target.value,
                                })
                              }
                              className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              disabled={isSubmitting}
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">
                              Location
                            </label>
                            <input
                              type="text"
                              value={formData.location}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  location: e.target.value,
                                })
                              }
                              placeholder="City, state, country, or online platform"
                              className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Evidence Upload */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-200 pb-2">
                          <Upload className="w-6 h-6 text-green-600" />
                          Evidence (Optional but Recommended)
                        </h2>

                        <MediaUpload
                          onFilesSelected={setEvidenceFiles}
                          maxFiles={10}
                          maxSize={5}
                          acceptedTypes="image/jpeg,image/jpg,image/png,image/webp,.pdf,.doc,.docx"
                          label="Upload screenshots, documents, or images (PDF, Word, Images)"
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Preview Button */}
                      <button
                        type="button"
                        onClick={handlePreview}
                        disabled={!isReadyForPreview() || isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl hover:from-red-700 hover:to-orange-600 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg transition-all"
                      >
                        <Eye className="w-5 h-5" />
                        Preview Report
                      </button>
                    </motion.div>
                  ) : (
                    /* PREVIEW MODE */
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Report Summary */}
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          Review Your Report
                        </h2>

                        <div className="space-y-4">
                          {/* Entity Type Badge */}
                          <div className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg font-bold">
                            {formData.entityType === "person"
                              ? "👤 INDIVIDUAL REPORT"
                              : "🏢 BUSINESS REPORT"}
                          </div>

                          {/* Contact Information Preview */}
                          <div className="bg-white rounded-lg p-4">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <UserCircle className="w-5 h-5 text-blue-600" />
                              Reporter Information
                            </h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex">
                                <span className="w-24 text-gray-600">
                                  Full Name:
                                </span>
                                <span className="text-gray-900 font-medium">
                                  {formData.fullName}
                                </span>
                              </div>
                              {formData.email && (
                                <div className="flex">
                                  <span className="w-24 text-gray-600">
                                    Email:
                                  </span>
                                  <span className="text-gray-900">
                                    {formData.email}
                                  </span>
                                </div>
                              )}
                              {formData.phone && (
                                <div className="flex">
                                  <span className="w-24 text-gray-600">
                                    Phone:
                                  </span>
                                  <span className="text-gray-900">
                                    {formData.phone}
                                  </span>
                                </div>
                              )}
                              <div className="flex">
                                <span className="w-24 text-gray-600">
                                  Contact by:
                                </span>
                                <span className="text-gray-900 capitalize">
                                  {formData.contactPreference}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Report Details Preview */}
                          <div className="bg-white rounded-lg p-4 space-y-3">
                            <h3 className="font-bold text-gray-900 mb-2">
                              Report Details
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <span className="text-gray-600">Category:</span>
                              <span className="font-medium text-gray-900">
                                {formData.category}
                              </span>

                              <span className="text-gray-600">Title:</span>
                              <span className="font-medium text-gray-900">
                                {formData.title}
                              </span>

                              {formData.amount && (
                                <>
                                  <span className="text-gray-600">Amount:</span>
                                  <span className="font-medium text-green-600">
                                    {formData.amount}
                                  </span>
                                </>
                              )}

                              {formData.date && (
                                <>
                                  <span className="text-gray-600">Date:</span>
                                  <span className="font-medium text-gray-900">
                                    {formData.date}
                                  </span>
                                </>
                              )}

                              {formData.location && (
                                <>
                                  <span className="text-gray-600">
                                    Location:
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    {formData.location}
                                  </span>
                                </>
                              )}

                              <span className="text-gray-600">Evidence:</span>
                              <span className="font-medium text-gray-900">
                                {evidenceFiles.length} file
                                {evidenceFiles.length !== 1 ? "s" : ""}
                              </span>
                            </div>

                            <div>
                              <span className="text-gray-600 text-sm block mb-1">
                                Description:
                              </span>
                              <p className="text-gray-900 bg-gray-50 p-3 rounded-lg text-sm">
                                {formData.description}
                              </p>
                            </div>
                          </div>

                          {/* Disclaimer */}
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                            <strong>Please verify:</strong> Make sure all
                            information is accurate, including your contact
                            details. False reports may have legal consequences.
                            Your information will be kept confidential.
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={handleEdit}
                          className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors font-medium flex-1"
                          disabled={isSubmitting}
                        >
                          Edit Report
                        </button>
                        <button
                          type="submit"
                          disabled={
                            !isReadyForSubmission() || isSubmitting || submitted
                          }
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Shield className="w-5 h-5" />
                              Submit Report
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>

          {/* Help Text */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <Lock className="w-4 h-4 inline mr-1" />
            All reports and personal information are encrypted and secure. Your
            identity is protected.
          </div>
        </div>
      </div>
    </div>
  );
}
