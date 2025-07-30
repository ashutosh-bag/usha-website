"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const clientLogos = [
   "/assets/home/nalco.jpg",
  "/assets/home/indianoil.jpg",
  "/assets/home/iot.jpg",
  "/assets/home/jsl.jpg",
  "/assets/home/brpl.jpg",
  "/assets/home/tata.jpg",
  "/assets/home/ntpc.jpg",
  "/assets/home/visa.jpg",
  "/assets/home/wabag.jpg",
  "/assets/home/l&t.jpg",
  "/assets/home/lloyd.jpg",
  "/assets/home/anwesha.jpg",
  "/assets/home/bhel.jpg",
  "/assets/home/nmdc.jpg",
  "/assets/home/mcl.jpg",
  "/assets/home/aarti.png",
]

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "15+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
]

export default function OurClients() {
  return (
    <section className="relative font-lora bg-gradient-to-br from-slate-50 via-purple-500 to-indigo-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">OUR</span>{" "}
            <span className="relative">
              CLIENTS
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide. {`We've`} partnered with innovative companies to deliver exceptional
            solutions that drive growth and success.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="relative">
          <div className="absolute inset-0  z-10 pointer-events-none"></div>

          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 20 },
              640: { slidesPerView: 4, spaceBetween: 25 },
              768: { slidesPerView: 5, spaceBetween: 30 },
              1024: { slidesPerView: 6, spaceBetween: 35 },
              1280: { slidesPerView: 7, spaceBetween: 40 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay]}
            className="w-full py-8"
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="group relative">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-white/30 group-hover:scale-110 group-hover:bg-white">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`Client ${index + 1}`}
                      width={120}
                      height={60}
                      className="object-contain  transition-all duration-300  group-hover:opacity-100"
                    />
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              {`Let's`} discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
