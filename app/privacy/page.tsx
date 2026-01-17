// app/privacy/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Download,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly, including name, email, and report details. We also automatically collect usage data through cookies and analytics tools.",
      items: [
        "Personal information for account creation",
        "Report details and evidence",
        "Communication records",
        "Usage and analytics data",
      ],
    },
    {
      title: "How We Use Your Information",
      content:
        "Your information is used to provide and improve our services, process reports, ensure platform security, and communicate with you.",
      items: [
        "Process and publish scam reports",
        "Provide customer support",
        "Improve platform features",
        "Ensure safety and security",
      ],
    },
    {
      title: "Data Protection",
      content:
        "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data.",
      items: [
        "End-to-end encryption",
        "Regular security audits",
        "Access control systems",
        "Data anonymization where possible",
      ],
    },
    {
      title: "Your Rights",
      content:
        "You have rights regarding your personal data, including access, correction, deletion, and objection to processing.",
      items: [
        "Access your personal data",
        "Request corrections",
        "Delete your account",
        "Opt-out of communications",
      ],
    },
    {
      title: "Third-Party Sharing",
      content:
        "We do not sell your personal data. We may share information with authorities when legally required or to protect rights.",
      items: [
        "Only with your consent",
        "When legally required",
        "To protect rights and safety",
        "With service providers (under contract)",
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
                <Lock className="w-20 h-20 text-blue-600" />
                <Shield className="w-10 h-10 text-green-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600">Last updated: January 2024</p>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-blue-600" />
              At a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900">
                  We Protect Your Data
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Anonymous reporting options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>No data selling</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900">You're In Control</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Access your data anytime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Request data deletion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Control communications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">{section.content}</p>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-bold text-sm">
                          {itemIndex + 1}
                        </span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Important Notes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• We may update this policy as our services evolve</li>
                  <li>• Major changes will be notified via email</li>
                  <li>• Continued use constitutes acceptance of changes</li>
                  <li>• You can opt-out at any time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Download */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a
              href="/contact"
              className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-center hover:bg-blue-700"
            >
              Contact Privacy Team
            </a>
            <button className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:bg-gray-50 flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              Download Full Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
