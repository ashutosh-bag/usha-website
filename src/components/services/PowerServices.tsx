"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

import Image from "next/image";

export default function PowerServices() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const pulseVariants: Variants = {
    initial: { opacity: 0.6, scale: 1 },
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 overflow-hidden font-lora bg-gradient-to-t from-green-500 to to-sky-400  dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="power-services-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-12 text-center mb-8 md:mb-12" variants={itemVariants}>
            <h2
              id="power-services-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 dark:text-amber-500 mb-4 tracking-tight"
            >
              POWER SERVICE
            </h2>
            <motion.div className="h-1 bg-amber-600 dark:bg-amber-400 mx-auto w-24 md:w-32" variants={lineVariants} />
          </motion.div>

          <motion.div className="lg:col-span-5 relative" variants={itemVariants}>
            <div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg mx-auto">
              <motion.div variants={pulseVariants} initial="initial" animate="animate" className="absolute inset-0 z-0">
                <Image
                  src="/assets/services/electric.jpg"
                  alt="Power plant infrastructure"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              We provide end-to-end services in power generation, transmission, power distribution solution, and smart grid management solution.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              We provide customized ready-to-deploy solutions for thermal power plants such as total EPC, comprehensive Balance of Plant (BOP).
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              Our strength lies in having skilled resources, robust processes, and exceptional project management capability.
              This allows us to effectively monitor and control every stage of the execution, and deliver the project on time,
              making us the preferred choice for power distribution solutions and smart grid management solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
