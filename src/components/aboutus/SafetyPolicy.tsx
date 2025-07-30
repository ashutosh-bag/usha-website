"use client"; // Ensure this is at the top


import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb";
import Image from "next/image";


export default function SafetyPolicy() {



  return (
    <section className=" bg-gradient-to-b from-green-500 to to-sky-400 font-lora text-gray-900">
      {/* Breadcrumb at the Top */}
      <CommonBreadcrumb imageUrl="/assets/safety/48.jpg" /> 

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center" data-aos="fade-right">
         
            <Image
              src="/assets/safety/pic5.jpg"
              alt="Safety Policy Image"
              width={450}     
              height={300}
              className="rounded-lg shadow-lg"
            />
       
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-yellow-600 uppercase">
            Safety <span className="text-gray-800">Policy</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
           {` "Usha Projects (India) Pvt. Ltd. is committed to being a leading EPC
            contracting company by continuously improving its processes to
            enhance customer satisfaction."`}
          </p>

          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex items-start">✅ Compliance with Safety, Health & Environment regulations.</li>
            <li className="flex items-start">✅ Providing a safe and healthy work environment.</li>
            <li className="flex items-start">✅ Implementation & monitoring of SHE performance.</li>
            <li className="flex items-start">✅ Regular assessments for continuous improvement.</li>
            <li className="flex items-start">✅ Conservation of tools, machinery & natural resources.</li>
            <li className="flex items-start">✅ SHE training programs for all employees.</li>
          </ul>

          <p className="mt-6 text-gray-700">
            We value our employees health and safety, which is a key asset for
            our progress and prosperity.
          </p>
        </div>
      </div>
    </section>
  );
}
