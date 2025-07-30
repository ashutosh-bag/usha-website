"use client"
import React from "react";
import Image from "next/image";

export default function RecruitmentProcedure() {
  return (
    <section className="bg-gradient-to-t from-green-300 to-sky-300 py-12 px-4 md:px-16 lg:px-32 text-gray-800 font-lora">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-900 border-b-4 border-yellow-500 inline-block">
            Recruitment Procedure
          </h2>

          <h3 className="text-2xl text-green-900 font-semibold mt-6 mb-2">Procedures</h3>
          <p className="mb-4 text-lg">
            The following are the procedures required to undertake the recruitment and selection process to completion. It splits the process into a number of stages. It is necessary to ensure that the procedures are followed as described since they are derived from legislation, company policy and good practice.
          </p>

          <p className="text-lg font-semibold">The stages are as follows:</p>
          <ul className="list-disc pl-5 space-y-1 text-lg mb-4">
            <li>Pre-advertisement.</li>
            <li>Pre-interview.</li>
            <li>Interviewing.</li>
            <li>Post-selection.</li>
            <li>Administration.</li>
          </ul>

          <p className="text-2xl text-green-900 font-semibold mt-4">
            The following are stages for Pre-advertisement:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg mb-4">
            <li>Avert text (and the advertising procedure).</li>
            <li>Recruitment Request–HR/Finance Authorization Form.</li>
            <li>Job Description.</li>
            <li>Person Specification.</li>
            <li>Occupational Health Evaluation form.</li>
            <li>Recruitment Program (to be produced after authorization has been obtained).</li>
          </ul>

          <p className="text-2xl text-green-900 font-semibold mt-4">
            The following are stages for Pre-interview:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg mb-4">
            <li>Initial Contact with Potential Applicants.</li>
            <li>Application Form and Curriculum Vitae.</li>
            <li>Receipt of Replies.</li>
            <li>Confidentiality/Security.</li>
            <li>Short listing.</li>
          </ul>

          <p className="text-2xl text-green-900 font-semibold mt-4">
            The following are stages for Interviewing:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg mb-4">
            <li>Invitations to interview.</li>
            <li>Composition of Interview Panels.</li>
            <li>Conduct of Interview.</li>
            <li>Other selection Activities.</li>
            <li>The choice of Candidate.</li>
          </ul>

          <p className="text-2xl text-green-900 font-semibold mt-4">
            The following are stages for Post-selection Administration:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg mb-4">
            <li>Offer of Employment.</li>
            <li>Medical Assessment.</li>
            <li>References.</li>
          </ul>

          <p className="text-sm font-semibold mt-4">
            The following are the other Stages:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Final Administration.</li>
            <li>Candidate Feedback.</li>
            <li>Observation.</li>
            <li>Monitoring.</li>
            <li>Unsolicited Applications.</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/recruitmentprocedure/imgi_3_pic14.jpg"
            alt="Recruitment Process Diagram"
            width={400}
            height={400}
            className="rounded-lg shadow-md w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
