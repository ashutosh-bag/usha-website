"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function OilAndGas() {
  return (
    <section
      className="flex font-lora flex-col items-center justify-end min-h-[60vh] text-center px-4 bg-[url('/assets/services/underconstruction.jpg')] inset-0   bg-cover bg-center"
      aria-labelledby="under-construction-title"
    >
      {/* Animated Icon */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-white text-5xl dark:text-red-500"
      >
        <Wrench size={64} />
      </motion.div>

      {/* Animated Text */}
      <motion.h2
        id="under-construction-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-7xl font-bold text-white  mt-4"
      >
        Coming Soon!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-3xl text-white mt-6 max-w-2xl"
      >
       {` We're working on something exciting for the Oil & Gas section. Stay tuned for updates!`}
      </motion.p>
    </section>
  );
}
