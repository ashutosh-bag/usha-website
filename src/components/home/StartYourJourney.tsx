"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react"

export default function StartYourJourney() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("journey-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="journey-section"
      className="font-lora bg-gradient-to-br from-blue-500 via-white to-purple-500 py-16 lg:py-24"
    >
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image */}
          <div
            className={`relative transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/assets/home/indian-engineer-work-building-site.jpg"
                alt="Construction Worker"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                <MessageCircle className="w-4 h-4" />
                <span>GET IN TOUCH WITH US</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Start Your Journey <span className="text-blue-600">With Us</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Our mission is to bring your vision to life with precision, expertise, and an unwavering commitment to
                quality. We build not just structures, but lasting relationships with our clients.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="flex items-center space-x-4 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <p className="text-lg font-semibold text-gray-900">Frequently Asked Questions By Our Customers</p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/20 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-xl text-gray-600">
              Ready to discuss your project? Contact us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8" />
                </div>

                <h4 className="font-bold text-xl text-gray-900">Our Locations</h4>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-blue-800 mb-2">Office 1</p>
                    <p className="text-base font-medium text-gray-800 leading-relaxed">
                      Usha House, House No-1, Surya Vihar patia, KIIT Campus-III, Bhubanswar-751024
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-blue-800 mb-2">Office 2</p>
                    <p className="text-base font-medium text-gray-800 leading-relaxed">
                      Usha Tower, Plot No.306/1815/3423, KIIT Campus-III, Patia, Bhubaneswar-751024, Odisha, India
                    </p>
                  </div>
                </div>

                <button className="group/btn bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-md hover:shadow-lg">
                  <span>CHECK LOCATION</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Phone */}
            <div
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>

                <h4 className="font-bold text-xl text-gray-900">Call Us</h4>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-2xl font-bold text-green-800 mb-1">+91-674-27241555</p>
                    <p className="text-lg font-bold text-green-700">+91-674-27242555</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Mon to Sat: 9:30am to 6:30pm</span>
                    </div>
                  </div>
                </div>

                <button className="group/btn bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-md hover:shadow-lg">
                  <span>GET CALL BACK</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Email */}
            <div
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>

                <h4 className="font-bold text-xl text-gray-900">Email Us</h4>

                <div className="space-y-3">
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <div className="space-y-2">
                      <p className="text-base font-bold text-orange-800">career@ushaprojects.com</p>
                      <p className="text-base font-bold text-orange-700">corporate2@ushaprojects.com</p>
                      
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 font-medium">
                      Reach out to our team by sending us an email. {`We're`} here to assist you.
                    </p>
                  </div>
                </div>

                <button className="group/btn bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-md hover:shadow-lg">
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
