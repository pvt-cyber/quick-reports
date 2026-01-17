// app/blog/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  Tag,
  ChevronRight,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  Share2,
  Bookmark,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "All Articles",
    "Prevention Tips",
    "Scam Alerts",
    "Recovery Stories",
    "Legal Updates",
    "Community News",
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Rise of AI-Powered Scams: What You Need to Know",
      excerpt:
        "How artificial intelligence is being used in sophisticated scams and how to protect yourself.",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      category: "Scam Alerts",
      featured: true,
      imageColor: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "How to Spot Fake Charity Websites After Natural Disasters",
      excerpt:
        "Essential tips for verifying charity organizations and avoiding donation scams.",
      author: "Michael Chen",
      date: "Jan 12, 2024",
      readTime: "6 min read",
      category: "Prevention Tips",
      featured: true,
      imageColor: "from-blue-500 to-cyan-500",
    },
  ];

  const posts = [
    {
      id: 3,
      title: "10 Red Flags of Online Shopping Scams",
      excerpt: "Common signs that an online store might be fraudulent.",
      author: "Emma Davis",
      date: "Jan 10, 2024",
      readTime: "5 min read",
      category: "Prevention Tips",
      imageColor: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Recovering from Identity Theft: A Step-by-Step Guide",
      excerpt: "What to do immediately after discovering identity theft.",
      author: "Robert Wilson",
      date: "Jan 8, 2024",
      readTime: "12 min read",
      category: "Recovery Stories",
      imageColor: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "New Regulations for Online Marketplaces",
      excerpt: "Recent legal changes that affect buyer protection.",
      author: "Legal Team",
      date: "Jan 5, 2024",
      readTime: "7 min read",
      category: "Legal Updates",
      imageColor: "from-yellow-500 to-amber-500",
    },
    {
      id: 6,
      title: "Community Success: How We Stopped a Phone Scam Ring",
      excerpt: "How our community worked together to expose scammers.",
      author: "Community Team",
      date: "Jan 3, 2024",
      readTime: "9 min read",
      category: "Community News",
      imageColor: "from-indigo-500 to-blue-500",
    },
    {
      id: 7,
      title: "Cryptocurrency Scams: The Latest Tactics",
      excerpt: "Understanding new crypto scam methods and prevention.",
      author: "Alex Turner",
      date: "Dec 28, 2023",
      readTime: "10 min read",
      category: "Scam Alerts",
      imageColor: "from-teal-500 to-green-500",
    },
    {
      id: 8,
      title: "Protecting Small Businesses from Invoice Fraud",
      excerpt: "Essential security measures for business owners.",
      author: "Business Team",
      date: "Dec 25, 2023",
      readTime: "8 min read",
      category: "Prevention Tips",
      imageColor: "from-pink-500 to-rose-500",
    },
  ];

  const popularTags = [
    "Phishing",
    "Investment Scams",
    "Online Shopping",
    "Elderly Protection",
    "Identity Theft",
    "Mediation",
    "Legal Rights",
    "Community Action",
  ];

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

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
                <BookOpen className="w-20 h-20 text-blue-600" />
                <TrendingUp className="w-10 h-10 text-green-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Scam <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educational articles, scam alerts, and community stories to help
              you stay protected
            </p>
          </div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300 group"
                >
                  <div className={`h-48 bg-gradient-to-r ${post.imageColor}`} />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search blog articles..."
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
                        value={cat === "All Articles" ? "all" : cat}
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

            <div className="lg:w-1/4">
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center gap-2">
                Subscribe
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`h-40 bg-gradient-to-r ${post.imageColor}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Popular Tags */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Tag className="w-6 h-6 text-blue-600" />
              Popular Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl mb-8">
                Get weekly scam alerts, prevention tips, and community stories
                delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900"
                />
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-gray-300 text-sm">
                No spam. Unsubscribe anytime.
              </p>
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
              <h2 className="text-3xl font-bold mb-6">Want to Contribute?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Share your scam prevention knowledge or recovery story with our
                community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100">
                  Write for Our Blog
                </button>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10">
                    Contact Editorial Team
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
