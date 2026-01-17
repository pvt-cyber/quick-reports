// app/reports/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  AlertTriangle,
  Shield,
  TrendingUp,
  Clock,
  MapPin,
} from "lucide-react";
import { useState } from "react";

interface Report {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  location: string;
  severity: "low" | "medium" | "high" | "critical";
  verified: boolean;
  votes: number;
  comments: number;
}

export default function ReportsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const reports: Report[] = [
    {
      id: 1,
      title: "Fake Online Store: TechGadgetsPro.com",
      category: "Online Shopping",
      description:
        "Paid $450 for iPhone 15, never received item. Website disappeared after payment.",
      date: "2024-01-15",
      location: "New York, NY",
      severity: "high",
      verified: true,
      votes: 124,
      comments: 23,
    },
    {
      id: 2,
      title: "Investment Scam: CryptoMasters Telegram Group",
      category: "Investment Scam",
      description:
        "Promised 300% returns in 30 days. Lost $2,000 investment, group admin disappeared.",
      date: "2024-01-14",
      location: "Online",
      severity: "critical",
      verified: true,
      votes: 89,
      comments: 42,
    },
    {
      id: 3,
      title: "Phishing Email Impersonating PayPal",
      category: "Phishing",
      description:
        "Received email claiming PayPal account suspended. Link led to fake login page.",
      date: "2024-01-13",
      location: "California",
      severity: "medium",
      verified: false,
      votes: 56,
      comments: 18,
    },
    {
      id: 4,
      title: "Fake Job Offer: Remote Data Entry",
      category: "Fake Job Offer",
      description:
        "Asked to pay $99 for 'training materials' upfront. No job materialized after payment.",
      date: "2024-01-12",
      location: "Texas",
      severity: "medium",
      verified: true,
      votes: 72,
      comments: 15,
    },
    {
      id: 5,
      title: "Tech Support Scam Call",
      category: "Tech Support",
      description:
        "Caller claimed my computer was infected, asked for remote access and $199 fee.",
      date: "2024-01-11",
      location: "Florida",
      severity: "high",
      verified: true,
      votes: 112,
      comments: 34,
    },
    {
      id: 6,
      title: "Romance Scam on Dating App",
      category: "Romance Scam",
      description:
        "Person asked for money for 'emergency surgery' after building online relationship.",
      date: "2024-01-10",
      location: "Online",
      severity: "critical",
      verified: false,
      votes: 145,
      comments: 67,
    },
  ];

  const categories = [
    "All Categories",
    "Online Shopping",
    "Investment Scam",
    "Phishing",
    "Fake Job Offer",
    "Tech Support",
    "Romance Scam",
    "Impersonation",
  ];

  const getSeverityColor = (severity: Report["severity"]) => {
    switch (severity) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "critical":
        return "bg-red-100 text-red-800";
    }
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(search.toLowerCase()) ||
      report.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || report.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Shield className="w-20 h-20 text-blue-600" />
                <AlertTriangle className="w-10 h-10 text-yellow-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse Reported Scams
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed and protect yourself by learning from others'
              experiences
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {reports.length}
              </div>
              <div className="text-gray-600">Active Reports</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-600">Verified Reports</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Avg. Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-red-600 mb-2">89</div>
              <div className="text-gray-600">Successful Mediations</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search reports by keyword..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option
                      key={cat}
                      value={cat === "All Categories" ? "all" : cat}
                    >
                      {cat}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="votes">Most Votes</option>
                  <option value="severity">Highest Severity</option>
                </select>

                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(
                            report.severity
                          )}`}
                        >
                          {report.severity.toUpperCase()}
                        </span>
                        {report.verified && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {report.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{report.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {report.date}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {report.location}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-red-600">
                        <TrendingUp className="w-5 h-5" />
                        {report.votes} votes
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                        💬 {report.comments} comments
                      </button>
                    </div>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredReports.length === 0 && (
            <div className="text-center py-12">
              <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No reports found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Report CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Don't see your scam listed?
              </h3>
              <p className="mb-6 text-lg">
                Help protect others by reporting your experience
              </p>
              <button className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100">
                Report a New Scam
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
