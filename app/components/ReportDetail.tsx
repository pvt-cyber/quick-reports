// app/components/ReportDetail.tsx
"use client";

import { motion } from "framer-motion";
import {
  Share2,
  Flag,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  AlertTriangle,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";

interface ReportDetailProps {
  report: {
    id: number;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    date: string;
    location: string;
    severity: "low" | "medium" | "high" | "critical";
    verified: boolean;
    votes: number;
    comments: number;
    evidence: string[];
    tags: string[];
  };
}

export default function ReportDetail({ report }: ReportDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [comment, setComment] = useState("");

  const comments = [
    {
      id: 1,
      user: "John D.",
      role: "Verified Victim",
      content: "Same thing happened to me! Lost $300 to this scammer.",
      time: "2 hours ago",
      helpful: 24,
    },
    {
      id: 2,
      user: "Sarah M.",
      role: "Community Moderator",
      content:
        "Thank you for reporting this. We have escalated to authorities.",
      time: "4 hours ago",
      helpful: 56,
    },
    {
      id: 3,
      user: "Alex T.",
      role: "Security Expert",
      content:
        "This appears to be part of a larger phishing operation. Be cautious of similar emails.",
      time: "1 day ago",
      helpful: 89,
    },
  ];

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
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${getSeverityColor(
              report.severity
            )}`}
          >
            {report.severity.toUpperCase()}
          </span>
          {report.verified && (
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4" />✓ Verified Report
            </span>
          )}
          <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">
            {report.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {report.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>Anonymous Reporter</span>
          </div>
          <div>•</div>
          <div>{report.date}</div>
          <div>•</div>
          <div>{report.location}</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Content */}
        <div className="lg:col-span-2">
          {/* Description */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Report Details
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {report.fullDescription}
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-2">
                      Warning Signs Identified:
                    </h3>
                    <ul className="text-yellow-700 space-y-2">
                      <li>
                        • Pressure to act quickly without time for consideration
                      </li>
                      <li>
                        • Requests for payment via gift cards or cryptocurrency
                      </li>
                      <li>• Poor grammar and spelling in communications</li>
                      <li>• Email addresses that don't match company domain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Evidence */}
          {report.evidence.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Evidence
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {report.evidence.map((url, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:border-red-500 transition-colors cursor-pointer"
                  >
                    {/* Evidence thumbnail - would be actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400">
                        Screenshot {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comments */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Comments ({report.comments})
              </h2>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                Sort by: Most Helpful
              </button>
            </div>

            {/* Comment Form */}
            <div className="mb-8">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience or advice..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                rows={3}
              />
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">
                  Your comment will be public
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
                  Post Comment
                </button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="border-t border-gray-100 pt-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">
                          {comment.user}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {comment.role}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {comment.time}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({comment.helpful})
                    </button>
                    <button className="text-gray-600 hover:text-red-600">
                      Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Actions & Info */}
        <div className="space-y-6">
          {/* Action Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <button
                onClick={() => setHasVoted(!hasVoted)}
                className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold ${
                  hasVoted
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <ThumbsUp className="w-5 h-5" />
                {hasVoted ? "Voted" : "Vote Helpful"} ({report.votes})
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                <MessageSquare className="w-5 h-5" />
                Add Comment
              </button>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold ${
                  isBookmarked
                    ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <Bookmark className="w-5 h-5" />
                {isBookmarked ? "Bookmarked" : "Bookmark"}
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
          </div>

          {/* Similar Reports */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Similar Reports</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    Another {report.category} Scam
                  </div>
                  <div className="text-xs text-gray-600">
                    Reported 3 days ago • 45 votes
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-xl mb-4">⚠️ Safety Tips</h3>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
