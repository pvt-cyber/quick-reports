// app/success-stories/page.tsx
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
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  successStories,
  getFeaturedStories,
} from "@/app/lib/data/successStories";
import { SuccessStory } from "@/app/lib/data/types";

const ITEMS_PER_PAGE = 6;

export default function SuccessStoriesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => [
      "All Categories",
      ...Array.from(new Set(successStories.map((s) => s.category))),
    ],
    []
  );

  // Memoized filtered stories to prevent unnecessary recalculations
  const filteredStories = useMemo(() => {
    return successStories.filter((story) => {
      const matchesSearch =
        story.title.toLowerCase().includes(search.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        story.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesFilter = filter === "all" || story.category === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const featuredStories = useMemo(() => getFeaturedStories(2), []);

  // Visible stories based on lazy loading
  const visibleStories = useMemo(() => {
    return filteredStories.slice(0, visibleCount);
  }, [filteredStories, visibleCount]);

  const stats = useMemo(
    () => [
      { value: successStories.length.toString(), label: "Success Stories" },
      { value: "$2M+", label: "Total Amount Protected" },
      { value: "10K+", label: "Lives Impacted" },
      { value: "95%", label: "Satisfaction Rate" },
    ],
    []
  );

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!observerTarget.current || visibleCount >= filteredStories.length)
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setIsLoading(true);
          // Simulate network delay for better UX
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + ITEMS_PER_PAGE, filteredStories.length)
            );
            setIsLoading(false);
          }, 800);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(observerTarget.current);

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [visibleCount, filteredStories.length, isLoading]);

  // Reset visible count when search/filter changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search, filter]);

  // Story card component for better reusability and performance
  const StoryCard = useCallback(
    ({
      story,
      index,
      isFeatured = false,
    }: {
      story: SuccessStory;
      index: number;
      isFeatured?: boolean;
    }) => {
      if (isFeatured) {
        return (
          <Link href={`/success-stories/${story.slug}`}>
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
                <p className="text-gray-300 mb-8 text-lg">{story.excerpt}</p>

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
        );
      }

      return (
        <Link href={`/success-stories/${story.slug}`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
          >
            <div
              className={`h-2 bg-gradient-to-r ${story.colorScheme.primary}`}
            />
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${story.colorScheme.primary} flex items-center justify-center flex-shrink-0`}
                >
                  {story.category.includes("Business") ? (
                    <Target className="w-7 h-7 text-white" />
                  ) : story.category.includes("Senior") ? (
                    <Users className="w-7 h-7 text-white" />
                  ) : (
                    <Shield className="w-7 h-7 text-white" />
                  )}
                </div>
                <div className="min-w-0">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold inline-block mb-2">
                    {story.category}
                  </span>
                  <div className="text-2xl font-bold text-gray-900 truncate">
                    {story.amountSaved}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors line-clamp-2">
                {story.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                {story.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {story.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
                {story.tags.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    +{story.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500">{story.date}</div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      );
    },
    []
  );

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8 border border-gray-200">
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

              <div className="flex gap-2 md:gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent flex-1 md:flex-none"
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

                <button
                  onClick={() => setFilter("all")}
                  className="px-4 md:px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2 whitespace-nowrap"
                >
                  <Filter className="w-5 h-5" />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-600">
            Showing {Math.min(visibleCount, filteredStories.length)} of{" "}
            {filteredStories.length} stories
          </div>

          {/* Featured Stories */}
          {featuredStories.length > 0 && visibleCount <= ITEMS_PER_PAGE && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredStories.map((story, index) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  index={index}
                  isFeatured
                />
              ))}
            </div>
          )}

          {/* All Stories Grid */}
          {visibleStories.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {visibleStories.map((story, index) => (
                  <StoryCard key={story.id} story={story} index={index} />
                ))}
              </div>

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-center my-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                </div>
              )}

              {/* Observer target for infinite scroll */}
              {visibleCount < filteredStories.length && !isLoading && (
                <div ref={observerTarget} className="h-20" />
              )}
            </>
          )}

          {/* Empty State */}
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No stories found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Load More Button (Fallback for mobile/accessibility) */}
          {visibleCount < filteredStories.length && !isLoading && (
            <div className="text-center my-8 md:hidden">
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + ITEMS_PER_PAGE, filteredStories.length)
                  )
                }
                className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700"
              >
                Load More Stories
              </button>
            </div>
          )}

          {/* CTA Section */}
          {filteredStories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  Join thousands of people who have taken action against scams
                  and protected their communities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/report/create">
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-green-700 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-colors">
                      🚨 Report a Scam Now
                    </button>
                  </Link>
                  <Link href="/reports">
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-colors">
                      Browse Recent Reports
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
