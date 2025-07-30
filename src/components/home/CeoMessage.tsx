"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Quote, Award, Users, Target, TrendingUp, Globe, Shield, Lightbulb } from "lucide-react"

export default function CeoMessage() {
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.9, 0.8])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const stats = [
    { number: "20+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "300+", label: "Expert Professionals", icon: Users },
    { number: "50+", label: "Global Partners", icon: Globe },
  ]

  const values = [
    {
      title: "Excellence",
      description:
        "Unwavering commitment to delivering superior quality in every project, setting industry benchmarks through meticulous attention to detail and continuous improvement.",
      icon: Shield,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Innovation",
      description:
        "Pioneering cutting-edge solutions and embracing emerging technologies to address complex engineering challenges and drive industry transformation.",
      icon: Lightbulb,
      color: "from-green-600 to-green-800",
    },
    {
      title: "Integrity",
      description:
        "Building lasting relationships through transparent business practices, ethical conduct, and unwavering commitment to our promises and values.",
      icon: Award,
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Growth",
      description:
        "Fostering sustainable growth through strategic partnerships, continuous learning, and adaptive strategies that create value for all stakeholders.",
      icon: TrendingUp,
      color: "from-orange-600 to-orange-800",
    },
  ]

  return (
    <div ref={containerRef} className="relative font-lora bg-white overflow-hidden">
      {/* Hero Section with Parallax Background */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {isClient && (
          <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-green-900/10" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
          </motion.div>
        )}

        <motion.div className="relative z-10 max-w-7xl mx-auto px-6 py-20" style={{ opacity: contentOpacity }}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6 shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Leadership{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Vision</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* CEO Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-1">
                      <div className="w-full h-full bg-white rounded-full p-2">
                        <Image
                          src="/assets/home/shaji.jpg"
                          alt="Shaji Shivadasan - CEO"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Shaji Shivadasan</h2>
                  <p className="text-lg text-blue-600 font-semibold mb-4">Chief Executive Officer</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

                  {/* CEO Credentials */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-3 text-blue-600" />
                      <span>20+ Years Industry Leadership</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="w-4 h-4 mr-3 text-green-600" />
                      <span>Strategic Vision & Execution</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="w-4 h-4 mr-3 text-purple-600" />
                      <span>Global EPC Expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-xl font-medium text-gray-900 mb-8">
                      {`"At`} Usha Projects, we {`don't`} just build infrastructure – we architect the future of industrial
                      {`excellence."`}
                    </p>

                    <p className="text-lg">
                      Welcome to Usha Projects, where engineering excellence converges with innovative solutions to
                      create lasting value. For over two decades, we have been at the forefront of the EPC industry,
                      transforming complex visions into remarkable realities.
                    </p>

                    <p className="text-lg">
                      In {`today's`} rapidly evolving global landscape, we have embraced change as our constant companion.
                      Market transparency, technological advancement, and instantaneous global communications have
                      reshaped our industry fundamentally. At Usha Projects, we view these challenges as opportunities
                      to innovate, adapt, and lead.
                    </p>

                    <p className="text-lg">
                      Our sustained track record of profitable growth reflects our deep understanding of client needs
                      and our ability to anticipate future market demands. We remain committed to delivering innovative
                      solutions that not only meet {`today's`} requirements but also prepare our clients for {`tomorrow's`}
                      challenges.
                    </p>

                    <p className="text-lg">
                      What distinguishes Usha Projects is our systematic approach to managing transformation – beginning
                      with visionary leadership and extending through every level of our organization. We cultivate a
                      culture of commitment, performance, and continuous improvement while preserving our core values
                      and unique identity.
                    </p>

                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border-l-4 border-blue-600">
                      <p className="text-lg font-medium text-gray-900 italic">
                        {`"Our`} success is measured not just in projects completed, but in the lasting partnerships we
                        build and the positive impact we create for communities {`worldwide."`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <div ref={statsRef} className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:scale-105">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future Together?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join us in creating exceptional engineering solutions that transform industries and communities worldwide.
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
