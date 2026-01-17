// app/resources/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Download,
  Video,
  Book,
  Search,
  Filter,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  Lock,
  Eye,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "All Resources",
    "Prevention Guides",
    "Recovery Steps",
    "Legal Resources",
    "Tools & Templates",
    "Educational Videos",
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Guide to Online Shopping Safety",
      category: "Prevention Guides",
      type: "PDF Guide",
      icon: Shield,
      description:
        "Learn how to identify fake online stores and protect your payments.",
      downloadCount: "2.5K",
      length: "15 min read",
      color: "from-blue-500 to-cyan-500",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Spot & Avoid Phishing Emails",
      category: "Prevention Guides",
      type: "Video Tutorial",
      icon: Video,
      description:
        "Step-by-step video showing how to identify phishing attempts.",
      downloadCount: "1.8K",
      length: "8 min video",
      color: "from-red-500 to-pink-500",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Scam Recovery Checklist",
      category: "Recovery Steps",
      type: "Template",
      icon: FileText,
      description:
        "What to do immediately after realizing you've been scammed.",
      downloadCount: "3.2K",
      length: "PDF Template",
      color: "from-green-500 to-emerald-500",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Legal Rights for Scam Victims",
      category: "Legal Resources",
      type: "Legal Guide",
      icon: Book,
      description: "Understand your legal options and how to pursue justice.",
      downloadCount: "1.2K",
      length: "20 min read",
      color: "from-purple-500 to-pink-500",
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Fraud Report Template",
      category: "Tools & Templates",
      type: "Template",
      icon: Download,
      description: "Ready-to-use template for reporting scams to authorities.",
      downloadCount: "4.1K",
      length: "Editable Doc",
      color: "from-orange-500 to-yellow-500",
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "How to Talk to Elderly About Scams",
      category: "Prevention Guides",
      type: "Guide",
      icon: Shield,
      description:
        "Sensitive approach to discussing scam prevention with seniors.",
      downloadCount: "1.5K",
      length: "12 min read",
      color: "from-indigo-500 to-blue-500",
      downloadUrl: "#",
    },
    {
      id: 7,
      title: "Business Vendor Verification Checklist",
      category: "Tools & Templates",
      type: "Checklist",
      icon: FileText,
      description: "Verify new suppliers and partners before doing business.",
      downloadCount: "2.8K",
      length: "PDF Checklist",
      color: "from-teal-500 to-green-500",
      downloadUrl: "#",
    },
    {
      id: 8,
      title: "Cryptocurrency Scam Prevention",
      category: "Prevention Guides",
      type: "Video Series",
      icon: Video,
      description: "3-part series on staying safe in crypto investments.",
      downloadCount: "3.5K",
      length: "25 min total",
      color: "from-yellow-500 to-amber-500",
      downloadUrl: "#",
    },
  ];

  const quickLinks = [
    {
      title: "Emergency Scam Response",
      description: "Immediate steps to take if you've been scammed",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      href: "/resources/emergency",
    },
    {
      title: "Anonymous Reporting Guide",
      description: "How to report safely without revealing identity",
      icon: Eye,
      color: "bg-blue-100 text-blue-600",
      href: "/resources/anonymous",
    },
    {
      title: "Data Protection Checklist",
      description: "Secure your personal information after a breach",
      icon: Lock,
      color: "bg-green-100 text-green-600",
      href: "/resources/data-protection",
    },
  ];

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

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
                <Book className="w-20 h-20 text-blue-600" />
                <FileText className="w-10 h-10 text-green-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources & <span className="text-blue-600">Tools</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free guides, templates, and tools to help you prevent, identify,
              and recover from scams
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {quickLinks.map((link, index) => (
              <Link href={link.href} key={link.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${link.color} p-6 rounded-2xl hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <link.icon className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{link.title}</h3>
                      <p className="text-sm opacity-90">{link.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option
                      key={cat}
                      value={cat === "All Resources" ? "all" : cat}
                    >
                      {cat}
                    </option>
                  ))}
                </select>

                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${resource.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}
                    >
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        {resource.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>📥 {resource.downloadCount} downloads</span>
                    <span>⏱️ {resource.length}</span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Popular Guides */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Popular Guides
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Step-by-Step Protection
                  </h3>
                  <div className="space-y-4">
                    {[
                      "How to Verify Online Sellers",
                      "Secure Payment Methods Guide",
                      "Two-Factor Authentication Setup",
                      "Regular Security Checkups",
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-blue-600">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Recovery Roadmap
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Immediate Action Checklist",
                      "Contacting Financial Institutions",
                      "Filing Police Reports",
                      "Credit Monitoring Setup",
                      "Emotional Support Resources",
                    ].map((item, index) => (
                      <Link
                        href={`/resources/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        key={item}
                      >
                        <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white transition-colors cursor-pointer">
                          <span className="text-gray-700">{item}</span>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="bg-gray-900 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Trusted Partners & Official Resources
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "FTC",
                  description: "Federal Trade Commission",
                  url: "#",
                },
                {
                  name: "IC3",
                  description: "Internet Crime Complaint Center",
                  url: "#",
                },
                {
                  name: "BBB",
                  description: "Better Business Bureau",
                  url: "#",
                },
                { name: "CISA", description: "Cybersecurity Agency", url: "#" },
              ].map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-2xl font-bold mb-2">{org.name}</div>
                  <div className="text-gray-300 text-sm mb-4">
                    {org.description}
                  </div>
                  <ExternalLink className="w-5 h-5 mx-auto" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Can't Find What You Need?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Request a specific resource or suggest a topic for our next
                guide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100">
                  Request Resource
                </button>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10">
                    Contact Our Team
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
