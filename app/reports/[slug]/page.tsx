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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ReportDetailPage({ params }: PageProps) {
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

  // Custom components for better Markdown rendering
  const markdownComponents = {
    h1: ({ node, ...props }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
    ),
    h2: ({ node, ...props }: any) => (
      <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3" {...props} />
    ),
    h3: ({ node, ...props }: any) => (
      <h3 className="text-xl font-bold text-gray-800 mt-5 mb-2" {...props} />
    ),
    p: ({ node, ...props }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4" {...props} />
    ),
    ul: ({ node, ...props }: any) => (
      <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1" {...props} />
    ),
    ol: ({ node, ...props }: any) => (
      <ol className="list-decimal pl-5 mb-4 text-gray-700 space-y-1" {...props} />
    ),
    li: ({ node, ...props }: any) => (
      <li className="mb-1" {...props} />
    ),
    strong: ({ node, ...props }: any) => (
      <strong className="font-bold text-gray-900" {...props} />
    ),
    a: ({ node, ...props }: any) => (
      <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
    ),
    table: ({ node, ...props }: any) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300" {...props} />
      </div>
    ),
    th: ({ node, ...props }: any) => (
      <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left" {...props} />
    ),
    td: ({ node, ...props }: any) => (
      <td className="border border-gray-300 px-4 py-2" {...props} />
    ),
    blockquote: ({ node, ...props }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4" {...props} />
    ),
    code: ({ node, inline, ...props }: any) => {
      if (inline) {
        return <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono" {...props} />;
      }
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
          <code className="font-mono text-sm" {...props} />
        </pre>
      );
    },
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getSeverityColor(
                      report.severity
                    )}`}
                  >
                    {report.severity.toUpperCase()} SEVERITY
                  </span>
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(
                      report.status
                    )}`}
                  >
                    {report.status.replace("-", " ").toUpperCase()}
                  </span>
                  {report.verified && (
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold flex items-center gap-2">
                      <CheckCircle className="w-3 h-3" />
                      Verified Report
                    </span>
                  )}
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs">
                    {report.category}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {report.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 mb-8 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    {report.reporter.anonymous ? (
                      <>
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Anonymous Reporter</span>
                      </>
                    ) : (
                      <>
                        <User className="w-4 h-4 md:w-5 md:h-5" />
                        <span>{report.reporter.username}</span>
                        <span className="text-xs md:text-sm text-gray-500">
                          (Trust: {report.reporter.trustScore}%)
                        </span>
                      </>
                    )}
                  </div>
                  <div className="hidden md:block">•</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{report.dateReported}</span>
                  </div>
                  <div className="hidden md:block">•</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{report.location}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                  <div className="bg-gray-50 p-3 md:p-4 rounded-xl text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-900">
                      {report.stats.upvotes}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">Upvotes</div>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-xl text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-900">
                      {report.stats.comments}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">Comments</div>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-xl text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-900">
                      {report.stats.views.toLocaleString()}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">Views</div>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-xl text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-900">
                      {report.stats.shares}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">Shares</div>
                  </div>
                </div>

                {/* Amount Involved */}
                {report.amountInvolved && (
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 mb-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-red-600 mb-3 md:mb-4">
                        {report.amountInvolved}
                      </div>
                      <div className="text-lg md:text-xl font-semibold text-gray-700">
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
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-200"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Report Summary
                </h2>
                <p className="text-gray-700 md:text-lg leading-relaxed mb-6 md:mb-8">
                  {report.description}
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-r-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-yellow-800 mb-2">
                        ⚠️ Warning Signs Identified:
                      </h3>
                      <ul className="text-yellow-700 space-y-1 md:space-y-2 text-sm md:text-base">
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

              {/* Full Content - Fixed with better Markdown rendering */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-200"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Full Report Details
                </h2>
                <div className="markdown-content prose prose-sm md:prose-base max-w-none text-gray-700">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {report.fullContent}
                  </ReactMarkdown>
                </div>
              </motion.div>

              {/* Evidence */}
              {report.evidence.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-200"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    Evidence Provided
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {report.evidence.map((file, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:border-red-500 transition-colors cursor-pointer group"
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center p-3 md:p-4">
                          <div className="text-2xl md:text-3xl mb-2">
                            {file.includes(".mp3")
                              ? "🎵"
                              : file.includes(".png") || file.includes(".jpg") || file.includes(".zip")
                              ? "🖼️"
                              : "📄"}
                          </div>
                          <div className="text-xs md:text-sm text-gray-600 text-center break-all p-1">
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
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 mb-8 border border-green-200"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    Resolution
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Type:</h4>
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-100 text-green-800 rounded-full font-semibold text-sm md:text-base">
                        {report.resolution.type.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                        Description:
                      </h4>
                      <p className="text-gray-700">
                        {report.resolution.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Outcome:</h4>
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
                className="mb-8"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Tag className="w-4 h-4 md:w-5 md:h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {report.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 md:space-y-8">
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200"
              >
                <div className="space-y-3 md:space-y-4">
                  <button className="w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-green-100 text-green-800 rounded-lg font-semibold hover:bg-green-200 border border-green-200 text-sm md:text-base">
                    <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
                    Helpful ({report.stats.upvotes})
                  </button>

                  <Link href="#comments">
                    <button className="w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 text-sm md:text-base">
                      <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                      Add Comment
                    </button>
                  </Link>

                  <button className="w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 text-sm md:text-base">
                    <Bookmark className="w-4 h-4 md:w-5 md:h-5" />
                    Save Report
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 text-sm md:text-base">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                    Share
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-red-50 text-red-700 rounded-lg font-semibold hover:bg-red-100 text-sm md:text-base">
                    <Flag className="w-4 h-4 md:w-5 md:h-5" />
                    Report Inaccuracy
                  </button>
                </div>
              </motion.div>

              {/* Reporter Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  Reporter Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Status:</span>
                    <span className="font-semibold text-sm md:text-base">
                      {report.reporter.anonymous
                        ? "Anonymous"
                        : "Verified User"}
                    </span>
                  </div>
                  {!report.reporter.anonymous && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm md:text-base">Username:</span>
                        <span className="font-semibold text-sm md:text-base">
                          {report.reporter.username}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm md:text-base">Trust Score:</span>
                        <span className="font-semibold text-sm md:text-base">
                          {report.reporter.trustScore}%
                        </span>
                      </div>
                    </>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Reports Filed:</span>
                    <span className="font-semibold text-sm md:text-base">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Success Rate:</span>
                    <span className="font-semibold text-green-600 text-sm md:text-base">85%</span>
                  </div>
                </div>
              </motion.div>

              {/* Related Reports */}
              {relatedReports.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                    Similar Reports
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {relatedReports.map((related) => (
                      <Link
                        href={`/reports/${related.slug}`}
                        key={related.id}
                        className="group block"
                      >
                        <div className="p-3 md:p-4 border border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityColor(
                                related.severity
                              )}`}
                            >
                              {related.severity.charAt(0).toUpperCase()}
                            </span>
                            <span className="text-xs md:text-sm text-gray-600">
                              {related.category}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors text-sm md:text-base line-clamp-2">
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
                className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 md:p-8 text-white"
              >
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">⚠️ Safety Tips</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex items-start">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Never share personal information with unknown parties
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Verify company credentials before making payments
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Use secure payment methods with buyer protection
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 flex-shrink-0" />
                    Report suspicious activity immediately
                  </li>
                </ul>
              </motion.div>

              {/* Report Similar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 md:p-8 text-white text-center"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Experienced Similar?</h3>
                <p className="mb-4 md:mb-6 text-xs md:text-sm">
                  Help protect others by reporting your experience
                </p>
                <Link href="/report/create">
                  <button className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 text-sm md:text-base">
                    Report Similar Scam
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for markdown content */}
      <style jsx global>{`
        .markdown-content {
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .markdown-content h1 {
          font-size: 1.875rem;
          font-weight: bold;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .markdown-content h2 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .markdown-content h3 {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .markdown-content p {
          color: #374151;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .markdown-content ul, .markdown-content ol {
          padding-left: 1.25rem;
          margin-bottom: 1rem;
        }
        
        .markdown-content li {
          margin-bottom: 0.25rem;
        }
        
        .markdown-content strong {
          font-weight: bold;
          color: #111827;
        }
        
        .markdown-content a {
          color: #2563eb;
          text-decoration: underline;
        }
        
        .markdown-content a:hover {
          color: #1e40af;
        }
        
        .markdown-content blockquote {
          border-left: 4px solid #d1d5db;
          padding-left: 1rem;
          font-style: italic;
          color: #6b7280;
          margin: 1rem 0;
        }
        
        .markdown-content code {
          background-color: #f3f4f6;
          color: #dc2626;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.875em;
        }
        
        .markdown-content pre {
          background-color: #111827;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        
        .markdown-content pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
        }
        
        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        
        .markdown-content th {
          background-color: #f9fafb;
          font-weight: bold;
          text-align: left;
          padding: 0.5rem 1rem;
          border: 1px solid #d1d5db;
        }
        
        .markdown-content td {
          padding: 0.5rem 1rem;
          border: 1px solid #d1d5db;
        }
        
        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}