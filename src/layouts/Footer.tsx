"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaCertificate,
  FaAward,
  FaTools,
  FaIndustry,
} from "react-icons/fa"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const expertise = [
    {
      icon: FaTools,
      title: "Pipeline Engineering",
      description: "Cross Country Pipelines for Iron Ore, Ash Slurry, Water, Gas & Oil transportation",
    },
    {
      icon: FaIndustry,
      title: "Heavy Equipment",
      description: "Fabrication & Erection for Power, Steel, Industries, Oil & Gas sectors",
    },
    {
      icon: FaCertificate,
      title: "Fire Safety Systems",
      description: "Design & Engineering of Fire Fighting equipment and pipeline works",
    },
  ]

  const whyUsha = [
    "Execute complex projects in challenging environments",
    "Consistent on-time delivery with highest quality standards",
    "Comprehensive Design, Engineering & Construction services",
    "4 decades of rich industry experience",
  ]

  const credentials = [
    {
      icon: FaAward,
      title: "ISO 9001:2015",
      description: "Quality Management System Certified",
    },
    {
      icon: FaCertificate,
      title: "ISO 14001:2015",
      description: "Environmental Management System Certified",
    },
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-674-27241555 / 27242555",
      href: "tel:+916742724155",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@ushaprojects.com",
      href: "mailto:info@ushaprojects.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Bhubaneswar, Odisha, India",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:bg-blue-700" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden font-lora">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=Industrial+Background')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900 to-gray-900/90"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="mb-6">
              <Image src="/assets/logo-light.png" alt="Usha Projects Logo" width={200} height={80} className="mb-4" />
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </div>

            <p className="text-gray-300 leading-relaxed text-base">
              USHA PROJECTS (INDIA) PRIVATE LIMITED is one of {`India's`} leading EPC companies specializing in
              infrastructure development, construction, and project management with nearly 4 decades of rich experience
              in the industry.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors duration-300">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{contact.label}</div>
                    <div className="text-sm font-medium">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Expertise Section - Spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Our Expertise
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </h3>

            <div className="space-y-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Usha Section - Spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Why Choose Usha?
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </h3>

            <div className="space-y-3">
              {whyUsha.map((item, index) => (
                <motion.div key={index} className="flex items-start space-x-3 group" whileHover={{ x: 5 }}>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Credentials Section - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Credentials
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </h3>

            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-sm rounded-xl border border-blue-500/20 group hover:border-blue-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <credential.icon className="w-6 h-6 text-blue-400" />
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {credential.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{credential.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-blue-500/20"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Latest Projects</h3>
            <p className="text-gray-300 mb-6">
              Get insights into our latest developments, industry news, and project updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} USHA Projects (India) Private Limited. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
