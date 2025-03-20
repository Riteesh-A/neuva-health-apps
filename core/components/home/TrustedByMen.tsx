"use client";

import { cn } from "@/core/lib/utils";
import ScrollingTestimonials from "../animata/scrolling-testimonials";
import {
  Testimonial,
  TestimonialCard,
} from "../animata/scrolling-testimonials/testimonial-card";

const testimonials: Testimonial[] = [
  {
    quote: [
      { text: "The online consultation was professional and discreet." },
      {
        text: " The doctor was knowledgeable and helped me understand my options.",
        highlight: true,
      },
    ],
    name: "Rajesh K.",
    image:
      "https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "32, Bangalore",
  },
  {
    quote: [
      { text: "I was hesitant to seek help," },
      { text: " but Neuva made the process comfortable.", highlight: true },
      { text: "The medication has made a significant difference." },
    ],
    name: "Vikram S.",
    location: "41, Mumbai",
    image:
      "https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: [
      {
        text: "The assessment was easy to complete, and I got my prescription the same day.",
        highlight: true,
      },
      { text: " The quality of the medication is excellent." },
    ],
    name: "Arjun T.",
    location: "35, Delhi",
    image:
      "https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    quote: [
      { text: "The online consultation was professional and discreet." },
      {
        text: " The doctor was knowledgeable and helped me understand my options.",
        highlight: true,
      },
    ],
    name: "Rajesh K.",
    image:
      "https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "32, Bangalore",
  },
  {
    quote: [
      { text: "I was hesitant to seek help," },
      { text: " but Neuva made the process comfortable.", highlight: true },
      { text: "The medication has made a significant difference." },
    ],
    name: "Vikram S.",
    location: "41, Mumbai",
    image:
      "https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: [
      {
        text: "The assessment was easy to complete, and I got my prescription the same day.",
        highlight: true,
      },
      { text: " The quality of the medication is excellent." },
    ],
    name: "Arjun T.",
    location: "35, Delhi",
    image:
      "https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TrustedByMen = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-20", className)}>
      <div className="flex flex-col gap-8 text-center max-w-2xl">
        <h1 className="text-3xl md:text-6xl tracking-tight">
          Trusted by Men Across India
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
