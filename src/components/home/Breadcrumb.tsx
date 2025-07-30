"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    image: "/placeholder.svg?height=800&width=1200",
    quote: "Innovation in every project we deliver!",
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    quote: "Building the future with passion and precision!",
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    quote: "Where excellence meets engineering!",
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    quote: "Turning visions into reality, one project at a time!",
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    quote: "Crafting excellence with every step!",
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    quote: "We Are Changing The World With Time & Technology",
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
  },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [particlePositions, setParticlePositions] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    // Generate initial particle positions only on the client
    if (typeof window !== "undefined") {
      const newPositions = Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
      setParticlePositions(newPositions)
    }
  }, []) // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length)
      setProgress(0)
    }, 5000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isPlaying])

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    setProgress(0)
  }

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[800px] overflow-hidden bg-black group">
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-20"></div>
      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-10">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            initial={{ x: pos.x, y: pos.y }} // Use the initial random position
            animate={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
      {/* Main Content Container */}
      <div className="relative z-30 h-full flex items-center">
        {/* Animated Quote (Positioned Left Center) */}
        <div className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 text-left max-w-4xl">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-teal-400 to-yellow-400 mb-6 rounded-full"
            />
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                className="text-teal-400 text-xl font-lora logoWarper_two sm:text-3xl md:text-7xl font-bold uppercase leading-relaxed drop-shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {slides[index].quote.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -30, scale: 0.8, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    transition={{
                      delay: i * 0.03,
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                    }}
                    className="inline-block"
                    style={{
                      textShadow: "0 0 20px rgba(45, 212, 191, 0.5)",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>
            </AnimatePresence>
            {/* Subtitle Animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-white/80 text-sm sm:text-lg md:text-xl mt-4 font-light tracking-wide"
            >
              Professional Excellence • Innovation • Quality
            </motion.p>
          </motion.div>
        </div>
      </div>
      {/* Image Slider with Enhanced Animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={slides[index].animation.initial}
          animate={slides[index].animation.animate}
          exit={slides[index].animation.exit}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "tween",
          }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={slides[index].image || "/placeholder.svg"}
              alt="Slider Image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Image Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-yellow-900/20 mix-blend-overlay"></div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation Controls */}
      <div className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(45, 212, 191, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-teal-400 transition-colors duration-300 border border-white/30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(45, 212, 191, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-teal-400 transition-colors duration-300 border border-white/30"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15"
                />
              </svg>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(45, 212, 191, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-teal-400 transition-colors duration-300 border border-white/30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
      {/* Enhanced Navigation Dots with Progress */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                i === index
                  ? "bg-gradient-to-r from-teal-400 to-yellow-400 scale-125 shadow-lg shadow-teal-400/50"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => {
                setIndex(i)
                setProgress(0)
              }}
            >
              {i === index && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-teal-400"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.button>
          ))}
        </div>
        {/* Progress Bar */}
        <div className="mt-4 w-full max-w-xs mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-40 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
        <span className="text-white font-mono text-sm">
          <span className="text-teal-400 font-bold">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-white/60 mx-2">/</span>
          <span className="text-white/80">{String(slides.length).padStart(2, "0")}</span>
        </span>
      </div>
    </div>
  )
}
