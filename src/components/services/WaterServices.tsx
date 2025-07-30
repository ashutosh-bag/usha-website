"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { GlassWaterIcon as WaterIcon, Droplets } from "lucide-react"

interface Particle {
  left: string
  delay: number
  direction: "left" | "right"
}

export default function WaterServices() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: i * 0.2,
      direction: (i % 2 === 0 ? "left" : "right") as "left" | "right",
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-[url('/assets/services/water.jpg')] bg-cover bg-center font-lora"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full"
            animate={{
              y: ["0%", "100%"],
              x: particle.direction === "left" ? ["-10px", "10px"] : ["10px", "-10px"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: particle.left,
              top: `-20px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6 flex items-center justify-center gap-4">
            <WaterIcon className="w-8 h-8 text-blue-500" />
            WATER SERVICE
            <WaterIcon className="w-8 h-8 text-blue-500" />
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            style={{ y }}
          >
            <Image
              src="/assets/services/treatments.jpg"
              alt="Water Treatment Facility"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Description */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Water is the lifeline of industrial activities and urban corporation. This requires setting up of
                  dedicated water treatment plants, wherein, we offer vast expertise and services as a top achieve water
                  treatment plant Construction Company in India.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  We offer end-to-end industrial and municipal water treatment solutions across the value chain; river
                  rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent
                  treatment plants. We undertake major irrigation projects. We capitalize on our in-house design,
                  technology partnership, and real time project monitoring. We also focus on circular economy and
                  provide unique solutions to various customers in converting waste water into portable and industrial
                  water.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            "Water Treatment Plants",
            "Sewage Treatment",
            "Effluent Treatment",
            "River Rejuvenation",
            "Irrigation Projects",
            "Desalination Plants",
          ].map((service, index) => (
            <motion.div
              key={service}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-t from-green-500 to-sky-400 rounded-lg p-12 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
