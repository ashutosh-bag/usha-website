"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronDown, Phone } from "lucide-react" // Changed FaPhoneAlt to Phone from lucide-react

const navItems = [
  { title: "HOME", link: "/" },
  {
    title: "ABOUT US",
    dropdown: [
      { title: "ABOUT USHA", link: "/aboutusha" },
      { title: "MISSION & VISION", link: "/visionmission" },
      { title: "QUALITY POLICY", link: "/qualitypolicy" },
      { title: "PARTNER WITH US", link: "/partnerwithus" },
      { title: "SAFETY POLICY", link: "/safetypolicy" },
      { title: "FIELD OF OPERATION", link: "/fieldofoperation" },
      { title: "HSE POLICY", link: "/hsepolicy" },
      { title: "USHA FAMILY", link: "/ushafamily" },
      { title: "PHOTO GALLERY", link: "/photogallery" },
    ],
  },
  {
    title: "SERVICES",
    dropdown: [
      { title: "USHA SERVICES", link: "/services/ushaservices" },
      { title: "CORE SERVICES", link: "/services/coreservices" },
      { title: "EPC SERVICES", link: "/services/epcservices" },
      { title: "EXPERTISE", link: "/services/expertise" },
      { title: "WATER SERVICES", link: "/services/waterservices" },
      { title: "POWER SERVICES", link: "/services/powerservices" },
      { title: "METAL & MINERAL SERVICES", link: "/services/metalandmineralservices" },
      { title: "INDUSTRIAL", link: "/services/industrial" },
      { title: "OIL & GAS SERVICES", link: "/services/oilandgas" },
      { title: "CHP & AHP SERVICES", link: "/services/chsahp" },
    ],
  },
  {
    title: "WE EXECUTE",
    dropdown: [
      { title: "ENGINEERING", link: "/weexecute/engineering" },
      { title: "CONSTRUCTION", link: "/weexecute/construction" },
      { title: "PROCUREMENT", link: "/weexecute/procurement" },
      { title: "QUALITY SERVICES", link: "/weexecute/qualityservice" },
    ],
  },
  {
    title: "PROJECTS",
    dropdown: [
      { title: "PROJECTS IN PROGRESS", link: "/projects/projectinprogress" },
      { title: "PROJECT COMPLETED", link: "/projects/projectcompleted" },
      { title: "PROJECT MANAGEMENT", link: "/projects/projectmanagement" },
    ],
  },
  {
    title: "CLIENTS",
    dropdown: [
      { title: "OUR CLIENTS", link: "/clients/ourclients" },
      { title: "CLIENT TESTIMONIALS", link: "/clients/clienttestimonial" },
    ],
  },
  {
    title: "CAREER",
    dropdown: [
      { title: "REQUIREMENT POLICY", link: "/career/recriutmentpolicy" },
      { title: "REQUIREMENT PROCEDURE", link: "/career/recruitmentprocedure" },
      { title: "CURRENT OPENINGS", link: "/career/currentopenings" },
      { title: "CORPORATE CONDUCT", link: "/career/corporateconduct" },
      { title: "EMPLOYEE CONDUCT", link: "/career/employeeconduct" },
    ],
  },
  { title: "CONTACT US", link: "/contactus" },
]

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`hidden lg:flex justify-between items-center sticky top-0 z-50 px-8 py-4 transition-all duration-500 font-lora ${
        isScrolled
          ? "h-16 bg-gradient-to-r from-blue-200 via-blue-700 to-green-600 shadow-2xl border-b border-blue-300/30"
          : "h-20 bg-gradient-to-r from-blue-200 via-blue-600 to-green-500 shadow-lg"
      }`}
    >
      {/* Logo Section */}
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 min-w-fit">
        <div className="relative">
          <img
            src="/assets/logo-light.png" // Using placeholder for logo
            alt="Logo"
            className={`transition-all duration-500 ${isScrolled ? "h-12" : "h-16"} w-auto`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>
      {/* Navigation Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.title)}
              onMouseLeave={() => setOpenDropdown(null)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.link || "#"}
                className="relative flex items-center px-4 py-3 text-sm xl:text-base font-semibold font-lora text-white hover:text-yellow-300 transition-all duration-300 rounded-lg group-hover:bg-white/10"
              >
                <span className="relative z-10 whitespace-nowrap">{item.title}</span>
                {item.dropdown && (
                  <ChevronDown
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                      openDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                {/* Active Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              {/* Enhanced Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && openDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-2 w-64 bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl border border-blue-200/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50"></div>
                    <div className="relative z-10 py-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.05, duration: 0.3 }}
                        >
                          <Link
                            href={subItem.link}
                            className="group flex items-center px-6 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="font-medium">{subItem.title}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
      {/* Contact Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-3 min-w-fit bg-white/15 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20"
      >
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2.5 rounded-full">
            <Phone className="text-white w-4 h-4" /> {/* Changed to Lucide Phone icon */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-white/80 font-medium font-lora">Call Us</span>
          <span className="text-sm font-bold text-white font-lora">+91-674-27241555</span>
        </div>
      </motion.div>
    </motion.nav>
  )
}
