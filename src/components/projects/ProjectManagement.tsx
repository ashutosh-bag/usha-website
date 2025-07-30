"use client"
import Image from "next/image";
import React from "react";

export default function ProjectManagement() {
  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-32 text-gray-800 font-lora">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-900 border-b-4 border-yellow-500 inline-block">
            Projects Management
          </h2>

          <p className="text-base leading-relaxed mb-6">
            Our Project management is a carefully planned and organized effort to accomplish a specific {`(and usually) `}one-time objective. Project management includes developing a project plan, which includes defining and confirming the project goals and objectives, identifying tasks and how goals will be achieved, quantifying the resources needed, and determining budgets and timelines for completion. It also includes managing the implementation of the project plan, along with operating regular {`'controls'`} to ensure that there is accurate and objective information on {`'performance'`} relative to the plan, and the mechanisms to implement recovery actions where necessary.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Our Experience is one of the major factors that are to be considered before recruiting any individual for any particular project. Our project management can be a team of engineers, architect, designers, management trainee etc. A highly qualified Project Management team ensures that all aspects of a project are efficiently put together and managed to ensure that the project is executed smoothly in a seamless manner with all participants operating in a coordinated manner to ensure a harmonious working environment and efficiently achieve project completion.
          </p>

          <p className="text-base leading-relaxed mb-6">
           Usha Projects has executed many projects using its core competencies and has through various associations with companies of repute in India as well as abroad, gained all round expertise in utilizing latest technologies and applying them to suit local conditions.
          </p>

          <p className="text-base leading-relaxed">
           With its knowledge of local conditions and environment and along with its associations with various companies, Usha Projects today can play to perfection the role of an ideal system integrator for projects in India as well as abroad.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
               src="/assets/projectmanagement/imgi_3_ProjectChart2.gif"
              alt="Recently Completed Projects"
            width={600}
             height={400}
             className="rounded-lg shadow-md w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}
