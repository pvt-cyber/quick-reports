// app/reports/[slug]/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  MapPin,
  Tag,
  ArrowLeft,
  Share2,
  Bookmark,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  AlertTriangle,
  Shield,
  Eye,
  CheckCircle,
  Flag,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReportBySlug, getRelatedReports } from "@/app/lib/data/reports";
import Markdown from "react-markdown";
import React from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ReportDetailPage({ params }: PageProps) {
  // Use React.use() to unwrap the params promise
  const { slug } = React.use(params);
  const report = getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  const relatedReports = getRelatedReports(report.id);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "under-review":
        return "bg-blue-100 text-blue-800";
      case "published":
        return "bg-green-100 text-green-800";
      case "resolved":
        return "bg-purple-100 text-purple-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Reports
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getSeverityColor(
                      report.severity
                    )}`}
                  >
                    {report.severity.toUpperCase()} SEVERITY
                  </span>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      report.status
                    )}`}
                  >
                    {report.status.replace("-", " ").toUpperCase()}
                  </span>
                  {report.verified && (
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Verified Report
                    </span>
                  )}
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {report.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {report.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    {report.reporter.anonymous ? (
                      <>
                        <Eye className="w-5 h-5" />
                        <span>Anonymous Reporter</span>
                      </>
                    ) : (
                      <>
                        <User className="w-5 h-5" />
                        <span>{report.reporter.username}</span>
                        <span className="text-sm text-gray-500">
                          (Trust Score: {report.reporter.trustScore}%)
                        </span>
                      </>
                    )}
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{report.dateReported}</span>
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{report.location}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {report.stats.upvotes}
                    </div>
                    <div className="text-gray-600 text-sm">Upvotes</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {report.stats.comments}
                    </div>
                    <div className="text-gray-600 text-sm">Comments</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {report.stats.views.toLocaleString()}
                    </div>
                    <div className="text-gray-600 text-sm">Views</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {report.stats.shares}
                    </div>
                    <div className="text-gray-600 text-sm">Shares</div>
                  </div>
                </div>

                {/* Amount Involved */}
                {report.amountInvolved && (
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-8">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                        {report.amountInvolved}
                      </div>
                      <div className="text-xl font-semibold text-gray-700">
                        Amount Involved / Potential Loss
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Report Summary
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {report.description}
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-yellow-800 mb-2">
                        ⚠️ Warning Signs Identified:
                      </h3>
                      <ul className="text-yellow-700 space-y-2">
                        <li>
                          • Pressure to act quickly without time for
                          consideration
                        </li>
                        <li>
                          • Requests for payment via unusual methods (gift
                          cards, cryptocurrency)
                        </li>
                        <li>• Poor grammar and spelling in communications</li>
                        <li>
                          • Email addresses that don't match company domain
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Full Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <Markdown>{report.fullContent}</Markdown>
              </motion.div>

              {/* Evidence */}
              {report.evidence.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Evidence Provided
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {report.evidence.map((file, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:border-red-500 transition-colors cursor-pointer group"
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center p-4">
                          <div className="text-3xl mb-2">
                            {file.includes(".mp3")
                              ? "🎵"
                              : file.includes(".png") || file.includes(".jpg")
                              ? "🖼️"
                              : "📄"}
                          </div>
                          <div className="text-sm text-gray-600 text-center truncate w-full">
                            {file}
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            Click to view
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Resolution */}
              {report.resolution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-green-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    Resolution
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Type:</h4>
                      <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                        {report.resolution.type.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Description:
                      </h4>
                      <p className="text-gray-700">
                        {report.resolution.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Outcome:</h4>
                      <p className="text-gray-700">
                        {report.resolution.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Tag className="w-5 h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {report.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-green-100 text-green-800 rounded-lg font-semibold hover:bg-green-200 border border-green-200">
                    <ThumbsUp className="w-5 h-5" />
                    Helpful ({report.stats.upvotes})
                  </button>

                  <Link href="#comments">
                    <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                      <MessageSquare className="w-5 h-5" />
                      Add Comment
                    </button>
                  </Link>

                  <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200">
                    <Bookmark className="w-5 h-5" />
                    Save Report
                  </button>

                  <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>

                  <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-red-50 text-red-700 rounded-lg font-semibold hover:bg-red-100">
                    <Flag className="w-5 h-5" />
                    Report Inaccuracy
                  </button>
                </div>
              </motion.div>

              {/* Reporter Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Reporter Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-semibold">
                      {report.reporter.anonymous
                        ? "Anonymous"
                        : "Verified User"}
                    </span>
                  </div>
                  {!report.reporter.anonymous && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Username:</span>
                        <span className="font-semibold">
                          {report.reporter.username}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Trust Score:</span>
                        <span className="font-semibold">
                          {report.reporter.trustScore}%
                        </span>
                      </div>
                    </>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Reports Filed:</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                </div>
              </motion.div>

              {/* Related Reports */}
              {relatedReports.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Similar Reports
                  </h3>
                  <div className="space-y-4">
                    {relatedReports.map((related) => (
                      <Link
                        href={`/reports/${related.slug}`}
                        key={related.id}
                        className="group block"
                      >
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityColor(
                                related.severity
                              )}`}
                            >
                              {related.severity.charAt(0).toUpperCase()}
                            </span>
                            <span className="text-sm text-gray-600">
                              {related.category}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors text-sm">
                            {related.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Safety Tips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-6">⚠️ Safety Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Never share personal information with unknown parties
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Verify company credentials before making payments
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Use secure payment methods with buyer protection
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Report suspicious activity immediately
                  </li>
                </ul>
              </motion.div>

              {/* Report Similar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white text-center"
              >
                <h3 className="text-xl font-bold mb-4">Experienced Similar?</h3>
                <p className="mb-6 text-sm">
                  Help protect others by reporting your experience
                </p>
                <Link href="/report/create">
                  <button className="w-full px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100">
                    Report Similar Scam
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
