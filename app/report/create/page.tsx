"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { useState, useEffect } from "react";
import MediaUpload from "@/app/components/MediaUpload";
import { useFormSubmission } from "@/app/hooks/useFormSubmission";
import toast from "react-hot-toast";

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
    anonymity: false, // Default to anonymous

    // Personal information fields
    name: "",
    email: "",
    phone: "",
    contactPreference: "email", // email or phone
    allowFollowUp: true,
  });

  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
  const [step2Valid, setStep2Valid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize form submission hook with file uploads allowed
  const { isSubmitting, submitForm, validateFilesBeforeUpload } =
    useFormSubmission({
      apiKey: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || "",
      formName: "Report Submission",
      allowFiles: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      allowedFileTypes: [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "application/pdf",
      ],
    });

  // Validate Step 2 inputs
  useEffect(() => {
    const isValid =
      formData.category.trim() !== "" &&
      formData.title.trim() !== "" &&
      formData.description.trim() !== "";
    setStep2Valid(isValid);
  }, [formData.category, formData.title, formData.description]);

  // Validate personal info when not anonymous
  const isPersonalInfoValid = () => {
    if (formData.anonymity) return true; // Anonymous, no personal info needed

    // Check required fields based on contact preference
    if (formData.contactPreference === "email") {
      return formData.email.trim() !== "" && validateEmail(formData.email);
    } else {
      return formData.phone.trim() !== "" && validatePhone(formData.phone);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.category || !formData.title || !formData.description) {
      toast.error("Please fill in all required fields");
      setStep(2);
      return;
    }

    // Validate personal info if not anonymous
    if (!formData.anonymity && !isPersonalInfoValid()) {
      toast.error("Please provide valid contact information");
      setStep(4); // Go to review step where personal info is
      return;
    }

    setSubmitted(true);

    // Prepare form data
    const reportData = {
      // Report details
      report_type:
        formData.type === "person"
          ? "Individual Report"
          : "Business/Organization Report",
      report_type_code: formData.type,
      category: formData.category,
      title: formData.title,
      description: formData.description,
      financial_amount: formData.amount,
      incident_date: formData.date,
      location: formData.location,

      // Anonymity info
      anonymity: formData.anonymity ? "Anonymous" : "Identified",

      // Personal information (only included if not anonymous)
      ...(!formData.anonymity
        ? {
            reporter_name: formData.name,
            reporter_email: formData.email,
            reporter_phone: formData.phone,
            contact_preference: formData.contactPreference,
            allow_follow_up: formData.allowFollowUp ? "Yes" : "No",
          }
        : {
            reporter_name: "Anonymous Reporter",
            reporter_email: "anonymous@quiet-report.net",
            reporter_phone: "Not provided",
            contact_preference: "none",
            allow_follow_up: "No",
          }),

      // Metadata
      timestamp: new Date().toISOString(),
      urgency: "HIGH",
      subject: `🚨 ${
        formData.type === "person" ? "INDIVIDUAL" : "BUSINESS"
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
        type: "person",
        category: "",
        title: "",
        description: "",
        amount: "",
        date: "",
        location: "",
        anonymity: true,
        name: "",
        email: "",
        phone: "",
        contactPreference: "email",
        allowFollowUp: true,
      });
      setEvidenceFiles([]);

      // Show success message
      toast.success("Report submitted successfully!", {
        duration: 5000,
        icon: "🚨",
      });

      // Reset form state after delay
      setTimeout(() => {
        setStep(1);
        setSubmitted(false);
      }, 3000);
    } else {
      setSubmitted(false);
    }
  };

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
    // Validate current step before proceeding
    if (step === 2 && !step2Valid) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (step === 3 && evidenceFiles.length === 0) {
      const confirmSkip = window.confirm(
        "No evidence files attached. Are you sure you want to continue? Evidence strengthens your report."
      );
      if (!confirmSkip) return;
    }

    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8 md:mb-12">
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="flex items-center">
          {/* Step Circle */}
          <div
            className={`
              w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
              rounded-full flex items-center justify-center 
              text-sm md:text-base lg:text-lg font-bold
              transition-all duration-300
              ${
                step >= num
                  ? "bg-red-600 text-white scale-105"
                  : "bg-gray-200 text-gray-400"
              }
            `}
          >
            {num}
          </div>

          {/* Connector Line (only between steps) */}
          {num < 4 && (
            <div
              className={`
                w-8 md:w-12 lg:w-16 xl:w-20 
                h-0.5 md:h-1
                transition-all duration-500
                ${step > num ? "bg-red-600" : "bg-gray-200"}
              `}
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

          <form onSubmit={handleSubmit}>
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
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, type: "person" });
                        nextStep();
                      }}
                      className="p-8 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
                      disabled={isSubmitting}
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
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, type: "business" });
                        nextStep();
                      }}
                      className="p-8 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
                      disabled={isSubmitting}
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
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong>{" "}
                      {formData.type === "person"
                        ? "Reporting individuals requires specific identifying information."
                        : "Business reports require company names and registration details."}
                    </p>
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
                      <label className="block text-gray-700 mb-2">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="" className="text-gray-500">
                          Select a category
                        </option>
                        {categories.map((cat) => (
                          <option
                            key={cat}
                            value={cat}
                            className="text-gray-900"
                          >
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        placeholder="Brief description of what happened"
                        className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Description <span className="text-red-500">*</span>
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
                        className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Amount Involved (Optional)
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
                            placeholder="e.g., $500"
                            className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent pr-10 placeholder-gray-500"
                            disabled={isSubmitting}
                          />
                          <button
                            type="button"
                            onClick={() => setShowAmount(!showAmount)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                          >
                            {showAmount ? "Hide" : "Show"}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          Date of Incident (Optional)
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Location (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="City, State, or Online Platform"
                        className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        disabled={!step2Valid || isSubmitting}
                      >
                        Continue to Evidence
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
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> Evidence significantly
                        strengthens your report. Upload screenshots, emails,
                        transaction records, or any relevant documents.
                      </p>
                    </div>

                    <MediaUpload
                      onFilesSelected={setEvidenceFiles}
                      maxFiles={10}
                      maxSize={5}
                      acceptedTypes="image/jpeg,image/jpg,image/png,image/webp,.pdf,.doc,.docx"
                      label="Upload Evidence (Screenshots, Emails, Documents)"
                      disabled={isSubmitting}
                    />

                    <div className="text-sm text-gray-600 p-4 bg-blue-50 rounded-lg">
                      <strong>Privacy Note:</strong> Files are uploaded to
                      secure cloud storage. Only authorized staff can access
                      uploaded evidence.
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        disabled={isSubmitting}
                      >
                        Review & Submit
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review & Submit with Personal Information */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Review & Submit
                  </h2>
                  <div className="space-y-6">
                    {/* Report Summary */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-lg mb-4">Report Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="text-gray-600 font-medium">
                            Report Type:
                          </span>
                          <span className="font-bold text-red-600">
                            {formData.type === "person"
                              ? "👤 INDIVIDUAL"
                              : "🏢 BUSINESS"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="text-gray-600 font-medium">
                            Category:
                          </span>
                          <span className="font-semibold text-gray-900">
                            {formData.category || "Not specified"}
                          </span>
                        </div>
                        <div className="flex justify-between items-start p-3 bg-white rounded-lg">
                          <span className="text-gray-600 font-medium">
                            Title:
                          </span>
                          <span className="font-semibold text-gray-900 text-right max-w-xs">
                            {formData.title || "Not specified"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="text-gray-600 font-medium">
                            Evidence Files:
                          </span>
                          <span className="font-semibold text-gray-900">
                            {evidenceFiles.length} file
                            {evidenceFiles.length !== 1 ? "s" : ""}
                          </span>
                        </div>
                        {formData.amount && (
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-gray-600 font-medium">
                              Amount Involved:
                            </span>
                            <span className="font-semibold text-green-600">
                              {formData.amount}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Anonymity Toggle */}
                    <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <input
                        type="checkbox"
                        id="anonymity"
                        checked={formData.anonymity}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            anonymity: e.target.checked,
                          });
                        }}
                        className="w-5 h-5 text-red-600 rounded focus:ring-red-500 mt-1"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="anonymity" className="ml-3 text-gray-700">
                        <span className="font-medium text-gray-900">
                          Submit anonymously
                        </span>
                        <p className="text-sm text-gray-600 mt-1">
                          Your personal information will not be shared with the
                          reported party. We'll still have your contact info for
                          follow-up if needed.
                        </p>
                      </label>
                    </div>

                    {/* Personal Information Section (shown when not anonymous) */}
                    {!formData.anonymity && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-white border border-gray-200 rounded-xl p-6 space-y-4"
                      >
                        <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                          <User className="w-5 h-5 text-blue-600" />
                          Your Contact Information
                          <span className="text-sm font-normal text-red-500 ml-2">
                            * Required
                          </span>
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-700 mb-2">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              placeholder="Your full name"
                              className="w-full p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                              required={!formData.anonymity}
                              disabled={isSubmitting}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                  className="w-full pl-10 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                                  required={
                                    !formData.anonymity &&
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
                                  className="w-full pl-10 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                                  required={
                                    !formData.anonymity &&
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
                              Preferred Contact Method
                            </label>
                            <div className="flex gap-4">
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
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                                disabled={isSubmitting}
                              >
                                Phone
                              </button>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              id="allowFollowUp"
                              checked={formData.allowFollowUp}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  allowFollowUp: e.target.checked,
                                })
                              }
                              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mt-1"
                              disabled={isSubmitting}
                            />
                            <label
                              htmlFor="allowFollowUp"
                              className="ml-3 text-gray-700"
                            >
                              <span className="font-medium text-gray-900">
                                Allow follow-up contact
                              </span>
                              <p className="text-sm text-gray-600 mt-1">
                                We may contact you for additional information or
                                updates on your report.
                              </p>
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Success Message Section */}
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Ready to Submit
                      </h4>
                      <p className="text-green-700 text-sm">
                        Your report will be reviewed within 24-48 hours. You'll
                        receive a confirmation email with a tracking number.
                      </p>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={
                          isSubmitting ||
                          submitted ||
                          (!formData.anonymity && !isPersonalInfoValid())
                        }
                        className="flex-1 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting Report...
                          </>
                        ) : (
                          <>
                            <Shield className="w-5 h-5" />
                            🚨 Submit Report
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
