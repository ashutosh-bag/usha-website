"use client"
import Image from "next/image"
import {  Users, Calendar, MapPin } from "lucide-react"

export default function ProjectInProgress() {
  const projects = [
    {
      id: 1,
      title: "NALCO",
      image: "/assets/projectinprogress/nalco.jpg",
      description:
        "We are Executing this work(Ash Handling System) on an EPC Mode. The contract Value worth Rs. 1273 million for design engineering, fabrication, erection, testing and commissioning of Ash Slurry pipeline 195 KM from CPP NALCO Angul to mines void area.",
      
      location: "Angul, Odisha",
    },
    {
      id: 2,
      title: "TATA Steel Limited",
      image: "/assets/projectinprogress/4.jpg",
      description:
        "It is a Cross Country 1400 mm Dia Pipe Line from River to Inside Plant.",
     
      location: "Nayagarh, Odisha",
    },
    {
      id: 3,
      title: "NTPC Limited",
      image: "/assets/projectinprogress/22.jpg",
      description:
        "We are Executing the rural electrification Project for Nayagarh in Odisha. The Value of the Job worth 970 Million, On a back to back basis.",
      
      location: "Nayagarh, Odisha",
    },
  ]

  return (
    <div className="min-h-screen font-lora bg-gradient-to-t from-green-500 to-sky-400"> 
      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Current Projects
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">OUR PROJECTS - IN - PROGRESS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white drop-shadow-lg">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="font-semibold text-lg">{project.title}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-2/3 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{project.title}</h3>
                    
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>

                
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  )
}
           