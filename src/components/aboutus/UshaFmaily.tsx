"use client"

import { useState } from "react"
import Image from "next/image"
import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb"

// Sample team data - replace with your actual team members
const teamMembers = [
  {
    id: 1,
   
    image: "/assets/ushafamily/usha.png",
  },
  {
    id: 2,
   
    image: "/assets/ushafamily/shaji.png",
  },
  {
    id: 3,
    
    image: "/assets/ushafamily/ranjan.png",
  },
  {
    id: 4,
    
    image: "/assets/ushafamily/ashok.png",
  },
  {
    id: 5,
    
    image: "/assets/ushafamily/Shuvendu.png",
  },
  {
    id: 6,
    
    image: "/assets/ushafamily/kp.png",
  },
]

export default function UshaFamily() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <div className="min-h-screen font-lora bg-gradient-to-b from-green-500 to to-sky-400">
      <CommonBreadcrumb imageUrl="/assets/ushafamily/26.jpg" />

      {/* Team Section */}
      <section className="py-16 px-4 h-screen relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 w-96 h-96 rounded-full bg-red-600/40" />
          <div className="absolute -right-40 bottom-0 w-96 h-96 rounded-full bg-orange-600/40" />
        </div>

        <div className="container mx-auto max-w-7xl relative">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-down">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              meet <br />
              <span className="text-green-800">OUR FAMILY</span>
            </h1>
          </div>

          {/* Team Members Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-16 items-center justify-items-center">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`relative group cursor-pointer transition-all duration-500 ease-in-out
                    ${activeId === member.id ? "z-10 scale-125" : "z-0 scale-100"}
                    ${activeId !== null && activeId !== member.id ? "opacity-50" : "opacity-100"}`}
                  onMouseEnter={() => setActiveId(member.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  {/* Image Container */}
                  <div className="relative w-64 h-96 overflow-hidden rounded-lg shadow-xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt='place'
                      fill
                      className="object-fit transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    {/* Green Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Member Info */}
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

