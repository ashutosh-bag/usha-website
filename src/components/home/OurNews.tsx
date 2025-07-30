"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Clock, Tag } from "lucide-react"

const newsData = [
  {
    id: 1,
    title: "Electrical T&D Expansion",
    fullTitle: "USHA Secures ₹970 Million Rural Electrification Project Under RGGVY",
    description:
      "USHA has bagged a prestigious Project worth 970 Million in Rural Electrification under Rajiv Gandhi Grameen Vidyutikaran Yojna (RGGVY), implemented through National Thermal Power Corporation. With this, USHA has made a noteworthy foray into the arena of Electricity Transmission & Distribution and plans to play a significant role in the National Dream project of 100% Electrification of Rural India.",
    image: "/assets/photogallery/Other/22.jpg",
    category: "Infrastructure",
    value: "₹970 Million",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "NALCO ANGUL Project",
    fullTitle: "USHA Secures ₹1073 Million Contract for Ash Slurry Pipeline at NALCO Angul",
    description:
      "Usha Projects has received a contract worth Rs.1073 million for design engineering, fabrication, erection, testing, and commissioning of Ash Slurry Pipe Line (165 km) from CPP NALCO Angul to mines void Area.",
    image: "/assets/photogallery/Work Site/130.jpg",
    category: "Pipeline",
    value: "₹1073 Million",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "TATA Steel Kalinganagar",
    fullTitle: "USHA Executes Large-Scale Underground & Tunnel Pipeline Project for TATA Steel Kalinganagar",
    description:
      "Cross Country 10 km Underground wrapped and coated 1400 NB Raw Water Pipe Line. 80 Km Underground & Tunnel Utility Pipe Line inside Plant.",
    image: "/assets/photogallery/Work Site/11.jpg",
    category: "Industrial",
    value: "Major Contract",
    readTime: "5 min read",
  },
]

export default function OurNews() {
  const [selectedNews, setSelectedNews] = useState<(typeof newsData)[0] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const handleCardClick = (news: (typeof newsData)[0]) => {
    setSelectedNews(news)
  }

  const closeModal = () => {
    setSelectedNews(null)
  }

  return (
    <section
      ref={containerRef}
      className="relative font-lora py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      {/* Industrial Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20 z-0">
        <Image
          src="/placeholder.svg?height=400&width=300"
          alt="Industrial Equipment"
          width={300}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 z-0">
        <Image
          src="/placeholder.svg?height=350&width=250"
          alt="Construction Equipment"
          width={250}
          height={350}
          className="object-contain"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Latest</span> News
            & Updates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest project achievements, industry developments, and corporate milestones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>
        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCardClick(news)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.fullTitle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <Tag className="w-3 h-3" />
                  <span>{news.category}</span>
                </div>
                {/* Value Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {news.value}
                </div>
                {/* Date & Read Time */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{news.readTime}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                  {news.fullTitle}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{news.description}</p>
                {/* CTA Button */}
                <motion.div
                  className="flex items-center justify-between pt-4 border-t border-white/10"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-blue-400 font-semibold text-sm">Read Full Story</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Our Progress</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Follow our journey as we continue to deliver exceptional engineering solutions across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All News</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-300 transition-all duration-300"
              >
                Subscribe to Updates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Modal for Full News */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedNews.image || "/placeholder.svg"}
                  alt={selectedNews.fullTitle}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedNews.category}
                  </span>
                  <span className="text-gray-500 text-sm">{selectedNews.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedNews.fullTitle}</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">{selectedNews.description}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Project Value: {selectedNews.value}</div>
                    <button
                      onClick={closeModal}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
