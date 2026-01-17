// app/how-it-works/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  CheckCircle,
  Lock,
  Eye,
  MessageSquare,
  Bell,
  TrendingUp,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: "Create Report",
      description:
        "Fill out our secure form with details about the scam. You can remain anonymous.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      title: "Verification",
      icon: Shield,
      description:
        "Our team reviews the report for accuracy and assigns a severity level.",
      color: "from-purple-500 to-pink-500",
    },
    {
      step: 3,
      title: "Publication",
      icon: Users,
      description:
        "Verified reports are published to warn others and create public awareness.",
      color: "from-green-500 to-emerald-500",
    },
    {
      step: 4,
      title: "Mediation",
      icon: MessageSquare,
      description:
        "We facilitate communication between parties to resolve disputes.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Lock,
      title: "Secure & Encrypted",
      description: "All data is encrypted end-to-end",
    },
    {
      icon: Eye,
      title: "Anonymous Reporting",
      description: "Protect your identity while helping others",
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "Get notified about similar scams in your area",
    },
    {
      icon: TrendingUp,
      title: "Impact Tracking",
      description: "See how your report helps prevent future scams",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block mb-6"
            >
              <Shield className="w-24 h-24 text-red-600" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How <span className="text-red-600">Scam-Report</span> Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent process designed to protect consumers and promote
              ethical business practices
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 h-full">
                  <div
                    className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose <span className="text-red-400">Scam-Report</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands who have taken action against scams and helped
                protect their communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100">
                  🚨 Report a Scam Now
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10">
                  Browse Reports
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
