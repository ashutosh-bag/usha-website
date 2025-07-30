"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Engineering() {
  return (
    <section
      className="flex flex-col md:flex-row font-lora items-center justify-center gap-8 px-6 md:px-16 py-12 bg-gradient-to-t from-green-500 to to-sky-400 dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="engineering-title"
    >
      {/* Left: Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
      >
        <Image
          src="/assets/weexecute/eng.jpg" // Replace with your actual image path
          alt="Engineering and Construction"
          width={500}
          height={350}
          className="w-full h-[50rem] rounded-lg transition-transform duration-300 hover:scale-105"
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
          id="engineering-title"
          className="text-3xl md:text-4xl font-bold text-amber-700 dark:text-amber-500"
        >
          ENGINEERING
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-amber-700 dark:bg-amber-500 mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.5 }}
        />

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-2xl leading-relaxed">
          Building Information Modelling (BIM) helps us create smart environments that care for people.
          With a team of experienced engineers, we provide top-notch solutions for industrial and
          infrastructure projects. Our expertise ensures **high-quality, cost-effective, and time-bound
          execution**.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-3 text-2xl">
        {`With four decades of EPC experience, we leverage **cutting-edge technologies like BIM** to
        modernize India's industrial landscape.`}
        </p>
      </motion.div>
    </section>
  );
}
