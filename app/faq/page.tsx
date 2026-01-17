// app/faq/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Shield,
  FileText,
  Users,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "reporting",
      name: "Reporting Process",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "safety",
      name: "Safety & Privacy",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "mediation",
      name: "Mediation",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "technical",
      name: "Technical",
      icon: HelpCircle,
      color: "from-orange-500 to-red-500",
    },
  ];

  const questions = [
    {
      id: 0,
      category: "reporting",
      question: "How do I report a scam?",
      answer:
        'Click the "Report a Scam" button on any page or visit /report/create. Fill out our secure form with details about the incident. You can remain anonymous if preferred.',
      popular: true,
    },
    {
      id: 1,
      category: "safety",
      question: "Is my information kept private?",
      answer:
        "Yes. We use military-grade encryption and never share your personal information without consent. Anonymous reporting is available for maximum privacy.",
      popular: true,
    },
    {
      id: 2,
      category: "reporting",
      question: "What information should I include in my report?",
      answer:
        "Include: dates, amounts, communication methods, names/contact info of scammers, screenshots or evidence, and a detailed description of what happened.",
    },
    {
      id: 3,
      category: "mediation",
      question: "How does the mediation process work?",
      answer:
        "Our trained mediators facilitate communication between parties to reach resolution. This is optional and both parties must consent to participate.",
      popular: true,
    },
    {
      id: 4,
      category: "technical",
      question: "How long does it take for a report to be published?",
      answer:
        "Reports are typically reviewed within 24-48 hours. Verified reports are published immediately, while complex cases may take longer.",
    },
    {
      id: 5,
      category: "safety",
      question: "Can I edit or delete my report after submission?",
      answer:
        "Yes. You can edit your report anytime from your dashboard. Reports can be deleted within 30 days of submission if no mediation is in progress.",
    },
    {
      id: 6,
      category: "reporting",
      question: "What types of scams can I report?",
      answer:
        "You can report: online shopping fraud, phishing, investment scams, fake charities, romance scams, tech support scams, impersonation, and more.",
    },
    {
      id: 7,
      category: "mediation",
      question: "Is mediation legally binding?",
      answer:
        "No, mediation through our platform is voluntary and not legally binding. However, agreements reached can be used as evidence if legal action is taken.",
    },
    {
      id: 8,
      category: "technical",
      question: "How do I know if a report is verified?",
      answer:
        "Verified reports have a blue checkmark badge. Our team reviews evidence and cross-references information before verification.",
    },
    {
      id: 9,
      category: "safety",
      question: "What happens if someone falsely reports me?",
      answer:
        "You can file a dispute on the report page. Our team will investigate and may remove false reports. Legal action can be taken against false reporters.",
    },
    {
      id: 10,
      category: "reporting",
      question: "Can I report on behalf of someone else?",
      answer:
        "Yes, but you must have their permission or be their legal representative. Include their contact information in the report.",
    },
    {
      id: 11,
      category: "technical",
      question: "How do I search for existing reports?",
      answer:
        "Use the search bar on the Reports page. You can filter by category, location, date, and severity.",
    },
  ];

  const filteredQuestions = searchQuery
    ? questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : questions;

  const popularQuestions = questions.filter((q) => q.popular);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <HelpCircle className="w-20 h-20 text-blue-600" />
                <MessageSquare className="w-10 h-10 text-green-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about reporting scams, safety,
              and our platform
            </p>
          </div>

          {/* Search */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-16 pr-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Popular Questions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              Popular Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularQuestions.map((q) => (
                <div
                  key={q.id}
                  onClick={() =>
                    setOpenQuestion(openQuestion === q.id ? null : q.id)
                  }
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {q.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openQuestion === q.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openQuestion === q.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-gray-100"
                    >
                      <p className="text-gray-600">{q.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faqCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/faq#${category.id}`}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {questions.filter((q) => q.category === category.id).length}{" "}
                    questions
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* All Questions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              All Questions
            </h2>
            <div className="space-y-6">
              {filteredQuestions.map((q) => (
                <div
                  key={q.id}
                  onClick={() =>
                    setOpenQuestion(openQuestion === q.id ? null : q.id)
                  }
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                            {
                              faqCategories.find((c) => c.id === q.category)
                                ?.name
                            }
                          </span>
                          {q.popular && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" />
                              Popular
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {q.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          openQuestion === q.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {openQuestion === q.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-6 mt-6 border-t border-gray-100"
                      >
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {q.answer}
                        </p>
                        <div className="mt-6 flex gap-4">
                          <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                            👍 Helpful
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-800">
                            👎 Not helpful
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-800">
                            💬 Comment
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, value: "10K+", label: "Questions Answered" },
              { icon: Clock, value: "< 2h", label: "Avg. Response Time" },
              { icon: CheckCircle, value: "98%", label: "Satisfaction Rate" },
              {
                icon: MessageSquare,
                value: "24/7",
                label: "Support Available",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Support CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here
              to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100">
                  Contact Support
                </button>
              </Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10">
                Live Chat
              </button>
            </div>
            <div className="mt-8 text-white/80">
              <p>📧 support@quiet-report.com | 📞 1-800-QUIET-REPORT</p>
              <p className="mt-2">Available 24/7 for urgent scam reports</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Report a Scam",
                  description: "File a new report immediately",
                  href: "/report/create",
                  icon: FileText,
                },
                {
                  title: "Safety Guides",
                  description: "Learn how to protect yourself",
                  href: "/resources",
                  icon: Shield,
                },
                {
                  title: "Community Forum",
                  description: "Discuss with other users",
                  href: "/community",
                  icon: Users,
                },
              ].map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600" />
                    <div>
                      <h4 className="font-bold text-gray-900">{link.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
