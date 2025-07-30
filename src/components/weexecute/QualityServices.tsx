"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QualityService() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-16 bg-[url('/assets/qualityservice/quality.jpg')] bg-cover bg-center font-lora relative overflow-hidden"
      aria-labelledby="quality-service-title"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Left: Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/assets/qualityservice/bg.jpg"
          alt="Quality Service"
          width={400}
          height={300}
          className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Right: Animated Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:w-1/2 text-white mt-10 md:mt-0"
      >
        {/* Heading */}
        <motion.h2
          id="quality-service-title"
          className="text-4xl md:text-5xl font-bold text-amber-500"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          QUALITY SERVICE
        </motion.h2>

        {/* Underline Animation */}
        <motion.div
          className="h-1 bg-amber-500 mt-2 mb-4"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Description */}
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          With all <strong>India Operations</strong> & a few <strong>International Operations</strong>,
          spanning various states & countries across continents, we deliver comprehensive inspection,
          certification, and training services for industrial and infrastructure sectors encompassing
          <strong> power, metals, minerals</strong>, and more.
        </motion.p>

        {/* Animated Feature List */}
        <motion.ul
          className="mt-6 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            "ISO 9001 Certification Safety Audits",
            "Customized Second-Party Audits",
            "Comprehensive Inspection Services",
            "Industry-Specific Training Services",
            "Enhanced Quality Management Standards",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-3 text-lg"
            >
              <motion.span
                className="w-3 h-3 bg-amber-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Closing */}
        <motion.p
          className="mt-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We are <strong>raising the bar for quality</strong> by ensuring top-tier training services for
          the <strong>industrial and infrastructure sectors</strong>.
        </motion.p>
      </motion.div>
    </section>
  );
}
