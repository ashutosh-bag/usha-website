"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Iron Ore Slurry Pipeline",
    subtitle: "Ash Slurry Pipeline",
    image: "/assets/services/ironoreslurry.jpg",
  },
  {
    id: 2,
    title: "BOP of Power Plants",
    image: "/assets/services/bop.webp",
  },
  {
    id: 3,
    title: "PLANT PIPING",
    subtitle: "GAS, OIL, Liquid & Water",
    image: "/assets/services/plantpipes.webp",
  },
  {
    id: 4,
    title: "CROSS COUNTRY PIPING",
    image: "/assets/services/crosscountry.webp",
  },
  {
    id: 5,
    title: "HEAVY Structural, Equipment,",
    subtitle: "ERECTION & Comissioning",
    image: "/assets/services/structural.jpg",
  },
  {
    id: 6,
    title: "COMPOSITE WORKS",
    image: "/assets/services/composite.jpeg",
  },
  {
    id: 7,
    title: "PLANT TECHNOLOGICAL",
    subtitle: "STRUCTURES",
    image: "/assets/services/plant.jpg",
  },
  {
    id: 8,
    title: "PRESSURE VESSELS & MODULES",
    subtitle: "FABRICATION",
    image: "/assets/services/pressure.jpg",
  },
]

const capabilities = [
  "Concept, design, detailed engineering, planning, erection, testing and commissioning of Cross Country Underground/Overhead pipe lines of various mediums like iron ore,ash slurry, water, Oil and Gas.",
  "Fabrication Erection and maintenance of heavy structural, high pressure carbon steel/ alloy steel/ stainless steel pipe lines, cryogenic pipelines, boilers, heavy equipment, vessels, towers, motors, pumps, turbines etc for Power Plants Steel Plants, Cement Plant, Stainless Steel Plant etc.",
  "Design, Erection and Comissioning of Fire Fighting System.",
  "Design, Erection and Comissioning of Cross Country conveyor lines.",
]

export default function Expertise() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen font-lora bg-gradient-to-t from-green-500 to to-sky-400 py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-12 inline-flex items-center gap-4">
            USHA&apos;S EXPERTISE
            <motion.span
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-8 h-8 border-t-2 border-r-2 border-amber-800 rounded-full"
            />
          </h1>

          {/* Capabilities List */}
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-md"
              >
                <span className="text-amber-800 text-xl">›</span>
                <p className="text-gray-700">{capability}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-4 text-white"
                  animate={{
                    y: hoveredCard === service.id ? 0 : 10,
                    opacity: hoveredCard === service.id ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  {service.subtitle && <p className="text-sm text-gray-200">{service.subtitle}</p>}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-3xl text-center text-white max-w-3xl mx-auto"
        >
          <p>
            USHA has executed several projects with single point responsibility & focus on Workmanship, Quality and
            completion within the stipulated time.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

