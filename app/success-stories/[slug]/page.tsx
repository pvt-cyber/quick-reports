// app/success-stories/[slug]/page.tsx
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
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSuccessStoryBySlug,
  getRelatedStories,
} from "@/app/lib/data/successStories";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function SuccessStoryDetailPage({ params }: PageProps) {
  const { slug } = React.use(params);
  const story = getSuccessStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = getRelatedStories(story.id);

  // Custom components for better Markdown rendering
  const markdownComponents = {
    h1: ({ node, ...props }: any) => (
      <h1
        className="text-2xl md:text-3xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4"
        {...props}
      />
    ),
    h2: ({ node, ...props }: any) => (
      <h2
        className="text-xl md:text-2xl font-bold text-gray-800 mt-5 md:mt-6 mb-2 md:mb-3"
        {...props}
      />
    ),
    h3: ({ node, ...props }: any) => (
      <h3
        className="text-lg md:text-xl font-bold text-gray-800 mt-4 md:mt-5 mb-2"
        {...props}
      />
    ),
    h4: ({ node, ...props }: any) => (
      <h4
        className="text-base md:text-lg font-bold text-gray-800 mt-3 md:mt-4 mb-1"
        {...props}
      />
    ),
    p: ({ node, ...props }: any) => (
      <p className="text-gray-700 leading-relaxed mb-3 md:mb-4" {...props} />
    ),
    ul: ({ node, ...props }: any) => (
      <ul
        className="list-disc pl-4 md:pl-5 mb-3 md:mb-4 text-gray-700 space-y-1 md:space-y-2"
        {...props}
      />
    ),
    ol: ({ node, ...props }: any) => (
      <ol
        className="list-decimal pl-4 md:pl-5 mb-3 md:mb-4 text-gray-700 space-y-1 md:space-y-2"
        {...props}
      />
    ),
    li: ({ node, ...props }: any) => <li className="mb-1" {...props} />,
    strong: ({ node, ...props }: any) => (
      <strong className="font-bold text-gray-900" {...props} />
    ),
    em: ({ node, ...props }: any) => <em className="italic" {...props} />,
    a: ({ node, ...props }: any) => (
      <a
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    blockquote: ({ node, ...props }: any) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-3 md:pl-4 italic text-gray-600 my-3 md:my-4 text-sm md:text-base"
        {...props}
      />
    ),
    code: ({ node, inline, ...props }: any) => {
      if (inline) {
        return (
          <code
            className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono"
            {...props}
          />
        );
      }
      return (
        <pre className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto my-3 md:my-4">
          <code className="font-mono text-xs md:text-sm" {...props} />
        </pre>
      );
    },
    table: ({ node, ...props }: any) => (
      <div className="overflow-x-auto my-4 md:my-6">
        <table
          className="min-w-full border-collapse border border-gray-300"
          {...props}
        />
      </div>
    ),
    th: ({ node, ...props }: any) => (
      <th
        className="border border-gray-300 px-3 py-2 md:px-4 md:py-2 bg-gray-100 font-bold text-left text-sm md:text-base"
        {...props}
      />
    ),
    td: ({ node, ...props }: any) => (
      <td
        className="border border-gray-300 px-3 py-2 md:px-4 md:py-2 text-sm md:text-base"
        {...props}
      />
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6 md:mb-8">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Success Stories
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 md:mb-8"
              >
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <span
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r ${story.colorScheme.primary} text-white`}
                  >
                    {story.category}
                  </span>
                  {story.featured && (
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-yellow-100 text-yellow-800 rounded-full text-xs md:text-sm font-semibold">
                      Featured Story
                    </span>
                  )}
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  {story.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{story.author.name}</span>
                  </div>
                  <div className="hidden md:block">•</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{story.date}</span>
                  </div>
                  <div className="hidden md:block">•</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{story.location}</span>
                  </div>
                </div>

                {/* Amount Saved */}
                <div
                  className={`bg-gradient-to-r ${story.colorScheme.secondary} rounded-2xl p-6 md:p-8 mb-6 md:mb-8`}
                >
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                      {story.amountSaved}
                    </div>
                    <div className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
                      Amount Saved & Protected
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content - Fixed Markdown Rendering */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 md:mb-8 border border-gray-200"
              >
                <div className="markdown-content prose prose-sm md:prose-base max-w-none text-gray-700">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {story.content}
                  </ReactMarkdown>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 mb-6 md:mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Impact & Statistics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {story.stats.peopleProtected.toLocaleString()}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      People Protected
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {story.stats.reportsGenerated}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Reports Generated
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {story.stats.recoveryRate}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Recovery Rate
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 md:mb-8"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <Tag className="w-4 h-4 md:w-5 md:h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-xs md:text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
              >
                <Link href="/report/create">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-bold hover:from-red-700 hover:to-orange-600 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                    🚨 Report Similar Scam
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </Link>
                <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                  Share This Story
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                  <Bookmark className="w-4 h-4 md:w-5 md:h-5" />
                  Save for Later
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 md:space-y-8">
              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  About the Author
                </h3>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${story.author.avatarColor}`}
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-base md:text-lg">
                      {story.author.name}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {story.author.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  Shared this story to help others avoid similar scams and
                  protect their communities.
                </p>
              </motion.div>

              {/* Related Stories */}
              {relatedStories.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                    Related Stories
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    {relatedStories.map((related) => (
                      <Link
                        href={`/success-stories/${related.slug}`}
                        key={related.id}
                        className="group block"
                      >
                        <div className="p-3 md:p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300">
                          <div className="text-xs md:text-sm font-semibold text-green-600 mb-2">
                            {related.category}
                          </div>
                          <h4 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm md:text-base line-clamp-2">
                            {related.title}
                          </h4>
                          <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
                            {related.amountSaved} saved
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Prevention Tips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 md:p-8 text-white"
              >
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                  Prevention Tips
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-2 md:gap-3">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm">
                      Always verify new contacts through multiple channels
                    </span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <Users className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm">
                      Share suspicious activity with your network
                    </span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm">
                      Report all incidents to help protect others
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Report Similar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 md:p-8 text-white text-center"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Experienced Similar?
                </h3>
                <p className="mb-4 md:mb-6 text-xs md:text-sm">
                  Help others by reporting your experience
                </p>
                <Link href="/report/create">
                  <button className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100 text-sm md:text-base">
                    Report Now
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
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .markdown-content h2 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .markdown-content h3 {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        .markdown-content h4 {
          font-size: 1.125rem;
          font-weight: bold;
          color: #1f2937;
          margin-top: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .markdown-content p {
          color: #374151;
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .markdown-content ul,
        .markdown-content ol {
          padding-left: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .markdown-content li {
          margin-bottom: 0.25rem;
        }

        .markdown-content strong {
          font-weight: bold;
          color: #111827;
        }

        .markdown-content em {
          font-style: italic;
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
          margin: 0.75rem 0;
        }

        .markdown-content code {
          background-color: #f3f4f6;
          color: #dc2626;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: "Monaco", "Menlo", monospace;
          font-size: 0.875em;
        }

        .markdown-content pre {
          background-color: #111827;
          color: #f9fafb;
          padding: 0.75rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 0.75rem 0;
        }

        .markdown-content pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
        }

        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 0.75rem 0;
        }

        .markdown-content th {
          background-color: #f9fafb;
          font-weight: bold;
          text-align: left;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
        }

        .markdown-content td {
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive typography */
        @media (min-width: 768px) {
          .markdown-content h1 {
            font-size: 2.25rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .markdown-content h2 {
            font-size: 1.875rem;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .markdown-content h3 {
            font-size: 1.5rem;
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .markdown-content p {
            margin-bottom: 1rem;
          }

          .markdown-content ul,
          .markdown-content ol {
            margin-bottom: 1rem;
          }

          .markdown-content blockquote {
            margin: 1rem 0;
          }

          .markdown-content pre {
            margin: 1rem 0;
          }

          .markdown-content table {
            margin: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
}
