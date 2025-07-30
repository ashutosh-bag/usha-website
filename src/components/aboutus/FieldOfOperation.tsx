"use client"

import type React from "react"

import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb"
import Image from "next/image"
import { motion } from "framer-motion"

export default function FieldOfOperation() {
  // Add client-side detection

  return (
    <section className="bg-gradient-to-b from-green-500 to to-sky-400 font-lora text-gray-900">
      {/* Breadcrumb at the Top */}
      <CommonBreadcrumb imageUrl="/assets/operation/9.jpg" />

      <div className="max-w-7xl mx-auto px-6 py-16" >
        <h2 className="text-4xl font-bold text-yellow-600 uppercase text-center mb-8">
          Field of <span className="text-gray-800">Operation</span>
        </h2>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="relative flex justify-center">
            {/* Static Background Image */}
            <Image src="/assets/operation/s-1.png" alt="Field of Operation" width={500} height={500} className="" />
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
              USHA started as a specialist in the field of fabrication and erection of heavy structurals, equipments
              along with raw water, Drinking Water, Fuel Oil, Makeup Water, C.W. pipelines etc. Over the years, we have
              diversified our activities to cross country pipeline, transportation of iron ore, ash, slurry, Water, Gas,
              Oil, Liquid etc.
            </p>
            <p>
              USHA has to their credit a very strong association in the construction of {`world's`} largest and{" "}
              {`India's`} first coal based fertilizer plant at Talcher (ODISHA) and Ramagundam in AP. NTPC Super thermal
              power plant at Kanhia (Talcher), TTPS in Talcher, Ramagundam (AP) and also Rural electrification job in
              nayagarh in the state of odisha. we have also worked for National Aluminum Company Limited in Angul and
              Damanjodi, for Ash handling system , Raw water line and inside piping to name a few in goverment sector.
              In private we have worked fot Tatas, BRPL,VISA, JINDAL STAINLESS STEEL, AArti etc...
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
              boilers, ducts, screw conveyors, rotary feeders, EOT cranes etc, In power sector, we have executed ESP
              works, OFF side Packages of 15000 MT Steel Fab & Erection, Different types of pipe lines, Erection of CHP
              and MGR System etc In chemical plants we have worked for erection of vibrating feeders, crushers,
              agitators, turbines , generators , raw gas compressors(1L cu.m capacity), synthesis gas compressors, air
              compressors, expansion turbines, urea / ammonia reactors, bowl/ball mills, FD/ID fans etc and different
              types of piping like carbon steel, alloy steel and stainless steel ( AISI 304,304L,316,316L,321,347) for
              critical services where creep / corrosion resistance and controlled ferrite content is required, aluminum
              piping for cryogenic services etc.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Iron ore slurry pipeline Erections & Commissioning.</li>
              <li>Planning & feasibility report, Engineering Procurement & Commissioning.</li>
              <li>Fabrication and erection of structures.</li>
              <li>Construction of Cryogenic Plants & Package Units.</li>
              <li>Piping & EPC Projects.</li>
              <li>Heavy Static and Rotary Equipment erection.</li>
              <li>Survey Work, HDD, and Augur Boring.</li>
            </ul>
          </motion.div>

          {/* Right Side - Image with Mouse Sensitivity */}
          
            <motion.div
              className="absolute sm:block hidden -left-10 bottom-0"
             
            >
              <Image
                src="/assets/operation/cranehook.png"
                alt="Floating Valve"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-out"
              />
            </motion.div>
       
        </div>
      </div>
    </section>
  )
}

