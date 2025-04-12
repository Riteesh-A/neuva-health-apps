"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/core/components/ui/accordion";
import { cn } from "@/core/lib/utils";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Are the doctors licensed medical professionals?",
    answer:
      "Yes. Our doctors are licensed medical professionals who are experienced in providing telehealth services.",
  },
  {
    question: "How discreet is the packaging?",
    answer:
      "Our packaging is discreet and does not have any branding or indication of the contents inside.",
  },
  {
    question: "Are the medications authentic?",
    answer:
      "Yes. All medications are sourced from licensed pharmacies and are authentic.",
  },
];

const CommonQuestions = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-20", className)}>
      <div className="flex flex-col gap-8 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
          Common Questions
        </h1>
        <h2 className="font-extralight text-lg">
          Find answers to frequently asked questions about our treatments,
          billing, shipping, and medical process to help you make informed
          decisions.
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-2xl">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`${index}`}>
            <AccordionTrigger
              icons={{ Open: Plus, Closed: X }}
              className="text-xl font-normal relative"
            >
              {question}
            </AccordionTrigger>
            <AccordionContent className="font-extralight text-lg">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CommonQuestions;
