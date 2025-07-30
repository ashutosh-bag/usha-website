"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"


const services = [
  {
    title: "EPC Projects",
    description:
      "Concept, design, basic engineering, detailed engineering, planning, procurement, erection, testing, commissioning and maintenance on a turnkey basis comprising civil, mechanical, electrical instrumentation and process engineering jobs for cross country under ground pipe lines of various mediums like water, ash slurry.",
    image: "/assets/services/epc.jpg",
  },
  {
    title: "Fabrication and Erection of Equipments",
    description:
      "Equipments like heavy and tall columns and vessels, turbines, turbogenerators, pumps, compressors, motors, boilers, heat exchangers, rotary feeders, Ball/bowl mills, EOT cranes, electro static precipitators, vibrating feeders, crushers, agitators are erected irrespective of their weight.",
    image: "/assets/services/fabrication.jpg",
  },
  {
    title: "Piping",
    description: "Iron Ore Slurry, Ash Handling System, Water, Oil & Gas Pipeline etc.",
    image: "/assets/services/piping.jpg",
  },
  {
    title: "Fabrication and Erection of Structures",
    description:
      "Structures of light, medium and heavy duty fabricated and erected irrespective of their size, shape and weight conforming to National/ International (Standard) Codes or client's requirement.",
    image: "/assets/services/structures.jpg",
  },
  {
    title: "Survey Work",
    description: "Preliminary and detail survey for project planning, road pipeline laying are undertaken.",
    image: "/assets/services/survey.webp",
  },
  {
    title: "HDD and Augur Boring",
    description:
      "For laying of pipelines and other utilities, whenever required, we undertake Horizontal Directional Drilling (HDD) and Augur Boring. To cross railway lines, roads, rivers and obstacles, we have HDD machines and augur machines with our division.",
    image: "/assets/services/hdd.jpg",
  },
]

export default function UshaServices() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    // Autoplay the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section className=" font-lora min-h-screen relative overflow-hidden">
     

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/assets/services/456383_Corridor_Passage_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Services Introduction */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-green-500 relative inline-block">
              USHA SERVICES
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500 transform -skew-x-12"></div>
            </h1>
            <p className="text-cyan-400 leading-relaxed text-xl ">
              USHA provides range of engineering and technical services in fabrication, erection and maintenance of
              heavy structures, high pressure pipe lines, boilers, coal handling, atomic power, heavy equipment,
              vessels, towers, motors, pumps, turbines, fertilizers, Storage Tanks & Process Equipment etc. We started
              our company as a specialist in the field of fabrication and erection of heavy structures and equipments
              along with pipe line jobs.
            </p>
          </div>

          {/* Projects Section */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-16" data-aos="fade-up">
              <span className="text-amber-500">OUR</span> PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

