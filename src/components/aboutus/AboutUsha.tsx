"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

// Static imports for image optimization
const images = [
  "/assets/aboutusha/pic1.jpg",
 "/assets/aboutusha/pic4.jpg",
  "/assets/aboutusha/pic5.jpg",
  "/assets/aboutusha/pic6.jpg",
  "/assets/aboutusha/pic7.jpg",
];

export default function AboutCompany() {
  return (
    <section className="bg-white py-16 md:py-24">
      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative w-full pt-[56.25%] rounded-xl shadow-2xl overflow-hidden">
          {/* 16:9 Aspect Ratio */}
          <iframe
            src="https://www.youtube.com/embed/Ux5rMoEdGwE"
            title="Nalco LSD Project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8">
        {/* Swiper Image Slider */}
        <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto lg:h-[450px] rounded-xl shadow-xl overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            modules={[Autoplay]}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Company Image ${index + 1}`}
                  fill // Use fill to make image cover the slide
                  className="object-cover" // Ensure image covers the area
                  sizes="(max-width: 768px) 100vw, 50vw" // Optimize image loading based on viewport
                  priority={index === 0} // Prioritize the first image for LCP
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content Section */}
        <div className="w-full font-lora lg:w-1/2" >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            ABOUT COMPANY
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-yellow-600">20</span>
            <div>
              <p className="text-gray-800 text-lg font-semibold">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-2xl">
            <strong className="text-green-700 ">
              USHA PROJECTS (INDIA) PRIVATE LIMITED
            </strong>{" "}
            is one of the leading EPC companies in India for infrastructure
            development, construction, and project management with nearly 4
            decades of experience in the EPC industry.
          </p>
          <p className="text-gray-700 mt-2 text-2xl">
            With established credentials in executing complex projects, Usha
            Projects has repeatedly delivered high-quality work.
          </p>
          <p className="text-gray-700 mt-2 text-2xl">
            The company is ISO 9001-2008 & ISO 14001-2004 certified, committed
            to high standards of {`"Quality Management System"`} and{` "Environmental
            Management System"`}.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-lg hover:bg-yellow-700 transition">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  )
}
