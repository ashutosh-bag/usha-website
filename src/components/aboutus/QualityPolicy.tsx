"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb"
import Image from "next/image"
import { Award, CheckCircle, Target, Shield, Users, TrendingUp } from "lucide-react"

export default function QualityPolicy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const qualityPrinciples = [
    {
      icon: Award,
      title: "Excellence in Execution",
      description: "Maintaining the highest standards in every phase of project delivery",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality checks from design to commissioning",
      color: "from-green-600 to-green-800",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Continuously improving processes to enhance customer satisfaction",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Evolving our methodologies to stay ahead of industry standards",
      color: "from-orange-600 to-orange-800",
    },
  ]

  const qualityFeatures = [
    "ISO 9001:2015 Certified Quality Management System",
    "Comprehensive Quality Control at Every Project Phase",
    "Advanced Testing and Inspection Protocols",
    "Experienced Quality Assurance Team",
    "Real-time Quality Monitoring and Reporting",
    "Compliance with International Standards",
  ]

  const stats = [
    { number: "100%", label: "Quality Compliance", icon: CheckCircle },
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "40+", label: "Years Experience", icon: Award },
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Breadcrumb Section */}
      <div className="relative">
        <CommonBreadcrumb imageUrl="/assets/quality/qp.jpg" />
      </div>

      <div ref={containerRef} className="relative font-lora">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Quality</span>{" "}
              Policy
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our unwavering commitment to excellence drives every aspect of our EPC operations, ensuring superior
              quality from design to commissioning.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8 rounded-full"></div>
          </motion.div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image
                  src="/assets/quality/qp1.jpg"
                  alt="Quality Control Operations"
                  width={600}
                  height={600}
                  priority
                  className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Quality Commitment</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-bold text-blue-600">Usha Projects (India) Pvt. Limited</span> strives to be a
                    leading EPC contracting company, continuously improving its processes to enhance customer
                    satisfaction. We have implemented a robust Quality Management System across our entire EPC
                    operations, from initial design concepts to final project commissioning.
                  </p>
                  <p>
                    Our company follows stringent quality protocols to ensure that every phase of construction is
                    governed by established international standards and best practices. This comprehensive approach
                    includes rigorous quality checks from the initial design stage, through procurement and
                    manufacturing, up to final project execution and handover.
                  </p>
                  <p>
                    With an impressive track record of successfully completed projects across India and beyond, USHA
                    guarantees clients a seamless experience, ensuring quality-driven execution, cost-effectiveness, and
                    timely completion that exceeds industry benchmarks.
                  </p>
                </div>
              </div>

              {/* Quality Features */}
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {qualityFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quality Principles Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Our Quality{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Principles
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qualityPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Quality Performance Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Experience Quality Excellence</h3>
              <p className="text-xl mb-6 opacity-90">
                Partner with us for projects that set new benchmarks in quality, reliability, and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  View Our Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Contact Quality Team
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
