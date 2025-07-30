"use client"
import Image from "next/image";
import React from "react";


const projects = [
  {
    title: "BRPL (Stemcor Group)",
    description:
      "We have completed 90 Km of Iron ore slurry line from mines to BRPL office on a record time. The line has to pass through villages, canals, Railways, State Highways, Irrigation ares  and difficult terrain.  Since the forest area clearance got delayed the project delayed for commissioning. However it was commissioned without any problem.",
  },
  {
    title: "NTPC",
    description:
      "We have executed many pipe line work inside and outside the plant like RAW WATER Pipelines, Drinking Water lines, Make Up water. Etc. We have commissioned the water treatment plant. Other than this, we have executed 10000 Mt of Fabrication & Erection for the Offsite Package for stage 2.",
  },
  {
    title: "CMPDIL (Coal India Ltd)",
    description:
      "We have commissioned the CCT covering for a Bharatpur Mines in Odisha    and Conveyor system of Conveyor C2 & C2A  consist  of 2000 Mt of Fab & Erection of structural’s and many building erection. We have also laid the Raw water line for MCL Kalinga Mines.",
  },
  {
    title: "IOCL PARADEEP",
    description:
      "We have commissioned various dia meters of 42 Km piping for oil transportation inside plant area.",
  },
  {
    title: "JINDAL STAINLESS",
    description:
      "We have completed Raw water Pipe line work of 500 mm dia connecting IDCO header and Raw water reservoir. The pipe line was laid across Kalinga Nagar Tribal areas in a difficult terrain.We have also commissioned 600 mm Dia pipe line Underground connecting the Raw water reservoir inside plant to different areas inside like SMS, Rolling Mill Etc. Other than that we have laid pipe for Makeup water line.",
  },
  {
    title: "VSL (VISA STEEL)",
    description:
      "Underground wrapped and coated raw water carbon steel pipeline of 900mm dia size connecting IDCO header and plant 14 Km.  WE have further awarded with SMS, Rolling mill fab & Erection, Inside plant all  pipe laying trusses  with different size of pipes carried overhead.  We have also commissioned the Pump house and reservoir inside plant.",
  },
  {
    title: "AARTI STEELS LIMITED, GHANTIKAL",
    description:
      "Underground wrapped and coated raw water carbon steel pipeline of 700mm dia size connecting in take well at Mahanadi River and Raw Water Reservoir inside the plant commissioned this line before time in a difficult terrain.  We have been awarded for completing this job.",
  },
  {
    title: "SEWERAGE LINE AT PURI (ODISHA SEWERAGE BOARD)",
    description:
      "Under ground sewerage line  92 Km funded by World Bank under Orissa Water Supply and Sewerage Board (Govt. of Odisha).",
  },
];

export default function ProjectCompleted() {
  return (
    <section className="bg-gradient-to-t from-green-500 to to-sky-400 py-12 px-4 md:px-16 lg:px-32 font-lora text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center border-b-4 border-yellow-500 inline-block">
          Our Projects - Recently Completed
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Below is a list of some of our recently completed projects that
          showcase our capacity to execute with precision, even in the most
          challenging conditions.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Projects list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="mt-10 lg:mt-0">
            
           
            <Image
              src="/assets/projectcompleted/imgi_3_pic9.jpg"
              alt="Recently Completed Projects"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
