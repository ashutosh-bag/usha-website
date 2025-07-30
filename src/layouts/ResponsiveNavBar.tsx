'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
    { title: "HOME", link: "/" },
      {
          title: "ABOUT US",
          dropdown: [
            { title: "ABOUT USHA", link: "/aboutusha" },
            { title: "MISSION & VISION", link: "/visionmission" },
            { title: "QUALITY POLICY", link: "/qualitypolicy" },
            { title: "PARTNER WITH US", link: "/partnerwithus" },
            { title: "SAFETY POLICY", link: "/safetypolicy" },
            { title: "FIELD OF OPERATION", link: "/fieldofoperation" },
            { title: "HSE POLICY", link: "/hsepolicy" },
            { title: "USHA FAMILY", link: "/ushafamily" },
            { title: "PHOTO GALLERY", link: "/photogallery" },
          ],
        },
    {
      title: "SERVICES",
      dropdown: [
        { title: "USHA SERVICES", link: "/services/ushaservices" },
        { title: "CORE SERVICES", link: "/services/coreservices" },
        { title: "EPC SERVICES", link: "/services/epcservices" },
        { title: "EXPERTISE", link: "/services/expertise" },
        { title: "WATER SERVICES", link: "/services/waterservices" },
        { title: "POWER SERVICES", link: "/services/powerservices" },
        { title: "METAL & MINERAL SERVICES", link: "/services/metalandmineralservices" },
        { title: "INDUSTRIAL", link: "/services/industrial" },
        { title: "OIL & GAS SERVICES", link: "/services/oilandgas" },
      ],
    },
    {
      title: "WE EXECUTE",
      dropdown: [
        { title: "ENGINEERING", link: "/weexecute/engineering" },
        { title: "CONSTRUCTION", link: "/weexecute/construction" },
        { title: "PROCUREMENT", link: "/weexecute/procurement" },
        { title: "QUALITY SERVICES", link: "/weexecute/qualityservice" },
      ],
    },
    {
      title: "PROJECTS",
      dropdown: [
        { title: "PROJECTS IN PROGRESS", link: "/projects/projectinprogress" },
        { title: "PROJECT COMPLETED", link: "/blog2" },
        { title: "PROJECT MANAGEMENT", link: "/blog2" },
      ],
    },
    {
      title: "CLIENTS",
      dropdown: [
        { title: "OUR CLIENTS", link: "/clients/ourclients" },
        { title: "CLIENT TESTIMONIALS", link: "/clients/clienttestimonial" },
      ],
    },
    {
      title: "CAREER",
      dropdown: [
        { title: "REQUIREMENT POLICY", link: "/blog1" },
        { title: "REQUIREMENT PROCEDURE", link: "/blog2" },
        { title: "CURRENT OPENINGS", link: "/blog2" },
        { title: "CORPORATE CONDUCT", link: "/blog2" },
        { title: "EMPLOYEE CONDUCT", link: "/blog2" },
      ],
    },
    { title: "CONTACT US", link: "/contactus" },
  ];
export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden font-lora block bg-gradient-to-t from-green-200 to-blue-300  shadow-md p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
               
                  <Image src="/assets/logo-light.png" alt="Logo" className="" width={150}  height={150}/>
             
               
              </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 space-y-2">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <details className="group">
                  <summary className="cursor-pointer py-2 text-gray-700 font-semibold">{item.title}</summary>
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.link} className="block text-gray-600 hover:text-gray-900">
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link href={item.link} className="block py-2 text-gray-700 font-semibold hover:text-gray-900">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
