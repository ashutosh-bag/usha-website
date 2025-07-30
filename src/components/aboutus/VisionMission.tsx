"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb"
import { Target, Eye, Heart, Shield, Users, Leaf, CheckCircle, Award } from "lucide-react"

export default function VisionMission() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = ["/assets/visionmission/mission.jpg", "/assets/visionmission/vision.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const missionPoints = [
    {
      icon: Users,
      title: "Employee & Community Welfare",
      description:
        "To maintain the tradition of making the lives of its employees and the people at large, a comfortable one.",
    },
    {
      icon: Award,
      title: "Customer Success",
      description: "To make our customers happy and successful with our quality services.",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Cost Effectiveness",
      description:
        "To be cost effective in the utilization of all resources, always remembering that we are spending the customer's money.",
    },
    {
      icon: Target,
      title: "Customer Responsiveness",
      description: "Be responsive to our customers and their changing needs.",
    },
    {
      icon: Heart,
      title: "Ethical Conduct",
      description:
        "Act ethically and honestly, treating employees, customers and others with fairness, dignity and respect.",
    },
    {
      icon: Users,
      title: "Employee Development",
      description:
        "Commit to the safety and development of our employees by balancing the needs of our employees & customers.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "Respect and protect the environment in all our activities to ensure a sustainable environment. Communicate in an open and timely manner.",
    },
  ]

  const stats = [
    { number: "40+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: CheckCircle },
    { number: "50+", label: "Industry Partners", icon: Users },
  ]

  return (
    <div>
      <CommonBreadcrumb imageUrl="/assets/aboutusha/mission.jpg" />

      <section
        ref={containerRef}
        className="relative font-lora py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
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
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Our</span>{" "}
              Vision & Mission
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Driving excellence in EPC projects while fostering sustainable growth and creating lasting value for all
              stakeholders
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8 rounded-full"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Sliding Images Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {images.map((img, index) => (
                  <Image
                    key={img}
                    src={img || "/placeholder.svg"}
                    alt={`Vision Mission Image ${index + 1}`}
                    fill
                    className="object-cover transition-opacity duration-1000"
                    style={{
                      opacity: index === currentImageIndex ? 1 : 0,
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision & Mission Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Vision Section */}
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic pl-6">
                    {`"To`} be {`India's`} leader in EPC projects and to provide de-bottlenecking solutions for existing
                    {`projects"`}
                  </blockquote>
                </div>
              </div>

              {/* Mission Section */}
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
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
                      className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Crane Image with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-3 relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative h-[500px]"
              >
                <Image
                  src="/assets/visionmission/crane.png"
                  alt="Construction Crane"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
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
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Achievements</h3>
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
              <h3 className="text-3xl font-bold mb-4">Ready to Build the Future Together?</h3>
              <p className="text-xl mb-6 opacity-90">
                Join us in creating exceptional engineering solutions that transform industries and communities
                worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Opportunities
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Contact Leadership
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
