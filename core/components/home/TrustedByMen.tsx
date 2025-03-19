"use client";

import { cn } from "@/core/lib/utils";
import React from "react";

const testimonials = [
  {
    quote:
      "The online consultation was professional and discreet. The doctor was knowledgeable and helped me understand my options.",
    name: "Rajesh K.",
    location: "32, Bangalore",
  },
  {
    quote:
      "I was hesitant to seek help, but Neuva made the process comfortable. The medication has made a significant difference.",
    name: "Vikram S.",
    location: "41, Mumbai",
  },
  {
    quote:
      "The assessment was easy to complete, and I got my prescription the same day. The quality of the medication is excellent.",
    name: "Arjun T.",
    location: "35, Delhi",
  },
  {
    quote:
      "I was hesitant to seek help, but Neuva made the process comfortable. The medication has made a significant difference.",
    name: "Vikram S.",
    location: "41, Mumbai",
  },
  {
    quote:
      "The assessment was easy to complete, and I got my prescription the same day. The quality of the medication is excellent.",
    name: "Arjun T.",
    location: "35, Delhi",
  },
  {
    quote:
      "The assessment was easy to complete, and I got my prescription the same day. The quality of the medication is excellent.",
    name: "Arjun T.",
    location: "35, Delhi",
  },
];

const TrustedByMen: React.FC = () => {
  return (
    <div className={cn("container mx-auto py-12 overflow-hidden mb-[450px]")}>
      <h1 className="text-4xl text-center">Trusted by Men Across India</h1>
      <p className="text-center mt-2 mb-8 font-light">
        At Neuva Health, we understand the importance of discretion. Our
        consultations are confidential, and all medications are delivered in
        plain, unmarked packaging.
      </p>

      {/* Scrolling Testimonials */}
      <div className="absolute w-[99vw] overflow-hidden left-1/2 right-1/2 -ml-[49.5vw] -mr-[49.5vw] space-y-6 ">
        {/* First Row - Scroll Left */}
        <div className="w-full flex space-x-6 animate-scroll-left">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#E3EDFB] p-6 rounded-lg w-80 flex-shrink-0"
            >
              <p className="font-light mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>

        {/* Second Row - Scroll Right (Offset for Staggering) */}
        <div className="flex space-x-6 animate-scroll-right ml-40">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#E3EDFB] p-6 rounded-lg w-80 flex-shrink-0"
            >
              <p className="font-light mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedByMen;
