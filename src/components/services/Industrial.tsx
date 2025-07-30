'use client'
import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import React from 'react'

export default function Industrial() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible")
      }
    }, [controls, isInView])
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    }
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }
  
    const imageVariants = {
      hidden: { scale: 0.9, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    }
  return (
    <section id="metals-minerals" className="py-16 md:py-24 font-lora bg-gradient-to-t from-green-500 to to-sky-400" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 tracking-tight">
              INDUSTRIAL
            </h2>
            <div className="h-[2px] bg-amber-700 w-12 md:w-24 ml-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div variants={imageVariants} className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src="/assets/services/industrialworks.jpg"
                  alt="Industrial metal processing facility showing bulk material handling system"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-amber-800/10 mix-blend-multiply"></div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-800"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5 }}
              />
            </motion.div>

            <div className="space-y-6">
              <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-gray-800">
               USHA Projects is a leading company providing comprehensive designing and construction solutions for setting-up, expansion, and modernisation of manufacturing facilities for HDPE PIPES,
              </motion.p>

              <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-gray-800">
              This division uses prefab construction, technology-driven construction, in-house design as key drivers in the quick execution of projects with the highest quality and safety standards. Few key projects
              </motion.p>

              <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-gray-800">
             As the Indian government is increasingly focussing upon {`‘Make in India’`}, there will be more need for modern industrial and manufacturing facilities nationwide. This requires leading companies such as usha Projects Ltd to come forward towards modernising and augmenting {`India’s`} industrial and manufacturing capability to enable the nation to compete in the global arena.
              </motion.p>

              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">Comprehensive Manufacturing Facility Development</h3>
                  <p className="text-gray-700">
                  We specialize in designing, constructing, and expanding state-of-the-art HDPE pipe manufacturing units, ensuring efficiency, durability, and scalability.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">Prefab & Technology-Driven Construction</h3>
                  <p className="text-gray-700">
                  Using prefabrication and advanced construction technologies, we deliver high-quality, rapid-execution projects while maintaining top safety and quality standards.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2"> Turnkey Industrial Modernization</h3>
                  <p className="text-gray-700">
                  From concept to completion, we offer turnkey solutions for industrial modernization, helping businesses upgrade their manufacturing infrastructure seamlessly.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">Supporting ‘Make in India’ Vision</h3>
                  <p className="text-gray-700">
                  As India pushes for self-reliance in manufacturing, we play a key role in developing modern, globally competitive industrial facilities to drive growth and innovation.
                  </p>
                </motion.div>
              </motion.div>

              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
