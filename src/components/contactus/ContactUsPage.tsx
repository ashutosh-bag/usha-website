"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import Head from "next/head"

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  [key: string]: string | undefined
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const errors: FormErrors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    if (!formData.message.trim()) errors.message = "Message is required"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        })
        setTimeout(() => setSubmitSuccess(false), 3000)
      } catch (error) {
        console.error("Error submitting form:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "3rem",
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, backgroundColor: "#e6b800" },
    tap: { scale: 0.95 },
  }

  const inputVariants = {
    focus: {
      boxShadow: "0 0 0 2px rgba(184, 134, 11, 0.3)",
      borderColor: "#b8860b",
    },
  }

  return (
    <>
      <Head>
        <title>Contact Us | Your Company</title>
        <meta
          name="description"
          content="Get in touch with our team. We're here to help with any questions or inquiries you may have."
        />
        <meta name="keywords" content="contact, support, help, inquiry, get in touch" />
      </Head>

      <section className="py-16 px-4 md:px-8 font-lora lg:px-16 overflow-hidden  bg-[url('/assets/contactus/tele1.jpg')] inset-0 font-lora  bg-cover bg-fixed ">
        <motion.div className="max-w-7xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <motion.div variants={itemVariants} className="bg-gradient-to-t from-green-500 to to-sky-400 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-8">
                <motion.h2 variants={titleVariants} className="text-3xl font-bold text-[#8B5A00]">
                  GET IN TOUCH
                </motion.h2>
                <motion.div variants={lineVariants} className="h-[3px] ml-4 bg-[#8B5A00]" />
              </div>

              <motion.form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      NAME
                    </label>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${formErrors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none transition duration-300`}
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      EMAIL
                    </label>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none transition duration-300`}
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      PHONE NO
                    </label>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${formErrors.phone ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none transition duration-300`}
                    />
                    {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      ADDRESS
                    </label>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none transition duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    MESSAGE
                  </label>
                  <motion.textarea
                    whileFocus="focus"
                    variants={inputVariants}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border ${formErrors.message ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none transition duration-300`}
                  />
                  {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-end">
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-[#F2C94C] text-white font-medium rounded-md shadow-md flex items-center justify-center transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        SUBMITTING...
                      </span>
                    ) : submitSuccess ? (
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        SENT!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        SUBMIT
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="bg-gradient-to-b from-green-500 to to-sky-400 rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center mb-8">
                  <motion.h2 variants={titleVariants} className="text-3xl font-bold text-[#8B5A00]">
                    CONTACT INFO
                  </motion.h2>
                  <motion.div variants={lineVariants} className="h-[3px] ml-4 bg-[#8B5A00]"/>
                </div>

                <motion.div className="bg-black text-white p-6 rounded-lg" variants={itemVariants}>
                  <motion.div
                    className="flex items-start mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="mr-3 h-5 w-5 text-[#F2C94C] flex-shrink-0 mt-1"/>
                    <p className="text-sm">+91-674-27241555 / 27242555</p>
                  </motion.div>

                  <motion.div className="mb-8" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="flex items-start mb-2">
                      <MapPin className="mr-3 h-5 w-5 text-[#F2C94C] flex-shrink-0 mt-1"/>
                      <div>
                        <h3 className="font-medium mb-2">Registered Office</h3>
                        <p className="text-sm mb-2">
                          Usha House, House No-1, Surya Vihar patia, KIIT Campus-III, Bhubaneswar-751024
                        </p>
                        <div className="flex items-start">
                          <Mail className="mr-2 h-4 w-4 text-[#F2C94C] flex-shrink-0 mt-1"/>
                          <p className="text-sm">Mail us at: career@ushaprojects.com</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-[#F2C94C] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Corporate Office</h3>
                        <p className="text-sm mb-2">
                          Usha Tower, Plot No.306/1815/3423, KIIT Campus-III, Patia, Bhubaneswar-751024, Odisha, India
                        </p>
                        <div className="flex items-start">
                          <Mail className="mr-2 h-4 w-4 text-[#F2C94C] flex-shrink-0 mt-1"/>
                          <p className="text-sm">
                            Mail us at: career@ushaprojects.com / corporate@ushaprojects.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Map Section */}
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden h-[300px] flex-grow"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d148534.1838603641!2d85.7459533152776!3d20.356897374775365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a1909409e50976b%3A0x5393a32c45b4e58a!2sUsha%20House%2CHouse%20No-1%2CSurya%20Vihar%2CKIIT%20Campus-III-751024.%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!3m2!1d20.3569167!2d85.828355!5e1!3m2!1sen!2sin!4v1741169850764!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location Map"
                  aria-label="Map showing our office location"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}   

