"use client"
import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HsePolicy() {
  return (
    <section className="bg-gradient-to-b from-green-500 to to-sky-400 font-lora text-gray-900">
      {/* Breadcrumb at the Top */}
      <CommonBreadcrumb imageUrl="/assets/hsepolicy/11.jpg" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-yellow-600 uppercase text-center mb-8">
          HSE<span className="text-gray-800"> POLICY</span>
        </h2>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="relative flex justify-center">
            {/* Static Background Image */}
            <Image
              src="/assets/operation/s-1.png"
              alt="hse policy"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <motion.div
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              USHA provides a wide range of engineering, technical services in fabrication and erection, maintenance of
              heavy structures, high pressure pipe lines, boilers, coal handling System, heavy equipment, vessels,
              towers, motors, pumps & turbines etc.
            </p>
            <p>
              USHA started as a specialist in the field of fabrication and erection of heavy structure and equipments
              along with pipelines. Over the years, we have diversified our activities to cross country pipeline
              transportation of iron ore, ash, and slurry .
            </p>
            <p>
              USHA has to their credit to have a very strong association in the construction of {`world's `}largest and{" "}
              {`India's`} first coal based fertilizer plant at Talcher, Orissa, Super thermal power plant at Kanhia
              Orissa, and National Aluminum Company Limited at Angul and Damanjodi, Orissa.
            </p>
            <p>
              In addition, USHA has to its credit to have erected the water supply pipelines from rivers to plant
              reservoirs in record time to meet the stringent time schedule of commissioning the plants of Jindal
              stainless Limited, VISA Steel Limited, Aarti Steel Limited, Kanhia Super Thermal Power Plant(NTPC) etc, to
              name a few.
            </p>
            <p>
              USHA was also associated in Bailadila Iron Ore Project (NMDC) in erecting their crushing plant and
              responsible for erection of heavy structurals, chutes, bunkers, tanks, tall towers, vessels, motors,
              boilers, ducts, screw conveyors, rotary feeders, EOT cranes, electro static precipitators, vibrating
              feeders, crushers, agitators, turbines , generators , raw gas compressors(1L cu.m capacity), synthesis gas
              compressors, air compressors, expansion turbines, urea / ammonia reactors, bowl/ball mills, FD/ID fans etc
              and different types of piping like carbon steel, alloy steel and stainless steel ( AISI
              304,304L,316,316L,321,347) for critical services where creep / corrosion resistance and controlled ferrite
              content is required, aluminum piping for cryogenic services etc.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Fabrication and erection of structure.</li>
              <li>Complete construction works of Cryogenic Plants & Package Units</li>
              <li>Piping.</li>
              <li>CPC Projects.</li>
              <li>Erection of Heavy Static and Rotary Equipments</li>
              <li>Survey Work .</li>
              <li>Fabrication & Erection of Plant Piping & Technological Structures</li>
              <li>HDD and Augur Boring</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

