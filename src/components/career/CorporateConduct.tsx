"use client"
import React from 'react';
import Image from 'next/image';

export default function CorporateConduct() {
  return (
    <section className="bg-gradient-to-t from-green-500 to-sky-400 py-12 px-6 md:px-16 lg:px-32 text-gray-800 font-lora">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-900 border-b-4 border-yellow-500 inline-block">
            {`USHA's`} Code of Conduct
          </h2>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-white font-bold text-2xl">Corporate Conduct</h3>
            </div>

            <div>
              <h4 className="text-white font-semibold text-2xl">National Interest</h4>
              <p>
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-2xl">High Quality of Services</h4>
              <p>
                USHA tries to achieve the utmost satisfaction against the services offered by them.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-2xl">Financial Reporting</h4>
              <p>
                USHA Projects maintains its accounts in most transparent way with a good degree of fairness and conforming to standard accounting and auditing procedures in an ethical way.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-2xl">Equal Opportunities</h4>
              <p>
                USHA provides equal opportunities to all its employees irrespective of their cast, religion, sex etc.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-2xl">Safety, Health & Environment</h4>
              <p>
                USHA Projects rigidly adheres to the policy, acts, rules and regulation and orders concerning to all aspects of safety and health of its people and the peripheral people and strives hard to retain the ecological and environment balance.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/corporateconduct/imgi_3_pic10.jpg"
              alt="USHA Code of Conduct"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
