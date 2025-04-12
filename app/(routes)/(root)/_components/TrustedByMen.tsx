"use client";

import ScrollingTestimonials from "@/core/components/animata/scrolling-testimonials";
import {
  type Testimonial,
  TestimonialCard,
} from "@/core/components/animata/scrolling-testimonials/testimonial-card";
import { cn } from "@/core/lib/utils";

const testimonials: Testimonial[] = [
  {
    quote: [
      { text: "Neuva Health is truly setting a new standard in accessible, outcome-driven care.",
        highlight: true,
       },
      {
        text: " Whether it’s weight loss, sexual health, or mental health, Neuva remains on the forefront of treatment options—always guided by the latest clinical research and in consultation with leading experts across specialties.",
      },
      {
        text: " \n\nAs a medical professional, I’m particularly impressed by Neuva’s commitment to safety, transparency, and evidence-based protocols.",
        highlight: true,
      },
      {
        text: " We’ve already begun to see tremendous interest and highly promising outcomes with our weight loss treatments.",
      },
      {
        text: " It’s exciting to be part of a platform that’s making quality care this personalized and scalable.",
        highlight: true,
      },
    ],
    name: "Dr. Paramesh Shamanna",
    location: "MBBS, MS – Consultant Physician & Advisor, Neuva Health",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: [
      { text: "As a doctor, I’ve seen patients gain access to treatments they would have otherwise avoided." },
      {
        text: " Neuva has lowered the barrier to care without lowering standards.",
        highlight: true,
      },
    ],
    name: "Dr. Chandrashekhar M",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "MBBS, MS – Bangalore",
  },
];
;

const TrustedByMen = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-20", className)}>
      <div className="flex flex-col gap-8 text-center max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
          Trusted by Doctors Across India
        </h1>
        <h2 className="font-extralight text-lg">
          Join thousands of men who have experienced improved health and
          confidence through our discreet, effective healthcare solutions.
        </h2>
      </div>
      <div className="hidden md:block w-dvw overflow-hidden">
        <ScrollingTestimonials data={testimonials} />
      </div>
      <div className="flex flex-col md:hidden gap-4">
        {testimonials.splice(0, 3).map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TrustedByMen;
