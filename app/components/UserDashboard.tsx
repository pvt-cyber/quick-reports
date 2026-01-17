// app/components/UserDashboard.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Shield,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye,
} from "lucide-react";

interface DashboardStats {
  reportsSubmitted: number;
  reportsResolved: number;
  communityImpact: number;
  responseRate: number;
}

interface UserReport {
  id: number;
  title: string;
  status: "pending" | "under-review" | "published" | "resolved";
  date: string;
  votes: number;
  comments: number;
  severity: "low" | "medium" | "high" | "critical";
}

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [stats] = useState<DashboardStats>({
    reportsSubmitted: 12,
    reportsResolved: 8,
    communityImpact: 1245,
    responseRate: 92,
  });

  const [userReports] = useState<UserReport[]>([
    {
      id: 1,
      title: "Fake Tech Support Scam",
      status: "resolved",
      date: "2024-01-10",
      votes: 89,
      comments: 23,
      severity: "high",
    },
    {
      id: 2,
      title: "Phishing Email - PayPal",
      status: "published",
      date: "2024-01-12",
      votes: 45,
      comments: 12,
      severity: "medium",
    },
    {
      id: 3,
      title: "Online Shopping Fraud",
      status: "under-review",
      date: "2024-01-14",
      votes: 0,
      comments: 0,
      severity: "high",
    },
    {
      id: 4,
      title: "Investment Scam Alert",
      status: "published",
      date: "2024-01-15",
      votes: 156,
      comments: 45,
      severity: "critical",
    },
  ]);

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    "under-review": "bg-blue-100 text-blue-800",
    published: "bg-green-100 text-green-800",
    resolved: "bg-purple-100 text-purple-800",
  };

  const severityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-orange-100 text-orange-800",
    critical: "bg-red-100 text-red-800",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
            <p className="text-gray-600">
              Monitor your reports and community impact
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5" />
            New Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-10 h-10 text-blue-600" />
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.reportsSubmitted}
            </div>
            <div className="text-gray-600">Reports Submitted</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.reportsResolved}
            </div>
            <div className="text-gray-600">Reports Resolved</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <User className="w-10 h-10 text-purple-600" />
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.communityImpact.toLocaleString()}+
            </div>
            <div className="text-gray-600">People Protected</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="w-10 h-10 text-orange-600" />
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.responseRate}%
            </div>
            <div className="text-gray-600">Response Rate</div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Reports */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">
                  Your Reports
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {userReports.map((report) => (
                  <div key={report.id} className="p-6 hover:bg-gray-50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              statusColors[report.status]
                            }`}
                          >
                            {report.status.replace("-", " ").toUpperCase()}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              severityColors[report.severity]
                            }`}
                          >
                            {report.severity.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {report.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>👤 {report.votes} votes</span>
                          <span>•</span>
                          <span>💬 {report.comments} comments</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                          View
                        </button>
                        <button className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Profile */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Anonymous Reporter
                  </h3>
                  <p className="text-sm text-gray-600">Member since Jan 2024</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <span>Privacy Settings</span>
                  </span>
                  <span>→</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span>Notifications</span>
                  </span>
                  <span>→</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span>Account Settings</span>
                  </span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Reports Resolved</span>
                    <span>
                      {stats.reportsResolved}/{stats.reportsSubmitted}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (stats.reportsResolved / stats.reportsSubmitted) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Community Reach</span>
                    <span>{stats.communityImpact.toLocaleString()}+</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Score */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Safety Score</h3>
                <span className="text-2xl font-bold text-green-600">92%</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All reports verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No violations detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-yellow-600" />
                  <span>Active community member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
