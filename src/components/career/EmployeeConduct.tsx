"use client"
import Image from "next/image"
import { Shield, Users, AlertTriangle, Eye, Lock, Building } from "lucide-react"

export default function EmployeeConduct() {
  const conductItems = [
    {
      id: "conduct",
      title: "Conduct",
      icon: <Users className="w-6 h-6" />,
      description:
        "Every employee of USHA right from managing director to the lowest employee shall work with honesty, integrity, professionalism, competence upholding the ethical and highest order of moral standards.",
    },
    {
      id: "compliance",
      title: "Compliance to Regulation",
      icon: <Shield className="w-6 h-6" />,
      description:
        "All employees shall conduct and comply with all the applicable rules, laws and regulations conforming to the place of operation.",
    },
    {
      id: "employment",
      title: "Concurrent Employment",
      icon: <Building className="w-6 h-6" />,
      description:
        "No employee shall accept any concurrent employment or seek any position of responsibility or provide any freelance service without the approval of managing director.",
    },
    {
      id: "conflict",
      title: "Conflict of Interest",
      icon: <AlertTriangle className="w-6 h-6" />,
      description:
        "No employee shall engage in any business, relationship activity which will go against the interest of the company.",
    },
    {
      id: "secrecy",
      title: "Secrecy",
      icon: <Eye className="w-6 h-6" />,
      description:
        "Employee and his / her immediate family members shall not derive any benefit from the access of inside information.",
    },
    {
      id: "assets",
      title: "Protection of Company Assets",
      icon: <Lock className="w-6 h-6" />,
      description: "Employee shall not miss use any assets of the company for purposes other than their meant for.",
    },
  ]

  return (
    <section className="py-16 font-lora px-4 bg-gradient-to-t from-green-500 to-sky-400" aria-labelledby="conduct-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 id="conduct-heading" className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Employee Conduct
            <span className="block text-2xl md:text-3xl font-semibold text-amber-600 mt-2">{`USHA's`} Standards</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {conductItems.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-amber-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                        {item.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <Image
                src="/assets/employeeconduct/imgi_3_pic11.jpg"
                alt="Professional team collaboration illustration showing employees working together in a modern office environment"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-15 blur-xl"></div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Commitment to Excellence</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our employee conduct guidelines ensure the highest standards of professionalism, integrity, and ethical
              behavior across all levels of our organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
