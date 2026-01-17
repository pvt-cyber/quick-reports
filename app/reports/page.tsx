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
  ChevronRight,
  Eye,
  CheckCircle,
  Users,
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { reports } from "@/app/lib/data/reports";

export default function ReportsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Get unique categories from reports
  const categories = [
    "All Categories",
    ...Array.from(new Set(reports.map((r) => r.category))),
  ];

  // Filter and sort reports
  const filteredReports = useMemo(() => {
    let filtered = [...reports];

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (report) =>
          report.title.toLowerCase().includes(searchLower) ||
          report.description.toLowerCase().includes(searchLower) ||
          report.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
          report.category.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (filter !== "all") {
      filtered = filtered.filter((report) => report.category === filter);
    }

    // Apply severity filter
    if (severityFilter !== "all") {
      filtered = filtered.filter(
        (report) => report.severity === severityFilter
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.dateReported).getTime() -
            new Date(a.dateReported).getTime()
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.dateReported).getTime() -
            new Date(b.dateReported).getTime()
        );
        break;
      case "votes":
        filtered.sort((a, b) => b.stats.upvotes - a.stats.upvotes);
        break;
      case "severity":
        const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        filtered.sort(
          (a, b) => severityOrder[b.severity] - severityOrder[a.severity]
        );
        break;
      case "comments":
        filtered.sort((a, b) => b.stats.comments - a.stats.comments);
        break;
    }

    return filtered;
  }, [search, filter, severityFilter, sortBy]);

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get severity icon
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low":
        return "🟢";
      case "medium":
        return "🟡";
      case "high":
        return "🟠";
      case "critical":
        return "🔴";
      default:
        return "⚪";
    }
  };

  // Stats
  const stats = {
    totalReports: reports.length,
    verifiedReports: reports.filter((r) => r.verified).length,
    resolvedReports: reports.filter(
      (r) => r.status === "resolved" || r.status === "closed"
    ).length,
    activeReports: reports.filter(
      (r) => r.status === "published" || r.status === "under-review"
    ).length,
  };

  // Get recent reports (last 7 days)
  const recentReports = reports
    .filter((report) => {
      const reportDate = new Date(report.dateReported);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return reportDate > weekAgo;
    })
    .slice(0, 5);

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
                {stats.totalReports}
              </div>
              <div className="text-gray-600">Total Reports</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stats.verifiedReports}
              </div>
              <div className="text-gray-600">Verified Reports</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stats.resolvedReports}
              </div>
              <div className="text-gray-600">Resolved Cases</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {stats.activeReports}
              </div>
              <div className="text-gray-600">Active Reports</div>
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
                    placeholder="Search reports by keyword, category, or tag..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
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
                  value={severityFilter}
                  onChange={(e) => setSeverityFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
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
                  <option value="comments">Most Comments</option>
                </select>

                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Recent Reports Alert */}
          {recentReports.length > 0 && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      Recent Activity: {recentReports.length} new reports in the
                      last 7 days
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {recentReports.map((report) => (
                        <Link
                          key={report.id}
                          href={`/reports/${report.slug}`}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-yellow-200 rounded-full text-sm hover:bg-yellow-50"
                        >
                          {getSeverityIcon(report.severity)}
                          <span>{report.category}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reports Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(
                            report.severity
                          )}`}
                        >
                          {getSeverityIcon(report.severity)}{" "}
                          {report.severity.toUpperCase()}
                        </span>
                        {report.verified && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {report.category}
                        </span>
                      </div>
                      <Link href={`/reports/${report.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          {report.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{report.description}</p>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {report.dateReported}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {report.location}
                    </div>
                    {report.amountInvolved && (
                      <div className="flex items-center text-red-600 font-semibold text-sm">
                        💰 {report.amountInvolved}
                      </div>
                    )}
                    {report.status === "resolved" && (
                      <div className="flex items-center text-green-600 font-semibold text-sm">
                        ✅ Resolved
                      </div>
                    )}
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-gray-600 hover:text-red-600 cursor-pointer">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">
                          {report.stats.upvotes}
                        </span>
                        <span className="text-sm">votes</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-semibold">
                          {report.stats.comments}
                        </span>
                        <span className="text-sm">comments</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">
                          {report.stats.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>

                    <Link href={`/reports/${report.slug}`}>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-semibold flex items-center gap-2">
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>

                  {/* Tags */}
                  {report.tags.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {report.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                        {report.tags.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                            +{report.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredReports.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No reports found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                  setSeverityFilter("all");
                  setSortBy("newest");
                }}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Category Breakdown */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Reports by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from(new Set(reports.map((r) => r.category))).map(
                (category) => {
                  const categoryReports = reports.filter(
                    (r) => r.category === category
                  );
                  const severityCounts = {
                    critical: categoryReports.filter(
                      (r) => r.severity === "critical"
                    ).length,
                    high: categoryReports.filter((r) => r.severity === "high")
                      .length,
                    medium: categoryReports.filter(
                      (r) => r.severity === "medium"
                    ).length,
                    low: categoryReports.filter((r) => r.severity === "low")
                      .length,
                  };

                  return (
                    <div
                      key={category}
                      className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="font-bold text-gray-900 mb-2">
                        {category}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-3">
                        {categoryReports.length}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Critical</span>
                          <span className="font-semibold text-red-600">
                            {severityCounts.critical}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">High</span>
                          <span className="font-semibold text-orange-600">
                            {severityCounts.high}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Verified</span>
                          <span className="font-semibold text-blue-600">
                            {categoryReports.filter((r) => r.verified).length}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Report CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Don't see your scam listed?
                </h3>
                <p className="mb-6 text-lg">
                  Help protect others by reporting your experience. Every report
                  makes our community safer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/report/create">
                    <button className="px-8 py-4 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100 flex items-center justify-center gap-3">
                      🚨 Report a New Scam
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/how-it-works">
                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10">
                      Learn How Reporting Works
                    </button>
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>
                    All reports are reviewed by our team. Verified reports help
                    warn thousands of others.
                  </p>
                  <p className="mt-2">
                    You can choose to report anonymously if preferred.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety Tips */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Safety Tips Based on Recent Reports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Verify Before You Buy",
                  description:
                    "Check online stores on multiple review platforms before making purchases.",
                  icon: "🛒",
                  color: "from-blue-100 to-blue-50",
                },
                {
                  title: "Secure Your Accounts",
                  description:
                    "Use unique passwords and enable two-factor authentication everywhere.",
                  icon: "🔒",
                  color: "from-green-100 to-green-50",
                },
                {
                  title: "Report Suspicious Activity",
                  description:
                    "Report any suspicious calls, emails, or websites immediately.",
                  icon: "🚨",
                  color: "from-red-100 to-red-50",
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${tip.color} p-6 rounded-2xl border border-gray-200`}
                >
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-3">{tip.title}</h4>
                  <p className="text-gray-700">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
