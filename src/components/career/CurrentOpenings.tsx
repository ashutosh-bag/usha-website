"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function CurrentOpenings() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gradient-to-t from-green-500 to-sky-400 py-12 px-4 md:px-16 lg:px-32 text-gray-800 font-lora">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-900 border-b-4 border-yellow-500 inline-block">
        Current Openings
      </h2>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left section with image and text */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/currentopenings/imgi_5_career.jpg"
            alt="Opening in Progress"
            width={700}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow-md">
            Opening in Progress
          </div>
        </div>

        {/* Right content */}
        <div className="bg-blue-900 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Beware of fraudulent job openings</h3>
          <p className="text-lg mb-3">
            Explaining in public interest: It has come to our notice that certain parties are sending out SMSes and e-mails to job seekers; claiming to be issued in the name of USHA Projects Limited; asking to attend interviews for job openings with USHA Projects and to deposit certain amounts in various designated bank accounts.
          </p>
          <p className="text-lg mb-3">
            The e-mails sent from the email id – corporate@ushaprojects.com, corporate2@ushaprojects.com . . .
          </p>
          <p className="text-lg mb-6">
            To apply for the following jobs you can send your resume to{' '}
            <a
  href="mailto:career@ushaprojects.com"
  className="text-green-400 font-bold hover:underline"
  target="_blank"
  rel="noopener noreferrer"
>
  career@ushaprojects.com
</a>

          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-lg font-semibold"
          >
            Read More..
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-md shadow-2xl max-w-xl w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
            >
              ×
            </button>
            <h4 className="text-2xl font-semibold text-green-700 mb-4">
              Beware of fraudulent job openings
            </h4>
            <p className="text-lg text-gray-700 mb-4">
              Explaining in public interest: It has come to our notice that certain parties are sending out SMSes and e-mails to job seekers; claiming to be issued in the name of USHA Projects Limited; asking to attend interviews for job openings with USHA Projects and to deposit certain amounts in various designated bank accounts.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The e-mails sent from the email id - corporate@ushaprojects.com, corporate2@ushaprojects.com and carrier@ushaprojects.com are falsely stated to be from USHA Projects Limited. We have neither sent out any e-mails or bulk SMS, nor asked for money to be deposited in any bank account. USHA Projects bears no responsibility for amounts being deposited or withdrawn in response to such emails.
            </p>
            <p className="text-lg text-gray-700">
              The public are warned that these emails/letters/SMS are fraudulent and are being perpetrated in the name of USHA Projects, by certain unknown persons/parties for their own ends. We are taking appropriate steps to tackle the issue.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
