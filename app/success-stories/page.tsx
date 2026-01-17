// app/success-stories/page.tsx (updated)
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Users,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  successStories,
  getFeaturedStories,
  getStoriesByCategory,
} from "@/app/lib/data/successStories";

export default function SuccessStoriesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const categories = [
    "All Categories",
    ...Array.from(new Set(successStories.map((s) => s.category))),
  ];

  const filteredStories = successStories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(search.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );

    const matchesFilter = filter === "all" || story.category === filter;

    return matchesSearch && matchesFilter;
  });

  const featuredStories = getFeaturedStories(2);
  const stats = [
    { value: successStories.length.toString(), label: "Success Stories" },
    { value: "$2M+", label: "Total Amount Protected" },
    { value: "10K+", label: "Lives Impacted" },
    { value: "95%", label: "Satisfaction Rate" },
  ];

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
                <Award className="w-20 h-20 text-yellow-500" />
                <CheckCircle className="w-10 h-10 text-green-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="text-green-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of people and businesses who prevented scams and
              recovered losses through our platform
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search success stories..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Featured Stories */}
          {featuredStories.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredStories.map((story, index) => (
                <Link href={`/success-stories/${story.slug}`} key={story.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl group"
                  >
                    <div className="p-8 text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-6 h-6 text-yellow-400" />
                        <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          Featured Story
                        </span>
                      </div>

                      <h2 className="text-3xl font-bold mb-6 group-hover:text-green-300 transition-colors">
                        {story.title}
                      </h2>
                      <p className="text-gray-300 mb-8 text-lg">
                        {story.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-green-400 mb-2">
                            {story.amountSaved} Saved
                          </div>
                          <div className="text-gray-400">{story.date}</div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          {/* All Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredStories.map((story, index) => (
              <Link href={`/success-stories/${story.slug}`} key={story.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${story.colorScheme.primary}`}
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${story.colorScheme.primary} flex items-center justify-center`}
                      >
                        {story.category.includes("Business") ? (
                          <Target className="w-7 h-7 text-white" />
                        ) : story.category.includes("Senior") ? (
                          <Users className="w-7 h-7 text-white" />
                        ) : (
                          <Shield className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                          {story.category}
                        </span>
                        <div className="text-2xl font-bold text-gray-900 mt-2">
                          {story.amountSaved}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{story.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {story.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">{story.date}</div>
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No stories found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of people who have taken action against scams and
                protected their communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/report/create">
                  <button className="px-8 py-4 bg-white text-green-700 rounded-full font-bold text-lg hover:bg-gray-100">
                    🚨 Report a Scam Now
                  </button>
                </Link>
                <Link href="/reports">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10">
                    Browse Recent Reports
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
