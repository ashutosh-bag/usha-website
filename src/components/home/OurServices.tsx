"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

const services = [
  {
    id: 1,
    title: "USHA SERVICES",
    img: "/assets/home/usha.jpg",
    description: "Comprehensive solutions tailored to your business needs",
    features: ["Quality Assurance", "24/7 Support", "Expert Team"],
  },
  {
    id: 2,
    title: "CORE SERVICES",
    img: "/assets/home/core.jpg",
    description: "Essential services that form the foundation of excellence",
    features: ["Strategic Planning", "Implementation", "Optimization"],
  },
  {
    id: 3,
    title: "EPC SERVICES",
    img: "/assets/home/epc.jpg",
    description: "Engineering, Procurement, and Construction expertise",
    features: ["Design Engineering", "Procurement", "Construction"],
  },
  {
    id: 4,
    title: "EXPERTISE",
    img: "/assets/home/expertise.jpg",
    description: "Specialized knowledge and technical proficiency",
    features: ["Technical Consulting", "Innovation", "Best Practices"],
  },
  {
    id: 5,
    title: "WATER SERVICES",
    img: "/assets/home/water.jpg",
    description: "Comprehensive water management and treatment solutions",
    features: ["Water Treatment", "Management", "Conservation"],
  },
  {
    id: 6,
    title: "CHP & AHP SERVICES",
    img: "/assets/ahpchs/img19.jpeg",
    description: "Combined Heat and Power & Air Handling solutions",
    features: ["Energy Efficiency", "System Design", "Maintenance"],
  },
  {
    id: 7,
    title: "METALS & MINERAL SERVICES",
    img: "/assets/home/metal.jpg",
    description: "Specialized services for metals and mineral industries",
    features: ["Processing", "Quality Control", "Logistics"],
  },
  {
    id: 8,
    title: "INDUSTRIES",
    img: "/assets/home/usha.jpg",
    description: "Diverse industrial solutions across multiple sectors",
    features: ["Manufacturing", "Automation", "Process Control"],
  },
  {
    id: 9,
    title: "OIL & GAS SERVICES",
    img: "/assets/home/oil.jpg",
    description: "Comprehensive solutions for oil and gas industry",
    features: ["Exploration", "Production", "Refining"],
  },
  {
    id: 10,
    title: "POWER SERVICES",
    img: "/assets/home/power.jpg",
    description: "Advanced power generation and distribution services",
    features: ["Generation", "Distribution", "Maintenance"],
  },
]

export default function OurServices() {
  return (
    <section className="relative py-20 min-h-screen font-lora bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
            <Star className="w-8 h-8 text-white" />
          </div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-blue-300 font-mono uppercase text-lg sm:text-xl font-semibold mb-4 tracking-wider"
          >
            What We Offer
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Provide Quality
            </span>{" "}
            Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Delivering excellence across diverse industries with innovative solutions and unmatched expertise
          </motion.p>

          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Services Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, effect: "slide" },
              1024: { slidesPerView: 3, effect: "slide" },
            }}
            className="services-swiper pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.img || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Premium
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-white text-sm leading-relaxed">{service.description}</p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Experience Excellence?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              {`Let's`} discuss how our services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-300 transition-all duration-300"
              >
                View All Services
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .services-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        }
      `}</style>
    </section>
  )
}
