// app/page.tsx
"use client";

import Navigation from "./components/Navigation";
import { AnimatedText } from "./components/AnimatedText";
import { AnimatedCounter } from "./components/AnimatedCounter";
import {
  Shield,
  Users,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  FileText,
  MessageSquare,
  TrendingUp,
  Lock,
  Eye,
  Bell,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Hero Background Image - Add your generated image here */}
          <div className="relative w-full h-full">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              {/* This div will hold your hero background image */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero-background.jpg"
                  alt="Digital shield protecting community"
                  fill
                  className="object-cover opacity-20"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                                 linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {/* Floating Elements */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-500/20 rounded-full"
                initial={{
                  x: Math.random() * 100 + "vw",
                  y: Math.random() * 100 + "vh",
                }}
                animate={{
                  y: [
                    null,
                    `-${Math.random() * 100}px`,
                    `-${Math.random() * 200}px`,
                  ],
                  x: [null, `${Math.random() * 100 - 50}px`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <Shield className="w-24 h-24 text-red-500 mx-auto animate-pulse-slow" />
              <AlertTriangle className="w-12 h-12 text-yellow-500 absolute top-0 right-0 animate-float" />
            </div>
          </motion.div>

          <AnimatedText>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white drop-shadow-lg">PROTECT</span>
              <span className="block">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-shine bg-[length:200%_auto]">
                  YOUR COMMUNITY
                </span>
              </span>
            </h1>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <div className="relative inline-block mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-200 font-semibold">
                Promote <span className="text-green-400">TRUST</span> and
                Discourage
                <span className="text-red-400"> Bad Business</span>
              </h2>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </div>
          </AnimatedText>

          {/* THE WALL Section */}
          <Link href="/reports">
            <AnimatedText delay={0.4}>
              <div className="relative my-16 cursor-pointer">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-800 px-12 py-4 text-2xl font-bold text-white tracking-wider border-2 border-red-500/30 rounded-xl shadow-2xl">
                    View Reports
                  </span>
                </div>
              </div>
            </AnimatedText>
          </Link>

          {/* Call to Action */}
          <AnimatedText delay={0.6}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Stuck on the wrong side of a{" "}
                <span className="text-red-400">bad deal?</span>
              </h3>
              <p className="text-xl text-gray-300 mb-12">
                Report your experience to protect the public and promote
                self-mediation.
              </p>

              {/* Animated Process Steps */}
              <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-12">
                {[
                  {
                    step: "CREATE",
                    icon: "✍️",
                    color: "from-blue-500 to-cyan-500",
                    description: "Create your report",
                  },
                  {
                    step: "REPORT",
                    icon: "📢",
                    color: "from-red-500 to-pink-500",
                    description: "Submit for review",
                  },
                  {
                    step: "CANCEL",
                    icon: "✅",
                    color: "from-green-500 to-emerald-500",
                    description: "Resolve issues",
                  },
                ].map((item, index) => (
                  <Link
                    href="/report/create"
                    key={item.step}
                    className="flex flex-col items-center group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-2xl relative group-hover:shadow-xl transition-all duration-300`}
                      >
                        <span className="text-5xl">{item.icon}</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="text-2xl font-bold text-white">
                        {item.step}
                      </span>
                      <span className="text-gray-300 mt-2">
                        {item.description}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/report/create">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-red-500/30 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      🚨 Report a Scam
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.button>
                </Link>

                <Link href="/reports">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-lg text-white px-10 py-4 rounded-full text-xl font-bold border-2 border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                  >
                    🔍 Browse Reports
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </AnimatedText>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              How It <span className="text-red-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Our simple 4-step process helps you report scams and protect
              others
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Create Report",
                description: "Fill out our secure form with details",
                icon: FileText,
                color: "from-blue-500 to-cyan-500",
                link: "/report/create",
              },
              {
                step: "2",
                title: "Verification",
                description: "Our team reviews for accuracy",
                icon: Shield,
                color: "from-purple-500 to-pink-500",
                link: "/how-it-works",
              },
              {
                step: "3",
                title: "Publication",
                description: "Warn others by publishing",
                icon: Target,
                color: "from-green-500 to-emerald-500",
                link: "/reports",
              },
              {
                step: "4",
                title: "Resolution",
                description: "We help mediate disputes",
                icon: MessageSquare,
                color: "from-orange-500 to-red-500",
                link: "/how-it-works#mediation",
              },
            ].map((item, index) => (
              <Link href={item.link} key={item.step}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <div
                    className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6`}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-500 mb-2">
                      STEP {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="mt-6">
                      <span className="inline-flex items-center text-red-600 font-semibold group">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/how-it-works">
              <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 flex items-center gap-2 mx-auto">
                View Complete Process
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Making a <span className="text-green-400">Real Impact</span>
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                value: 12543,
                label: "Scams Reported",
                icon: Shield,
                color: "text-red-400",
                description: "And counting every day",
              },
              {
                value: 92,
                label: "Successful Mediations",
                icon: CheckCircle,
                color: "text-green-400",
                description: "Issues resolved peacefully",
              },
              {
                value: 1.2,
                label: "Million Protected",
                icon: Users,
                color: "text-blue-400",
                description: "Community members saved",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className={`${stat.color} mb-4`}>
                  <stat.icon className="w-16 h-16 mx-auto" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.label.includes("Million") ? (
                    <AnimatedCounter value={stat.value} suffix="M" />
                  ) : (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.label.includes("%") ? "%" : "+"}
                    />
                  )}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reports">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 flex items-center gap-2 mx-auto">
                <TrendingUp className="w-5 h-5" />
                View All Reports & Stats
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Success <span className="text-green-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              See how our community has made a difference
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Story 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/success-story1.jpg"
                    alt="Diverse group celebrating victory against fraud"
                    fill
                    className="object-cover opacity-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    $15,000 Recovered
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "Thanks to Quiet-Report, our small business recovered funds
                    from a fake supplier. The mediation process was professional
                    and effective."
                  </p>
                  <div className="text-gray-500">
                    — Sarah M., Small Business Owner
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/success-story2.jpg"
                    alt="Person looking at phone with relieved expression"
                    fill
                    className="object-cover opacity-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                    <Shield className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Scam Prevention in Action
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "I almost fell for an investment scam, but a report on this
                    platform warned me just in time. You saved me from losing my
                    savings."
                  </p>
                  <div className="text-gray-500">— James T., Investor</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/success-stories">
              <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 flex items-center gap-2 mx-auto">
                Read More Success Stories
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Quiet-Report</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Powerful features designed to protect you and your community
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lock,
                title: "Secure & Encrypted",
                description: "Military-grade encryption protects all your data",
                color: "text-purple-600",
              },
              {
                icon: Eye,
                title: "Anonymous Reporting",
                description: "Report safely without revealing your identity",
                color: "text-blue-600",
              },
              {
                icon: Bell,
                title: "Real-time Alerts",
                description: "Get notified about new scams in your area",
                color: "text-orange-600",
              },
              {
                icon: TrendingUp,
                title: "Track Impact",
                description: "See how your report helps others",
                color: "text-green-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`${feature.color} mb-6`}>
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative h-96"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/features-dashboard.jpg"
                alt="Modern dashboard interface showing scam reports and analytics"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80 flex items-center justify-center">
                <div className="text-center px-4">
                  <Shield className="w-32 h-32 text-red-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Advanced Protection Dashboard
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Monitor scam trends, track reports, and stay protected with
                    our intelligent platform
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Account Creation Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedText>
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  CREATE your{" "}
                  <span className="text-blue-400">reporting account</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Setup your own account to publish, edit and cancel your
                  reports.
                </p>
                <div className="mb-10">
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started, it's FAST & EASY!
                  </div>
                  <div className="space-y-4">
                    {[
                      "Secure & Encrypted",
                      "Anonymous Reporting",
                      "Real-time Updates",
                      "24/7 Support",
                      "Free to Use",
                      "Community Verified",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      REPORT A PERSON OR BUSINESS
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Whether it's an individual scammer or a fraudulent
                      company, we've got you covered.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/report/create">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-2xl hover:shadow-red-500/30 transition-all duration-300 w-full sm:w-auto flex items-center gap-3"
                      >
                        🚨 Start Your Report
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                    <Link href="/how-it-works">
                      <button className="px-8 py-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all duration-300 w-full sm:w-auto">
                        Learn How It Works
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedText>

            {/* Report Form Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/report-form-preview.jpg"
                      alt="Clean modern web form interface for reporting scams"
                      fill
                      className="object-cover opacity-20"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="h-4 bg-gray-700 rounded w-32 mb-6"></div>
                    <div className="space-y-4">
                      {[
                        "Business/Person Name",
                        "Date of Incident",
                        "Description",
                        "Amount Lost",
                        "Evidence Upload",
                      ].map((field, index) => (
                        <div key={field} className="animate-pulse">
                          <div className="h-3 bg-gray-700 rounded w-1/4 mb-2"></div>
                          <div className="h-12 bg-gray-800 rounded border border-gray-700"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 bg-gray-700 rounded-lg flex-1"></div>
                    <div className="h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex-1"></div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full z-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full z-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join thousands of people who are fighting back against scams and
              protecting their communities.
            </p>
          </AnimatedText>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/report/create">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-red-600 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
              >
                🚨 Report a Scam Now
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>

            <Link href="/reports">
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300">
                🔍 Browse Recent Reports
              </button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Free to Use", value: "100%" },
              { label: "Secure", value: "256-bit" },
              { label: "Anonymous", value: "Protected" },
              { label: "Community", value: "50K+" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-white">
                  {item.value}
                </div>
                <div className="text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
