// app/contact/page.tsx
"use client";

import Navigation from "@/app/components/Navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Shield,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
    urgency: "normal",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const contactCategories = [
    "General Inquiry",
    "Report a Scam",
    "Technical Support",
    "Legal Inquiry",
    "Media Request",
    "Partnership",
    "Feedback",
    "Other",
  ];

  const urgencyLevels = [
    { value: "low", label: "Low", color: "bg-green-100 text-green-800" },
    { value: "normal", label: "Normal", color: "bg-blue-100 text-blue-800" },
    { value: "high", label: "High", color: "bg-orange-100 text-orange-800" },
    { value: "urgent", label: "Urgent", color: "bg-red-100 text-red-800" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: "",
        urgency: "normal",
        consent: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  const emergencyContacts = [
    {
      title: "Emergency Scam Report",
      number: "1-800-SCAM-REPORT",
      description: "24/7 hotline for urgent scam reports",
      icon: AlertTriangle,
      color: "from-red-600 to-orange-500",
    },
    {
      title: "Legal Support",
      number: "1-800-LEGAL-HELP",
      description: "Connect with legal professionals",
      icon: Shield,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Victim Support",
      number: "1-800-SUPPORT",
      description: "Emotional and recovery support",
      icon: MessageSquare,
      color: "from-green-600 to-emerald-500",
    },
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
                <MessageSquare className="w-20 h-20 text-blue-600" />
                <Mail className="w-10 h-10 text-green-500 absolute -top-2 -right-2" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team. We're here to help with scams,
              support, and any questions.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-green-800 text-lg">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        {contactCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <div className="flex gap-2">
                        {urgencyLevels.map((level) => (
                          <button
                            key={level.value}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, urgency: level.value })
                            }
                            className={`px-4 py-2 rounded-lg transition-all ${
                              formData.urgency === level.value
                                ? level.color
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {level.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide detailed information..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) =>
                        setFormData({ ...formData, consent: e.target.checked })
                      }
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mt-1"
                    />
                    <label className="ml-3 text-gray-700">
                      I consent to Scam-Report collecting and processing my
                      personal data for the purpose of handling my inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    {submitted ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Emergency Contacts */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Emergency Contacts
                </h3>
                {emergencyContacts.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${contact.color} rounded-2xl p-6 text-white`}
                  >
                    <div className="flex items-start gap-4">
                      <contact.icon className="w-8 h-8" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {contact.title}
                        </h4>
                        <div className="text-2xl font-bold mb-2">
                          {contact.number}
                        </div>
                        <p className="text-white/80 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* General Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  General Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">
                        support@scam-report.com
                      </div>
                      <div className="text-gray-600">legal@scam-report.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                      <div className="text-gray-600">Business Hours</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">
                        123 Security Street
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Hours</div>
                      <div className="text-gray-600">
                        24/7 Emergency Support
                      </div>
                      <div className="text-gray-600">
                        Business: Mon-Fri 9AM-6PM PST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-4">Response Time</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Emergency Reports</span>
                      <span className="font-bold">&lt; 2 hours</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>General Support</span>
                      <span className="font-bold">24 hours</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Other Inquiries</span>
                      <span className="font-bold">48 hours</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Link */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Check our FAQ first
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Many common questions are already answered in our comprehensive
                FAQ section
              </p>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
              >
                Visit FAQ
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
