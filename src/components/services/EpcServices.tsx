"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import CommonBreadcrumb from "../commonbreadcrumb/CommonBreadcrumb"

// Custom SVG icons
const CogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="M11 10.27 7 3.34" />
    <path d="m20.66 17-1.73-1" />
    <path d="m3.34 7 1.73 1" />
    <path d="M14 12h8" />
    <path d="M2 12h2" />
    <path d="m20.66 7-1.73 1" />
    <path d="m3.34 17 1.73-1" />
    <path d="m17 3.34-1 1.73" />
    <path d="m11 13.73-4 6.93" />
  </svg>
)

const Settings2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 7h-9" />
    <path d="M14 17H5" />
    <circle cx="17" cy="17" r="3" />
    <circle cx="7" cy="7" r="3" />
  </svg>
)

const HardHatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
    <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
    <path d="M14 6h0a6 6 0 0 1 6 6v3" />
  </svg>
)

const TimerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

export default function EpcServices() {
  const [activeTab, setActiveTab] = useState("engineering")

  return (
    <div className="min-h-screen font-lora bg-gradient-to-t from-green-500 to-sky-400">
      <CommonBreadcrumb imageUrl="/assets/services/15.jpg" />

      {/* Background Image Section */}
      <div className="relative">
        <div className="fixed inset-0 -z-10">
          <Image
            src="/assets/services/background.jpg"
            alt="Industrial Background"
            fill
            className="object-cover opacity-10"
          />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">EPC Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              USHA&apos;s fully integrated EPC team offers end to end turnkey solution to its customers for power
              projects, ASH HANDLING SYSTEM and BOP including the scope of planning, design, engineering, procurement,
              supply, construction, project management, fabrication, inspection, expediting, quality control, erection
              and commissioning. Efficient and optimal use of software (like 3D Modelling, Primavera) helps INDURE to
              achieve high quality engineering and utilize lead time intelligence to maximize the accuracy of optimized
              time schedules. These have added value by reducing overall project costs, improving cycle time &amp; work
              processes, thus achieving efficient and faster project execution.
            </p>
          </motion.div>

          {/* Services Tabs */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-8">
              {["engineering", "procurement", "construction", "management"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 m-1 rounded-md ${
                    activeTab === tab ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === "engineering" && (
              <ServiceSection
                title="Engineering Philosophy and Site Practice"
                icon={<CogIcon />}
                content={[
                  "To serve client's turnkey solution requirement, USHA's in-house expertise incorporates all major disciplines of engineering including architectural, civil, structural, mechanical, piping, electrical, instrumentation and control as well as areas of special expertise such as process cycle design and customized equipment design.",
                  "Our engineering teams are equipped with the latest tools and technologies including data-centric 3D plant design systems, parametric 3D component design software, finite element analysis, computational fluid dynamics and many types of simulation software. USHA's proficiency in creating virtual facilities using interactive, 3D modeling tools provides clients with a real-time, walk-through simulation that facilitates the ability to jointly review and address potential issues of constructability, operability and maintenance at the early stages of the project.",
                  "Our engineering teams work closely with the clients to incorporate their knowledge and requirements into the project starting at the initial stages of the projects.",
                  ' Our engineering teams deliver their work as an integral part of USHA\'s "Project Life Cycle" Process, working closely with our procurement, construction and commissioning teams to achieve reduction in commissioning schedule and also secure optimal life cycle costs.',
                ]}
              />
            )}

            {activeTab === "procurement" && (
              <ServiceSection
                title="Design Solutions with Customer Objectives"
                icon={<Settings2Icon />}
                content={[
                  "USHA's conceptual design capabilities align each project's function, scope, cost and schedule with client's objectives to achieve project success",
                  "The conceptual design phase offers the best opportunity to assess business, commercial and technical risks; and to improve return on investment.",
                  "During conceptual design, USHA uses its expertise to deliver appropriate, cost-effective solutions to create valuable assets for clients and increase their long-term business success.",
                  "This system begins with a collaborative work practice that engages all of a project's multidisciplinary team members in the project's development.",
                ]}
              />
            )}

            {activeTab === "construction" && (
              <ServiceSection
                title="Constructability"
                icon={<HardHatIcon />}
                content={[
                  "USHA's performs design reviews at key stages to ensure consistent and efficient focus on the Client's project deliverables throughout the design process.",
                  "Such reviews highlight, address and resolve these issues early in the design process for an efficient design and construction process, minimizing overall project cost and execution time. USHA's constructability program integrates comprehensive construction competence into each phase of a project, from early project planning, through engineering and procurement, to construction and start-up. When implemented at the inception of a project execution cycle, this expertise enhances performance throughout all project execution phases. Reviews focus on:",
                  "The re-examine for constructability places of interest any construction approach issues in the design, to optimize the project's quality, safety, capital cost and construction schedule. Maintainability and operability inputs are solicited and discussed with the Client.",
                  "The review, similar to maintainability, focus on minimizing post-start-up life cycle costs of a plant and addresses plant operation, logistics and support issues appropriate during a project's design phases.",
                ]}
              />
            )}

            {activeTab === "management" && (
              <ServiceSection
                title="Project Management"
                icon={<TimerIcon />}
                content={[
                  "The review for maintainability addresses issues during a project's design phase associated with completing expected maintenance tasks, including reliability and maintenance considerations into the design basis; establishment of processes to ensure plant design minimizes impacts associated with maintenance; and prestart-up maintenance planning.",
                  "In an EPC contract, the EPC contractor(EPCC) agrees to deliver the keys of a commissioned plant to the owner for an agreed amount, just as a builder hands over the keys of a flat to the purchaser. The EPC way of executing a project is gaining importance worldwide. But it is also a way that needs good understanding, by the EPCC, for a profitable contract execution. An owner decides for an EPC contract for several vital reasons. Some are:",
                  "Risk management The owner puts in minimum efforts for his projects and so has less stress.EPC gives the owner one point contact. It is easy to monitor and coordinate.It is easy for the owner to get post-commissioning services.EPC way ensures quality and reduces practical issues faced in other ways.Owner is not affected by the market rise.Investment figure is known at the start of the project.",
                  "Besides the plant sitting, in an EPC contract the owner will define the following:Scope and the specifications of the plant  Quality Project, duration, and Cost An EPC contract is a complex phenomenon. It involves various agencies and characteristics. So the EPC contract, especially in global context, needs through understanding. The EPCC must know about the various factors that will affect the working, the results and success or failure of the contract, in global arena. The EPCC must have data and expertise in all the required fields. A thorough knowledge of many aspects is required. Some important areas are:Local (where the plant will be located)market conditions for the materials supply and labor availability and performance.Local code, statutory etc., requirements.Availability of local supervisory personnel.Availability of local and global engineering services.local and global contractors, their experience and performance.At UPIPL undertaking EPC contract and delivering then to the satisfaction of clients is not only a passion, it is an obsession",
                ]}
              />
            )}
          </div>

          {/* Process Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="bg-white/80 gap-5 flex flex-col backdrop-blur-sm rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our EPC Process</h2>
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
                <Image src="/assets/services/epc2.jpg" alt="EPC Process Diagram" fill className="object-contain" />
              </div>
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
                <Image src="/assets/services/epc1.jpg" alt="EPC Process Diagram" fill className="object-contain" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

interface ServiceSectionProps {
  title: string
  icon: React.ReactNode
  content: string[]
}

function ServiceSection({ title, icon, content }: ServiceSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-green-100 rounded-lg text-green-600">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {content.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-2"
          >
            <span className="text-gray-700">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

