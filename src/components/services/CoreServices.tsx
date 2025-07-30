"use client";

import React from "react";
import Image from "next/image";
import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb";

export default function CoreServices() {
  return (
    <div className="relative">
      {/* Breadcrumb Section */}
      <CommonBreadcrumb imageUrl="/assets/services/14.jpg" />

      {/* Background Section */}
     

      {/* Main Content */}
      <section className="relative font-lora z-10 py-16 px-6 md:px-12 lg:px-24 bg-[url('/assets/services/9344.jpg')] inset-0   bg-cover bg-center">
    
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
       
          {/* Left: Image with Hover Zoom Effect */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/assets/services/pipeline.jpg"
              alt="Pipeline Construction"
              width={500}
              height={400}
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Right: Content */}
          <div className="rounded-md shadow-lg shadow-slate-50 p-5">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 relative before:left-0">
              CORE SERVICES
            </h2>
            <p className="text-lg text-white font-semibold mt-4 leading-relaxed">
              <span className="text-white  ">
              Steel & Power, Petro Chemical, cement,Iron ore Slurry in Pipeline Mode, Ash Handling System, Green Field pipelines for Oil, Water & Gas etc.
              </span>
              <br />
              USHA has to their credit the strong associations in the constructions of {`world’s`} largest and {`India’s`} first coal based fertilizer plant at Talcher, Super thermal power plant at Kanhia, Heavy Water Talcher, Mahanadi Cold Field Limited and National Aluminum Company Limited, Angul & Damanjodi in Orissa to name a few.

            </p>
            <p className="mt-3 font-semibold text-white">
            In addition to the above USHA has its credit of erecting water supply pipelines from rivers to plant reservoirs in record time to meet the time schedule of commissioning the plants of Jindal stainless Limited, VISA Steel Limited, Aarti Steel Limited, Kanhia Super Thermal Power Plant(NTPC) etc. to name a few.
            </p>
            <p className="mt-3 font-semibold  text-white">
            USHA was also associated in Bailadila Iron Ore Project (NMDC) in erecting their crushing plant and responsible for erection of heavy structural , chutes, bunkers, tanks, tall towers, vassals, turbines , generators , raw gas compressors(1L cu.m capacity), synthesis gas compressors, air compressors, expansion turbines, urea / ammonia reactors, bowl/ball mills, FD/ID fans etc and different types of piping like carbon steel ,alloy steel, stainless steel ( AISI 304,304L,316,316L,321,347) aluminum piping for cryogenic services etc.

            </p>
            {/* Quality Services */}
            <h3 className="mt-8 text-4xl font-semibold text-yellow-400 uppercase">
              Quality Services:
            </h3>
            <p className="text-white font-semibold mt-2">
            Usha Projects offers inspection services in power, oil & gas, petrochemical, and wind-mill sectors. This unit is also engaged in monitoring the quality of in-house procurements and construction activities, safety, health & environment at project sites.
            </p >
            <p className="text-white font-semibold mt-2">Team work of quality professionals with specialization in NDT, rotating machinery, electrical machinery, welding technology & contributed to consistent in customer satisfaction.</p>
            <p className="text-white font-semibold mt-2">Usha Projects provide comprehensive services for inspection and expediting in Civil, Mechanical, Electrical & Instrumentation disciplines for the total project as a single window service to the client . Our major customers include BRPL (Stemcor Group), Jindal Stainless ,VISA Steel ,Aarti Steel & Power and for Power sector NTPC, BHEL etc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
