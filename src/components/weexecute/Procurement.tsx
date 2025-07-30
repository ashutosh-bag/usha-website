"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Procurement() {
  return (
    <section
      className="flex flex-col md:flex-row items-center font-lora justify-between gap-10 px-6 md:px-16 py-12 bg-[url('/assets/procurement/bg.jpg')] bg-cover bg-center dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="procurement-title"
    >
      {/* Left: Image with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
      >
        <Image
          src="/assets/procurement/procure.jpg"
          alt="Procurement process"
          width={500}
          height={350}
          className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <motion.h2
          id="procurement-title"
          className="text-3xl md:text-4xl font-bold text-amber-700 dark:text-amber-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PROCUREMENT
        </motion.h2>

        <motion.div
          className="w-16 h-1 bg-amber-700 dark:bg-amber-500 mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <p className="text-black dark:text-gray-300 mt-4 text-lg leading-relaxed">
          We provide holistic technology driven procurement management services to our clients by leveraging our decade long relationships and large vendor base. Our timely procurement of materials and equipment combined with the highest standards of quality meet project schedule and cost requirements. With a highly skilled procurement and operations management team, we follow an effective procurement process that ensures projects are completed without delay and follow the set project plan.
        </p>

        <ul className="mt-6 space-y-3">
          {[
            "Strategic Vendor Management",
            "Cost-effective Procurement",
            "Risk Mitigation Strategies",
            "Quality Assurance & Compliance",
            "End-to-End Logistics Support",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 text-black dark:text-gray-300 text-lg"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-3 h-3 bg-amber-700 dark:bg-amber-500 rounded-full"
              />
              {item}
            </motion.li>
          ))}
        </ul>

        <p className="text-black dark:text-gray-300 mt-2 text-lg">
          We are a top EPC company because of our adherence to global standards. At the end of the project completion, a final settlement is made with contractors. Our reliable reputation of an EPC company results in the best procurement offers in the market.
        </p>
      </motion.div>
    </section>
  );
}
