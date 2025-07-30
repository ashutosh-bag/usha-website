"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"

export default function MetalAndMineralServices() {
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
              METALS & MINERALS
            </h2>
            <div className="h-[2px] bg-amber-700 w-12 md:w-24 ml-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div variants={imageVariants} className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src="/assets/services/minerals.jpg"
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
                A leading end-to-end, customized solutions provider for IRON ORE & Ferrous and Non Ferrous industries,
                we use cutting-edge technologies acquired through relationships with leading technology providers. The
                use of a bulk material handling system and pipe conveyor system greatly help to increase our efficiency.
              </motion.p>

              <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-gray-800">
                Our comprehensive services span the entire value chain, from extraction and processing to transportation
                and distribution, ensuring optimal resource utilization and minimal environmental impact.
              </motion.p>

              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">Material Handling</h3>
                  <p className="text-gray-700">
                    Advanced bulk material handling systems optimized for efficiency and safety.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">Conveyor Systems</h3>
                  <p className="text-gray-700">
                    State-of-the-art pipe conveyor systems for reliable material transport.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">Processing Solutions</h3>
                  <p className="text-gray-700">
                    Customized processing solutions for ferrous and non-ferrous materials.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">Sustainable Practices</h3>
                  <p className="text-gray-700">
                    Environmentally responsible operations with minimal ecological footprint.
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

