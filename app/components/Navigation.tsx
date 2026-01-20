"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define which pages should use light text (dark backgrounds)
  const lightTextPages = [
    "/", // Landing page
    "/dark-page-example", // Add other dark pages here
    "/another-dark-page",
  ];

  // Determine if current page should use light text
  const isLightTextPage = lightTextPages.includes(pathname);

  // Calculate text color based on scroll state and page type
  const getTextColor = () => {
    if (scrolled) {
      return "text-gray-900"; // After scroll, always dark text on white background
    }

    // Before scroll: light text for dark pages, dark text for light pages
    return isLightTextPage ? "text-gray-200" : "text-gray-900";
  };

  const getNavLinkColor = () => {
    if (scrolled) {
      return "text-gray-700 hover:text-gray-900"; // After scroll
    }

    // Before scroll: different colors based on page type
    return isLightTextPage
      ? "text-gray-300 hover:text-white"
      : "text-gray-700 hover:text-gray-900";
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Browse Reports", href: "/reports" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Shield className="w-8 h-8 text-red-600" />
                <AlertTriangle className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1" />
              </motion.div>
              <div className="flex flex-col">
                <span
                  className={`text-2xl font-bold transition-colors ${
                    scrolled
                      ? "text-gray-900"
                      : isLightTextPage
                      ? "text-gray-200"
                      : "text-gray-900"
                  } group-hover:text-red-600`}
                >
                  QUIET<span className="text-red-600">-REPORTS</span>
                </span>
                <span
                  className={`text-xs transition-colors -mt-1 ${
                    scrolled
                      ? "text-gray-600"
                      : isLightTextPage
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Protecting Communities
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative font-medium group ${
                      scrolled
                        ? "text-gray-700 hover:text-gray-900"
                        : isLightTextPage
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-700 hover:to-orange-600"
              >
                Report Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden transition-colors ${
                scrolled
                  ? "text-gray-900"
                  : isLightTextPage
                  ? "text-gray-200"
                  : "text-gray-900"
              } hover:text-red-600`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-lg lg:hidden z-40 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-gray-700 hover:text-red-600 font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href={"/report/create"}>
                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold shadow-md hover:from-red-700 hover:to-orange-600 transition-all">
                    Report a Scam
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
