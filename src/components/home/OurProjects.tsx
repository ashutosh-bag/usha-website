"use client"
import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"

export default function OurProjects() {
  const [counters, setCounters] = useState({
    experts: 0,
    clients: 0,
    projects: 0,
  })

  const [percentages, setPercentages] = useState({
    design: 0,
    execution: 0,
    pipelines: 0,
    fabrication: 0,
    commissioning: 0,
  })

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const animateCounters = useCallback(() => {
    if (isVisible) return // Prevent multiple animations

    const targets = { experts: 119, clients: 316, projects: 366 }
    const percentTargets = { design: 91, execution: 89, pipelines: 92, fabrication: 100, commissioning: 98 }

    // Animate counters
    Object.entries(targets).forEach(([key, target]) => {
      let current = 0
      const increment = target / 60 // 60 frames for smooth animation
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, 33) // ~30fps
    })

    // Animate percentages with stagger
    Object.entries(percentTargets).forEach(([key, target], index) => {
      setTimeout(() => {
        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setPercentages((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }, 40)
      }, index * 200) // Staggered animation
    })

    setIsVisible(true)
  }, [isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [animateCounters, isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-ping delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 font-lora gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8 transform transition-all duration-1000 hover:scale-105">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              OUR PROJECTS
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Our experience encompasses the entire range of cryogenic containment options, configurations, and
              metallurgies. We provide complete Cryogenic Storage System Solutions.
            </p>
          </div>

          {/* Enhanced Image Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <Image
                src="/assets/home/water.jpg"
                alt="Industrial Project"
                width={500}
                height={400}
                className="w-full rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Middle Section - Enhanced Stats Cards */}
        <div className="space-y-6">
          {[
            { label: "Active Experts", count: counters.experts, icon: "👥", color: "from-yellow-400 to-orange-500" },
            { label: "Satisfied Clients", count: counters.clients, icon: "🤝", color: "from-green-400 to-blue-500" },
            { label: "Projects Complete", count: counters.projects, icon: "🏗️", color: "from-purple-400 to-pink-500" },
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden" style={{ animationDelay: `${index * 200}ms` }}>
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${item.color.split(" ")[1]}, ${item.color.split(" ")[3]})`,
                }}
              ></div>

              <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl">
                <div className="text-4xl mb-4 animate-bounce">{item.icon}</div>
                <h3
                  className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2 transition-all duration-300`}
                >
                  {item.count}
                </h3>
                <p className="text-gray-200 font-semibold text-lg">{item.label}</p>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-border animate-spin-slow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Enhanced Progress Bars */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Our Expertise</h3>
          {[
            { label: "Design & Engineering", percent: percentages.design, color: "from-yellow-400 to-orange-500" },
            { label: "Execution", percent: percentages.execution, color: "from-green-400 to-blue-500" },
            { label: "Green Field Pipelines", percent: percentages.pipelines, color: "from-blue-400 to-purple-500" },
            { label: "Structural Fabrication", percent: percentages.fabrication, color: "from-purple-400 to-pink-500" },
            { label: "Commissioning", percent: percentages.commissioning, color: "from-pink-400 to-red-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="group space-y-3 transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </p>
                <div className="flex items-center space-x-2">
                  <span className={`font-bold text-xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.percent}%
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-700/50 h-4 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-2000 ease-out relative overflow-hidden`}
                    style={{ width: `${item.percent}%` }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine"></div>
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute top-0 h-4 bg-gradient-to-r ${item.color} rounded-full blur-sm opacity-50 transition-all duration-2000 ease-out`}
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
