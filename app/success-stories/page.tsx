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
} from "lucide-react";
import Link from "next/link";

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      title: "Startup Saves $50,000 from Vendor Fraud",
      category: "Business Protection",
      amount: "$50,000",
      description:
        "A tech startup identified a fraudulent supplier through our platform before making a major payment.",
      details:
        "The company was about to pay a $50,000 deposit to a new supplier. A quick search on Scam-Report revealed multiple reports about the same company using different names. The startup canceled the order and reported their experience.",
      impact: "Prevented financial loss, saved 6 months of runway",
      tags: ["Vendor Fraud", "B2B", "Large Amount"],
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Elderly Couple Avoids Inheritance Scam",
      category: "Senior Protection",
      amount: "$25,000",
      description:
        "Retired couple almost fell for an inheritance scam but were warned by our community.",
      details:
        "They received a call claiming they inherited money but needed to pay taxes upfront. A family member searched the phone number on our platform and found it was a known scam pattern.",
      impact: "Protected life savings, prevented emotional distress",
      tags: ["Elderly", "Inheritance", "Phone Scam"],
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Freelancer Recovers $8,500 Project Fee",
      category: "Freelance Protection",
      amount: "$8,500",
      description:
        "Graphic designer used our mediation process to recover payment from a client.",
      details:
        "After completing a large project, the client disappeared without payment. Through our platform, the designer filed a report, and our mediation team helped establish contact and secure payment.",
      impact: "Recovered full payment, established payment terms",
      tags: ["Freelance", "Payment Recovery", "Mediation"],
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Community Stops Fake Charity Operation",
      category: "Community Action",
      amount: "Multiple Victims",
      description:
        "Local community identified and shut down a fake charity collecting donations.",
      details:
        "Residents reported suspicious door-to-door charity collectors. Our platform connected the dots across multiple reports, leading to police intervention.",
      impact: "Protected community, exposed criminal operation",
      tags: ["Community", "Charity", "Door-to-Door"],
      icon: Target,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Investor Avoids $100,000 Crypto Scam",
      category: "Investment Protection",
      amount: "$100,000",
      description:
        "An investor was about to transfer funds to a fraudulent crypto platform.",
      details:
        "The platform promised unrealistic returns. A last-minute search on Scam-Report showed identical complaints about the same operation with different branding.",
      impact: "Saved significant investment, avoided total loss",
      tags: ["Crypto", "Investment", "High-Stakes"],
      icon: TrendingUp,
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 6,
      title: "Small Business Network Shares Warning",
      category: "Network Effect",
      amount: "Multiple Businesses",
      description:
        "Local business association used our platform to warn all members about a scam.",
      details:
        "One business reported a scammer posing as a utility company. The association shared the report with 200+ members, preventing widespread fraud.",
      impact: "Protected business community, enhanced awareness",
      tags: ["Business Network", "Prevention", "Community"],
      icon: Award,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const stats = [
    { value: "500+", label: "Success Stories" },
    { value: "$15M+", label: "Total Amount Protected" },
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

          {/* Featured Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8" />
                  <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    Featured Success Story
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  How a Community Saved Itself from a $2M Real Estate Scam
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  An entire neighborhood was targeted by fake real estate
                  agents. Through collective reporting on our platform, they
                  exposed the operation and prevented massive financial losses.
                </p>
                <Link href="/success-stories/featured">
                  <button className="px-6 py-3 bg-white text-green-700 rounded-full font-semibold hover:bg-gray-100 flex items-center gap-2">
                    Read Full Story
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${story.color}`} />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${story.color} flex items-center justify-center`}
                    >
                      <story.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        {story.category}
                      </span>
                      <div className="text-2xl font-bold text-gray-900 mt-2">
                        {story.amount}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{story.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Impact:
                      </h4>
                      <p className="text-gray-700">{story.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link href={`/success-stories/${story.id}`}>
                      <button className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold flex items-center justify-center gap-2">
                        Read Full Story
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of people who have taken action against scams and
                protected their communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/report/create">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100">
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

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Community Says
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "This platform saved my business from a $30,000 fraud. The community support was incredible.",
                  author: "Michael R.",
                  role: "Small Business Owner",
                },
                {
                  quote:
                    "I was able to warn my elderly parents about a scam because of a report I read here.",
                  author: "Sarah L.",
                  role: "Concerned Daughter",
                },
                {
                  quote:
                    "The mediation process helped me recover payment from a client who disappeared.",
                  author: "David K.",
                  role: "Freelance Developer",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                >
                  <MessageSquare className="w-12 h-12 text-gray-300 mb-6" />
                  <p className="text-gray-700 italic text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
