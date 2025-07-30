"use client"


import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "IOT Anwesha Engineering & Construction Limited",
    description:
      "For various projects in the field of Hydrocarbon, Metal, Refineries, Cement, Steel, and other sectors...",
    logo: "/assets/partner/iot.jpg",
  },
  {
    id: 2,
    name: "Macawber Beekay Pvt Ltd",
    description: "Providing Dry Ash Handling Systems throughout the power industry or solid fuel applications...",
    logo: "/assets/partner/macawber.jpg",
  },
  {
    id: 3,
    name: "T E & C Pvt. Ltd.",
    description:
      "For Consultancy Services for Techno Economic Feasibility Report (TEFR) on Iron Ore Slurry Pipeline & Waterline...",
    logo: "/assets/partner/tec.png",
  },
]

export default function PartnerWithUs() {
  

  // Create a data-aos-like attribute that only works on client
 

  return (
    <section className="bg-gray-900 text-white font-lora">
      {/* Breadcrumb at the top */}
      <CommonBreadcrumb imageUrl="/assets/partner/40.jpg" />

      {/* Section Title */}
      <div className="text-center py-12" >
        <h2 className="text-4xl font-bold uppercase tracking-wide">
          Partner <span className="text-yellow-500">With Us</span>
        </h2>
        <p className="text-lg mt-2 text-gray-400">Trusted by leading industries for quality and innovation.</p>
      </div>

      {/* Partner Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="relative group bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
            
          >
            {/* Card Header with Animated Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            {/* Partner Image */}
            <div className="flex justify-center items-center p-6">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} Logo`}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Partner Details */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-600">{partner.name}</h3>
              <p className="mt-3 text-gray-700">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

