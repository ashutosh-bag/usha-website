"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper"; // ✅ Correct Type Import
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
      id: 1,
      name: "Partha S. Ghose",
      designation: "Director (Projects), Jindal Stainless Limited",
      image: "/assets/home/parthasghose.jpg",
      feedback:
        "Usha Projects’ Construction team demonstrated a high level of knowledge and analytical skills to add substantial value to JINDAL STAINLESS Integrated Stainless Steel Project while assessing and optimizing the complex cross-country Raw water pipeline package, the lifeline for Jindal Stainless' upcoming steel and power plants.Smart and disciplined execution of construction by a highly deft workforce and management team helped us make sound decisions in optimizing the work concerning time, cost, and stakeholder management while minimizing the project risks for this complicated work.Usha Projects' capability of on-time delivery to meet deadlines and demonstrate good workmanship in the space of construction project management was recognized and appreciated by JINDAL STAINLESS.We were extremely satisfied with the performance of this construction company and wish them prosperity and success in their future endeavors.",
      rating: 5,
    },
    {
      id: 2,
      name: "Manoj Kumar",
      designation: "Director, Visa Steel",
      image: "/assets/home/manojkumar.jpg",
      feedback:
        "Usha Projects was originally interviewed by our Corporate Office in Kolkata and although not selected, the Usha Projects team not only impressed us but also the owners of the company so much that we decided after that interview that Usha Projects should be included on our very short list of contractors to handle our projects throughout our service area in Odisha.We have awarded a most challenging project of a Raw water pipeline, which passes through vulnerable hostile tribal areas & villages, but Usha Projects not only completed the project but also did the job with Quality & in time.Since then, Usha Projects has progressed to a much larger turnkey/design EPC Company. Usha Projects has been a pleasure to work with. Their attention to detail and continuous improvement for quality and cost control to the owner is very much appreciated. We look forward to many more successful projects with the Usha Projects team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Karan Gupta",
      designation: "Director, MBPL",
      image: "/assets/home/karangupta.jpg",
      feedback:
        "This project defined the word, “Joint Venture,” as the team consistently worked together – Owner, Architect, and Contractor – to arrive at the best solution for the sake of the project. Led by Usha Projects, the strive for excellence and hard work pushed the project team and resulted in a high-quality project, ahead of schedule and below budget.",
      rating: 4,
    },
    {
      id: 4,
      name: "Shakti Pattnaik",
      designation: "Head – Geology at TATA Power",
      image: "/assets/home/shaktipattnaik.jpg",
      feedback:
        "Usha Projects has consistently delivered results over and beyond what they committed to during the negotiation phase. Their ability to exceed expectations is remarkable, and their level of professionalism is impressive. After a long and detailed selection process, it’s clear that we have partnered with the right company for our project.",
      rating: 4,
    },
    {
      id: 5,
      name: "Miland Acharya",
      designation: "G.M. JSL",
      image: "/assets/home/pic4.jpg",
      feedback:
        "I had worked with Usha Projects on 600 mm diameter and 500 mm diameter Raw Water pipe line work for JSL Ltd in Kaling Nagar, Jajpur Road, Odisha. In spite of hurdles, Usha Projects has completed the job in time with quality. Usha Projects is responsive to clients’ requirements and gives results with quality. Usha Projects is very reliable and trustworthy. I wish them success in his future endeavors.",
      rating: 4,
    },
    {
      id: 6,
      name: "Mickhel Solly",
      designation: "Chairman",
      image: "/assets/home/pic4.jpg",
      feedback:
      "From the beginning of our relationship with Usha Projects, their employees, from senior management to the guys in the field, have performed with timeliness and quality. Even in the proposal process, when we asked for dates, times, numbers, photos, and all the rest, they were provided on schedule and were of tip-top quality. Our project with them has called for some intense budget scrutiny, and Usha Projects has been our partner in that effort. It is always a pleasure to be able to endorse or recommend a firm that provides a solid performance, consistent communication as well as being a joy to work with. In the case of Usha Projects, all three apply.",
      rating: 4,
    },
    {
      id: 7,
      name: "Ratnakar Dash",
      designation: "Director BRPL (Stemcor Group)",
      image: "/assets/home/ratnakardash.jpg",
      feedback:
        "Usha Projects positively exceeded our outlook with the work awarded to them for laying of pipe line for transportation of Iron ore slurry job for our TANTO pelletisation plant to Bhramani River pellets (STEM COR) group in Jajpur, Orissa. We at BRPL knew that this job is a challenging one. On execution, this has turned into a complicated project consisting of a number of tribal belts, villages, road crossings, culverts, railways (by HDD pushing), rivers, canals, roads, irrigation cutting of mountains, forest tree chopping for making way for the pipeline, and many more hurdles which can’t be described in words.However, with unique conditions and for a client with very high expectations, despite the obstacles to overcome, your teams rose to the occasion, went above and beyond in rectifying and solving problems, and were dedicated to the project’s success. We at BRPL, the pipeline team, are impressed by Usha management’s quick response and professionalism displayed. We appreciate that you took up the job like your own.I thank you for your diligence in getting the job done and helping to complete the project on time. I thank you for your clean and orderly job site. I thank you for your friendly understanding. There have been nothing but positive reviews from our MD and senior management alike. That is great customer service, and that is what I’ve come to expect from Usha Projects.We will certainly recommend your services to anyone we know considering to put a slurry transportation. Once again, congratulations on setting the bar high!",
      rating: 4,
    },
  ];
  

  export default function ClientTestimonials() {
    useEffect(() => {
      AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);
  
    const swiperRef = useRef<SwiperClass | null>(null); // ✅ Corrected Type
  
    return (
      <div className="relative font-lora py-16 px-4 bg-[url('/assets/clients/bg4.jpg')] inset-0 bg-cover bg-center">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800">
            OUR CLIENTS <span className="text-blue-600">TESTIMONIAL</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>
  
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Store Swiper instance
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className="shadow-lg rounded-lg p-6 text-center relative"
                  data-aos="fade-up"
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()} // ✅ Stop autoplay on hover
                  onMouseLeave={() => swiperRef.current?.autoplay.start()} // ✅ Resume autoplay on leave
                >
                  {/* Profile Image */}
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-white overflow-hidden shadow-md mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
  
                  {/* Client Name */}
                  <h3 className="text-2xl font-semibold text-rose-800 mt-2">
                    {testimonial.name}
                  </h3>
  
                  {/* Client Designation */}
                  <p className="text-xl text-pink-500">{testimonial.designation}</p>
  
                  {/* Feedback */}
                  <p className="text-black text-lg mt-3">{testimonial.feedback}</p>
  
                  {/* Star Rating */}
                  <div className="mt-4 flex justify-center">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }