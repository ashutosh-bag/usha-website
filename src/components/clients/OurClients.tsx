"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "NALCO", logo: "/assets/home/nalco.jpg" },
  { name: "Indian Oil", logo: "/assets/home/indianoil.jpg" },
  { name: "IOT", logo: "/assets/home/iot.jpg" },
  { name: "Jindal Stainless", logo: "/assets/home/jsl.jpg" },
  { name: "BRPL", logo: "/assets/home/brpl.jpg" },
  { name: "NTPC", logo: "/assets/home/ntpc.jpg" },
  { name: "TATA Steel", logo: "/assets/home/tata.jpg" },
  { name: "Visa Steel", logo: "/assets/home/visa.jpg" },
  { name: "Aarti International", logo: "/assets/home/aarti.png" },
  { name: "NMDC", logo: "/assets/home/nmdc.jpg" },
  { name: "MCL", logo: "/assets/home/mcl.jpg" },
  { name: "Wabag", logo: "/assets/home/wabag.jpg" },
  { name: "Larsen & Toubro", logo: "/assets/home/l&t.jpg" },
  { name: "Punj Lloyd", logo: "/assets/home/lloyd.jpg" },
  { name: "Anwesha", logo: "/assets/home/anwesha.jpg" },
  { name: "Bhel", logo: "/assets/home/bhel.jpg" },
];

export default function OurClients() {
  return (
    <section
      className="px-6 md:px-16 py-12 bg-[url('/assets/clients/trust2.jpg')] inset-0   bg-cover bg-center font-lora dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="clients-title"
    >
      {/* Heading */}
      <motion.h2
        id="clients-title"
        className="text-3xl md:text-4xl font-bold text-amber-700 dark:text-amber-500 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        CLIENTS
      </motion.h2>
      <motion.div
        className="w-16 h-1 bg-amber-700 dark:bg-amber-500 mx-auto mt-2"
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        transition={{ duration: 0.5 }}
      />

      {/* Client Categories */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Left: Categories */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-500">Power</h3>
          <ul className="ml-5 list-disc">
            <li>NALCO</li>
            <li>NTPC</li>
            <li>TATA</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-4">Steel, Aluminium & Iron</h3>
          <ul className="ml-5 list-disc">
            <li>NMDC</li>
            <li>MCL</li>
            <li>Coal India</li>
            <li>CMPDIL</li>
            <li>TATA STEEL</li>
            <li>Brahmani River Pellets Ltd. (Stemcor Group)</li>
            <li>Jindal Stainless Limited</li>
            <li>Aarti Steel Limited</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-4">Atomic Energy</h3>
          <ul className="ml-5 list-disc">
            <li>Heavy Water</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mt-4">Fertilizer & Chemical</h3>
          <ul className="ml-5 list-disc">
            <li>FCIL Ltd.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Others</h3>
          <ul className="ml-5 list-disc">
            <li>EPIL</li>
            <li>EPI</li>
            <li>TATA Projects</li>
            <li>TCPL</li>
            <li>Era</li>
            <li>L & T</li>
            <li>Wabag</li>
            <li>Punj Lloyd</li>
          </ul>
        </motion.div>

        {/* Right: Client Logos */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-3 gap-10 md:grid-cols-4 lg:grid-cols-5"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="relative group flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo Image */}
              <Image
                src={client.logo} // Ensure these image paths exist in the public folder
                alt={client.name}
                width={100}
                height={100}
                className="w-48 h-auto rounded-lg shadow-md transition-transform duration-300"
              />

              {/* Hover Effect: Name Display */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white font-bold">{client.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
