"use client"
import { useRef, useState } from "react"
import type React from "react"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Target, Eye, Users, Award, Send, CheckCircle } from "lucide-react"

export default function MissionVision() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 3000)
    }, 2000)
  }

  const missionPoints = [
    {
      icon: Users,
      title: "Employee & Community Welfare",
      description:
        "Maintaining the tradition of making lives comfortable for our employees and communities at large through sustainable practices and growth opportunities.",
    },
    {
      icon: Award,
      title: "Customer Success & Satisfaction",
      description:
        "Making our customers happy and successful through exceptional workmanship, quality services, and innovative solutions that exceed expectations.",
    },
  ]

  const stats = [
    { number: "40+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: CheckCircle },
    { number: "50+", label: "Industry Partners", icon: Users },
  ]

  return (
    <section
      ref={containerRef}
      className="relative py-20 font-lora bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6 shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Our</span>{" "}
            Mission & Vision
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driving excellence in EPC projects while fostering sustainable growth and creating lasting value for all
            stakeholders
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Vision Section - 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <blockquote className="text-lg text-gray-700 leading-relaxed italic pl-6">
                  {`"To`} be {`India's`} leader in EPC projects and to provide de-bottlenecking solutions for existing {`projects"`}
                </blockquote>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <p className="text-sm text-gray-600">
                  Our vision drives us to continuously innovate and excel in delivering world-class engineering
                  solutions that set industry benchmarks.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Section - 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              </div>

              <div className="space-y-6">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {point.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Get In <span className="text-amber-400">Touch</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full p-4 bg-white/10 backdrop-blur-sm border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full p-4 bg-white/10 backdrop-blur-sm border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full p-4 bg-white/10 backdrop-blur-sm border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="w-full p-4 bg-white/10 backdrop-blur-sm border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/20 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {formStatus === "loading" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Video Section */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Proud to be Indian</h3>
            <div className="relative rounded-2xl overflow-hidden">
              <video
                src="/assets/home/indianflag.mp4"
                width={400}
                height={300}
                
                autoPlay
                loop
                muted
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Aatmanirbhar Section */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Aatmanirbhar Bharat</h3>
            <div className="flex justify-center items-center h-64">
              <div className="relative">
                <Image
                  src="/assets/home/Featured.jpg"
                  alt="Aatmanirbhar Bharat Logo"
                  width={200}
                  height={200}
                  className="object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
