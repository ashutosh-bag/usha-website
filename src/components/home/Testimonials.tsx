"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { motion, useInView } from "framer-motion" // AnimatePresence is not needed for this specific logic
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause, ChevronDown, ChevronUp } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import type { Swiper as SwiperType } from "swiper"

const testimonials = [
  {
    id: 1,
    name: "Partha S. Ghose",
    designation: "Director (Projects)",
    company: "Jindal Stainless Limited",
    image: "/assets/home/parthasghose.jpg",
    feedback:
      "Usha Projects' Construction team demonstrated a high level of knowledge and analytical skills to add substantial value to JINDAL STAINLESS Integrated Stainless Steel Project while assessing and optimizing the complex cross-country Raw water pipeline package, the lifeline for Jindal Stainless' upcoming steel and power plants.Smart and disciplined execution of construction by a highly deft workforce and management team helped us make sound decisions in optimizing the work concerning time, cost, and stakeholder management while minimizing the project risks for this complicated work.Usha Projects' capability of on-time delivery to meet deadlines and demonstrate good workmanship in the space of construction project management was recognized and appreciated by JINDAL STAINLESS.We were extremely satisfied with the performance of this construction company and wish them prosperity and success in their future endeavors.",
    rating: 5,
  },
  {
    id: 2,
    name: "Manoj Kumar",
    designation: "Director",
    company: "Visa Steel",
    image: "/assets/home/manojkumar.jpg",
    feedback:
      "Usha Projects was originally interviewed by our Corporate Office in Kolkata and although not selected, the Usha Projects team not only impressed us but also the owners of the company so much that we decided after that interview that Usha Projects should be included on our very short list of contractors to handle our projects throughout our service area in Odisha.We have awarded a most challenging project of a Raw water pipeline, which passes through vulnerable hostile tribal areas & villages, but Usha Projects not only completed the project but also did the job with Quality & in time.Since then, Usha Projects has progressed to a much larger turnkey/design EPC Company. Usha Projects has been a pleasure to work with. Their attention to detail and continuous improvement for quality and cost control to the owner is very much appreciated. We look forward to many more successful projects with the Usha Projects team.",
    rating: 5,
  },
  {
    id: 3,
    name: "Karan Gupta",
    designation: "Director",
    company: "MBPL",
    image: "/assets/home/karangupta.jpg",
    feedback:
      'This project defined the word, "Joint Venture," as the team consistently worked together – Owner, Architect, and Contractor – to arrive at the best solution for the sake of the project. Led by Usha Projects, the strive for excellence and hard work pushed the project team and resulted in a high-quality project, ahead of schedule and below budget.',
    rating: 4,
  },
  {
    id: 4,
    name: "Shakti Pattnaik",
    designation: "Head – Geology",
    company: "TATA Power",
    image: "/assets/home/shaktipattnaik.jpg",
    feedback:
      "Usha Projects has consistently delivered results over and beyond what they committed to during the negotiation phase. Their ability to exceed expectations is remarkable, and their level of professionalism is impressive. After a long and detailed selection process, it's clear that we have partnered with the right company for our project.",
    rating: 4,
  },
  {
    id: 5,
    name: "Miland Acharya",
    designation: "G.M.",
    company: "JSL",
    image: "/assets/home/pic4.jpg",
    feedback:
      "I had worked with Usha Projects on 600 mm diameter and 500 mm diameter Raw Water pipe line work for JSL Ltd in Kaling Nagar, Jajpur Road, Odisha. In spite of hurdles, Usha Projects has completed the job in time with quality. Usha Projects is responsive to clients' requirements and gives results with quality. Usha Projects is very reliable and trustworthy. I wish them success in his future endeavors.",
    rating: 4,
  },
  {
    id: 6,
    name: "Mickhel Solly",
    designation: "Chairman",
    company: "",
    image: "/assets/home/pic4.jpg",
    feedback:
      "From the beginning of our relationship with Usha Projects, their employees, from senior management to the guys in the field, have performed with timeliness and quality. Even in the proposal process, when we asked for dates, times, numbers, photos, and all the rest, they were provided on schedule and were of tip-top quality. Our project with them has called for some intense budget scrutiny, and Usha Projects has been our partner in that effort. It is always a pleasure to be able to endorse or recommend a firm that provides a solid performance, consistent communication as well as being a joy to work with. In the case of Usha Projects, all three apply.",
    rating: 4,
  },
  {
    id: 7,
    name: "Ratnakar Dash",
    designation: "Director",
    company: "BRPL (Stemcor Group)",
    image: "/assets/home/ratnakardash.jpg",
    feedback:
      "Usha Projects positively exceeded our outlook with the work awarded to them for laying of pipe line for transportation of Iron ore slurry job for our TANTO pelletisation plant to Bhramani River pellets (STEM COR) group in Jajpur, Orissa. We at BRPL knew that this job is a challenging one. On execution, this has turned into a complicated project consisting of a number of tribal belts, villages, road crossings, culverts, railways (by HDD pushing), rivers, canals, roads, irrigation cutting of mountains, forest tree chopping for making way for the pipeline, and many more hurdles which can't be described in words.However, with unique conditions and for a client with very high expectations, despite the obstacles to overcome, your teams rose to the occasion, went above and beyond in rectifying and solving problems, and were dedicated to the project's success. We at BRPL, the pipeline team, are impressed by Usha management's quick response and professionalism displayed. We appreciate that you took up the job like your own.I thank you for your diligence in getting the job done and helping to complete the project on time. I thank you for your clean and orderly job site. I thank you for your friendly understanding. There have been nothing but positive reviews from our MD and senior management alike. That is great customer service, and that is what I've come to expect from Usha Projects.We will certainly recommend your services to anyone we know considering to put a slurry transportation. Once again, congratulations on setting the bar high!",
    rating: 4,
  },
]

// Helper function to get preview text
const getPreviewText = (text: string, maxLength = 250) => {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength) + "..."
}

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [, setActiveIndex] = useState(0)
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop()
      } else {
        swiperRef.current.autoplay.start()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleExpanded = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div
      ref={containerRef}
      className="relative font-lora bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6 shadow-lg">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Client{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover what industry leaders say about our commitment to excellence, innovation, and delivering results
            that exceed expectations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
        </motion.div>
        {/* Main Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".testimonial-button-next",
              prevEl: ".testimonial-button-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 hover:border-blue-200/50 overflow-hidden h-full"
                >
                  {/* Header with Quote Icon */}
                  <div className="relative p-8 pb-6">
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    {/* Client Profile */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-gradient-to-r from-blue-500 to-green-500 p-0.5">
                          <div className="w-full h-full bg-white rounded-full p-1">
                            <Image
                              src={
                                testimonial.image ||
                                `/placeholder.svg?height=64&width=64&text=${
                                  testimonial.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("") || "/placeholder.svg"
                                }`
                              }
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = `/placeholder.svg?height=64&width=64&text=${testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}`
                              }}
                            />
                          </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">{testimonial.designation}</p>
                        {testimonial.company && (
                          <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                        )}
                      </div>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-6">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({testimonial.rating}.0)</span>
                    </div>
                    {/* Testimonial Content */}
                    <div className="relative">
                      <blockquote className="text-gray-700 leading-relaxed text-base mb-4">
                        {expandedCards[testimonial.id] ? testimonial.feedback : getPreviewText(testimonial.feedback)}
                      </blockquote>
                      {/* Expand/Collapse Button */}
                      {testimonial.feedback.length > 200 && (
                        <motion.button
                          onClick={() => toggleExpanded(testimonial.id)}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{expandedCards[testimonial.id] ? "Read Less" : "Read More"}</span>
                          {expandedCards[testimonial.id] ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </motion.button>
                      )}
                    </div>
                  </div>
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button className="testimonial-button-prev w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={toggleAutoplay}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <button className="testimonial-button-next w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Industry Partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Custom Styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(59, 130, 246, 0.3);
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #3b82f6, #10b981);
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}
