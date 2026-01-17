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
import Markdown from "react-markdown";
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Success Stories
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
                    className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${story.colorScheme.primary} text-white`}
                  >
                    {story.category}
                  </span>
                  {story.featured && (
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                      Featured Story
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {story.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{story.author.name}</span>
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{story.date}</span>
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{story.location}</span>
                  </div>
                </div>

                {/* Amount Saved */}
                <div
                  className={`bg-gradient-to-r ${story.colorScheme.secondary} rounded-2xl p-8 mb-8`}
                >
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                      {story.amountSaved}
                    </div>
                    <div className="text-2xl font-semibold text-gray-700">
                      Amount Saved & Protected
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <Markdown>{story.content}</Markdown>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Impact & Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {story.stats.peopleProtected.toLocaleString()}
                    </div>
                    <div className="text-gray-600">People Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {story.stats.reportsGenerated}
                    </div>
                    <div className="text-gray-600">Reports Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {story.stats.recoveryRate}
                    </div>
                    <div className="text-gray-600">Recovery Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Tag className="w-5 h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
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
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/report/create">
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-bold hover:from-red-700 hover:to-orange-600 flex items-center gap-3">
                    🚨 Report Similar Scam
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 flex items-center gap-3">
                  <Share2 className="w-5 h-5" />
                  Share This Story
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 flex items-center gap-3">
                  <Bookmark className="w-5 h-5" />
                  Save for Later
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  About the Author
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${story.author.avatarColor}`}
                  />
                  <div>
                    <div className="font-bold text-gray-900">
                      {story.author.name}
                    </div>
                    <div className="text-gray-600">{story.author.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">
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
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Related Stories
                  </h3>
                  <div className="space-y-6">
                    {relatedStories.map((related) => (
                      <Link
                        href={`/success-stories/${related.slug}`}
                        key={related.id}
                        className="group block"
                      >
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300">
                          <div className="text-sm font-semibold text-green-600 mb-2">
                            {related.category}
                          </div>
                          <h4 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                            {related.title}
                          </h4>
                          <div className="text-sm text-gray-500 mt-2">
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
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-6">Prevention Tips</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Always verify new contacts through multiple channels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Share suspicious activity with your network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Report all incidents to help protect others</span>
                  </li>
                </ul>
              </motion.div>

              {/* Report Similar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white text-center"
              >
                <h3 className="text-xl font-bold mb-4">Experienced Similar?</h3>
                <p className="mb-6">Help others by reporting your experience</p>
                <Link href="/report/create">
                  <button className="w-full px-6 py-3 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100">
                    Report Now
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
