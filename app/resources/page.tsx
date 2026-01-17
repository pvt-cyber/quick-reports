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

  // Updated with real download URLs and external links
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
      downloadUrl: "/resources/shopping-safety-guide.pdf",
      previewUrl: "https://www.consumer.ftc.gov/articles/online-shopping",
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
      downloadUrl: "https://www.youtube.com/watch?v=R12_y2BhKbE", // FTC Video
      previewUrl: "https://www.youtube.com/watch?v=R12_y2BhKbE",
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
      downloadUrl: "/resources/scam-recovery-checklist.pdf",
      previewUrl: "/resources/scam-recovery-preview.pdf",
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
      downloadUrl: "https://www.usa.gov/consumer-complaints",
      previewUrl: "https://www.usa.gov/consumer-complaints",
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
      downloadUrl: "/resources/fraud-report-template.docx",
      previewUrl: "/resources/fraud-report-preview.pdf",
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
      downloadUrl:
        "https://www.consumerfinance.gov/consumer-tools/educator-tools/resources-for-older-adults/protecting-against-fraud/",
      previewUrl:
        "https://www.consumerfinance.gov/consumer-tools/educator-tools/resources-for-older-adults/protecting-against-fraud/",
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
      downloadUrl: "/resources/vendor-verification-checklist.pdf",
      previewUrl: "/resources/vendor-verification-preview.pdf",
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
      downloadUrl: "https://www.youtube.com/watch?v=7a7kjB5cUqo", // Crypto scam prevention video
      previewUrl: "https://www.youtube.com/watch?v=7a7kjB5cUqo",
    },
  ];

  const quickLinks = [
    {
      title: "Emergency Scam Response",
      description: "Immediate steps to take if you've been scammed",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      href: "https://www.identitytheft.gov/",
    },
    {
      title: "Anonymous Reporting Guide",
      description: "How to report safely without revealing identity",
      icon: Eye,
      color: "bg-blue-100 text-blue-600",
      href: "https://www.ic3.gov/Home/FileComplaint",
    },
    {
      title: "Data Protection Checklist",
      description: "Secure your personal information after a breach",
      icon: Lock,
      color: "bg-green-100 text-green-600",
      href: "https://www.consumer.ftc.gov/articles/what-do-if-your-personal-information-exposed-data-breach",
    },
  ];

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  // Handle download function
  const handleDownload = (
    url: string,
    title: string,
    event: React.MouseEvent
  ) => {
    event.preventDefault();

    // If it's an external URL (starts with http), open in new tab
    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    // For local files, create a download link
    const link = document.createElement("a");
    link.href = url;
    link.download = title.replace(/\s+/g, "-").toLowerCase() + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show download confirmation
    console.log(`Downloading: ${title}`);
  };

  const handlePreview = (url: string, event: React.MouseEvent) => {
    event.preventDefault();
    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // For local PDFs, open in new tab
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

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
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${link.color} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200`}
                >
                  <div className="flex items-start gap-4">
                    <link.icon className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-700 opacity-90">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </a>
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
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                >
                  {categories.map((cat) => (
                    <option
                      key={cat}
                      value={cat === "All Resources" ? "all" : cat}
                      className="text-gray-900"
                    >
                      {cat}
                    </option>
                  ))}
                </select>

                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2 transition-colors">
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
                    <span className="text-gray-700">
                      📥 {resource.downloadCount} downloads
                    </span>
                    <span className="text-gray-700">⏱️ {resource.length}</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={(e) =>
                        handleDownload(resource.downloadUrl, resource.title, e)
                      }
                      className="flex-1 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {resource.type.includes("Video")
                        ? "Watch Now"
                        : "Download"}
                    </button>
                    <button
                      onClick={(e) =>
                        handlePreview(
                          resource.previewUrl || resource.downloadUrl,
                          e
                        )
                      }
                      className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
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
                      {
                        name: "How to Verify Online Sellers",
                        url: "https://www.bbb.org/all/online-shopping",
                      },
                      {
                        name: "Secure Payment Methods Guide",
                        url: "https://www.consumer.ftc.gov/articles/0223-sending-money",
                      },
                      {
                        name: "Two-Factor Authentication Setup",
                        url: "https://www.cisa.gov/secure-our-world/use-strong-authentication",
                      },
                      {
                        name: "Regular Security Checkups",
                        url: "https://staysafeonline.org/online-safety-privacy-basics/",
                      },
                    ].map((item, index) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 hover:bg-white rounded-lg transition-colors group"
                      >
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {item.name}
                          <ExternalLink className="w-3 h-3 ml-2 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Recovery Roadmap
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Immediate Action Checklist",
                        url: "https://www.identitytheft.gov/Steps",
                      },
                      {
                        name: "Contacting Financial Institutions",
                        url: "https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-i-think-i-have-been-a-victim-of-identity-theft-en-1419/",
                      },
                      {
                        name: "Filing Police Reports",
                        url: "https://www.ic3.gov/Home/FileComplaint",
                      },
                      {
                        name: "Credit Monitoring Setup",
                        url: "https://www.consumer.ftc.gov/articles/free-credit-reports",
                      },
                      {
                        name: "Emotional Support Resources",
                        url: "https://www.rainn.org/resources",
                      },
                    ].map((item, index) => (
                      <a
                        href={item.url}
                        key={item.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white transition-colors group"
                      >
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* External Resources - Updated with real links */}
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Trusted Online Resources
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  name: "FTC",
                  description: "Federal Trade Commission",
                  url: "https://www.ftc.gov",
                  color: "bg-red-500/20",
                },
                {
                  name: "IC3",
                  description: "Internet Crime Complaint Center",
                  url: "https://www.ic3.gov",
                  color: "bg-blue-500/20",
                },
                {
                  name: "BBB",
                  description: "Better Business Bureau",
                  url: "https://www.bbb.org",
                  color: "bg-green-500/20",
                },
                {
                  name: "CISA",
                  description: "Cybersecurity & Infrastructure Security Agency",
                  url: "https://www.cisa.gov",
                  color: "bg-purple-500/20",
                },
                {
                  name: "FBI",
                  description: "Federal Bureau of Investigation",
                  url: "https://www.fbi.gov/scams-and-safety",
                  color: "bg-yellow-500/20",
                },
                {
                  name: "USA.gov",
                  description: "Official U.S. Government Resources",
                  url: "https://www.usa.gov/identity-theft",
                  color: "bg-pink-500/20",
                },
                {
                  name: "FINRA",
                  description: "Financial Industry Regulatory Authority",
                  url: "https://www.finra.org/investors/protect-your-money",
                  color: "bg-cyan-500/20",
                },
                {
                  name: "SEC",
                  description: "Securities & Exchange Commission",
                  url: "https://www.investor.gov/protect-your-investments",
                  color: "bg-orange-500/20",
                },
              ].map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${org.color} rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group`}
                >
                  <div className="text-2xl font-bold mb-2">{org.name}</div>
                  <div className="text-gray-300 text-sm mb-4">
                    {org.description}
                  </div>
                  <ExternalLink className="w-5 h-5 mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Educational Videos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Educational Video Library
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Romance Scam Prevention",
                  channel: "FTC",
                  duration: "6:23",
                  url: "https://www.youtube.com/watch?v=9xG_Km6gH7M",
                  thumbnail:
                    "https://img.youtube.com/vi/9xG_Km6gH7M/mqdefault.jpg",
                },
                {
                  title: "Investment Scam Red Flags",
                  channel: "SEC",
                  duration: "8:45",
                  url: "https://www.youtube.com/watch?v=RYHY5f_VPc4",
                  thumbnail:
                    "https://img.youtube.com/vi/RYHY5f_VPc4/mqdefault.jpg",
                },
                {
                  title: "Tech Support Scams",
                  channel: "Microsoft",
                  duration: "4:32",
                  url: "https://www.youtube.com/watch?v=9KZ9uRHiVg4",
                  thumbnail:
                    "https://img.youtube.com/vi/9KZ9uRHiVg4/mqdefault.jpg",
                },
              ].map((video, index) => (
                <a
                  key={video.title}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                          <Video className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="text-gray-700">{video.channel}</span>
                        <span className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Watch
                        </span>
                      </div>
                    </div>
                  </motion.div>
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
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Can't Find What You Need?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Request a specific resource or suggest a topic for our next
                guide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                    Request Resource
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
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
