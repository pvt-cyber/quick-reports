// app/terms/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  BookOpen,
} from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using Quiet-Report, you accept and agree to be bound by these Terms of Service.",
      important: true,
    },
    {
      title: "User Responsibilities",
      content:
        "Users must provide accurate information, not engage in fraudulent activities, and respect others' rights.",
      items: [
        "Provide truthful information in reports",
        "Respect privacy and confidentiality",
        "Not engage in harassment",
        "Comply with all applicable laws",
      ],
    },
    {
      title: "Report Guidelines",
      content:
        "All reports must be factual, evidence-based, and submitted in good faith.",
      items: [
        "Include verifiable evidence",
        "Do not include personal information of others",
        "Submit in appropriate categories",
        "Update reports with new information",
      ],
    },
    {
      title: "Intellectual Property",
      content:
        "Content submitted remains yours, but you grant us license to display it on our platform.",
      items: [
        "You retain ownership of your content",
        "Grant us license to display content",
        "Respect others' intellectual property",
        "No unauthorized copying of content",
      ],
    },
    {
      title: "Limitation of Liability",
      content:
        "We are not liable for user content, external links, or damages arising from platform use.",
      important: true,
    },
    {
      title: "Termination",
      content:
        "We may terminate accounts for violations of these terms or illegal activities.",
      items: [
        "Right to suspend or terminate accounts",
        "Appeal process available",
        "Content may be removed",
        "Repeat violations may lead to permanent ban",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Scale className="w-20 h-20 text-blue-600" />
                <FileText className="w-10 h-10 text-green-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-xl text-gray-600">Effective: January 2024</p>
          </div>

          {/* Quick Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Key Points Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">
                  Your Responsibilities
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Submit truthful reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Respect others' privacy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Follow community guidelines</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">
                  Our Commitments
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Protect your data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Review reports fairly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Provide safe platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 border ${
                  section.important
                    ? "bg-red-50 border-red-200"
                    : "bg-white border-gray-200 shadow-lg"
                }`}
              >
                {section.important && (
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-semibold">
                      Important
                    </span>
                  </div>
                )}

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">{section.content}</p>

                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 ${
                            section.important ? "bg-red-100" : "bg-blue-100"
                          }`}
                        >
                          <span
                            className={`font-bold text-sm ${
                              section.important
                                ? "text-red-600"
                                : "text-blue-600"
                            }`}
                          >
                            {itemIndex + 1}
                          </span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Agreement */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              By using our platform, you agree to:
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>These Terms of Service</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Our Privacy Policy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Community Guidelines</span>
              </div>
            </div>
            <p className="mt-8 text-gray-300">
              If you disagree with any part of these terms, please do not use
              our services.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Questions about these terms? Contact our legal team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
