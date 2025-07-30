"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/assets/aboutusha/pic1.jpg",
 "/assets/aboutusha/pic4.jpg",
  "/assets/aboutusha/pic5.jpg",
  "/assets/aboutusha/pic6.jpg",
  "/assets/aboutusha/pic7.jpg",
];

export default function AboutCompany() {

  return (
    <section className="bg-gradient-to-br from-green-500 to to-sky-400 py-10">
      {/* Video Section */}
      <div className="max-w-48xl mx-auto mb-10" >
        <iframe
          width="1140"
          height="641"
          src="https://www.youtube.com/embed/Ux5rMoEdGwE"
          title="Nalco LSD Project"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">
        {/* Swiper Image Slider */}
        <div className="w-full lg:w-1/2" >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            modules={[Autoplay]}
            className="w-full h-auto rounded-lg shadow-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`Company Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto"
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
  );
}
