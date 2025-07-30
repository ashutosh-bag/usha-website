"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Construction() {
  return (
    <section
      className="flex flex-col md:flex-row font-lora items-center justify-between gap-10 px-6 md:px-16 py-12 bg-gradient-to-b from-green-500 to to-sky-400 dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="construction-title"
    >
      {/* Left: Image with Hover Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
      >
        <Image
          src="/assets/construction/construct.jpg" // Replace with your actual image path
          alt="Construction site"
          width={500}
          height={350}
          className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        {/* Heading with Animated Underline */}
        <motion.h2
          id="construction-title"
          className="text-3xl md:text-4xl font-bold text-amber-700 dark:text-amber-500"
        >
          CONSTRUCTION
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-amber-700 dark:bg-amber-500 mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.5 }}
        />

        {/* Description */}
        <p className="text-white dark:text-gray-300 mt-4 text-lg leading-relaxed">
          We specialize in executing civil, electrical, and mechanical projects across multiple
          industries, ensuring top-notch quality and timely delivery. With expertise in infrastructure,
          commercial, and residential construction, we are the **preferred EPC contractor**.
        </p>

        {/* Bullet Points with Slide-in Animation */}
        <ul className="mt-6 space-y-3">
          {[
            "Design Review & Development",
            "Value Engineering",
            "Engineering Calculations",
            "Equipment Selections",
            "Planning & Coordination",
            "Procurement & Inspection",
            "Installation & Project Management",
            "Testing & Commissioning",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 text-white dark:text-gray-300 text-lg"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-3 h-3 bg-amber-700 dark:bg-amber-500 rounded-full"
              />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Closing Statement */}
        <p className="text-white dark:text-gray-300 mt-6 text-lg">
         {` Our commitment to **efficiency, safety, and precision** makes us one of India's top
          construction firms.`}
        </p>
      </motion.div>
    </section>
  );
}
