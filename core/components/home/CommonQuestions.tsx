"use client";

import { cn } from "@/core/lib/utils";
import { Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "What's included in the online consultation?",
    answer:
      "Our online consultation will cover your lifestyle, medical history, weight, and any medications you're currently taking. This information enables our clinicians to determine which treatment is suitable for you. It should take you just a few minutes to complete.",
  },
  {
    question: "What does the Weight Loss Programme involve?",
    answer:
      "The Neuva Weight Loss Programme combines ongoing clinical support and expert-led advice with weight loss medication. By addressing the key areas of weight, you'll have the tools to help you achieve sustainable weight loss.",
  },
  {
    question: "Who is the Weight Loss Programme suitable for?",
    answer:
      "The Weight Loss Programme is designed to help people who are overweight or obese to achieve a healthier weight. Our clinicians will assess your suitability for the programme on an individual, case-by-case basis.",
  },
  {
    question: "Are weight loss medications safe to use long term?",
    answer:
      "As a healthcare provider, we hold ourselves to the highest standards of quality and safety. All of our medications have been thoroughly researched and are evidence-based. Semaglutide and Tirzepatide has been approved for the long-term treatment of obesity. These trials also demonstrated that the medication reduced the risk of adverse cardiovascular events, including a heart attack or stroke. Our clinicians will work with you to define the optimum time for you to stay on the prescribed medication based on your individual circumstances.",
  },
  {
    question: "What are the potential side effects of weight loss medication?",
    answer:
      "The most common side effects of GLP-1 medications are gastrointestinal including nausea, diarrhoea, stomach pain, and constipation. These side effects usually subside as your body adjusts to the medication. For a full list of side effects, including the less common ones, always read the Patient Information Leaflet included with your medication.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on each individual but healthy weight loss is gradual. Users see weight loss within the first 6 months. Sustained weight loss is one of the biggest challenges when it comes to achieving weight goals which is why Neuva's programme incorporates behaviour change. The programme focuses on key areas of health, including nutrition, exercise, and mindset.",
  },
  {
    question: "How much does the Weight Loss programme cost?",
    answer:
      "We offer a subscription service for our weight loss programme. You can expect to receive a delivery every 28 days. The price of our programme varies based on the type of medication you are taking, and the strength of the dose. The market price of the higher strength pens of Mounjaro and Wegovy is higher than the lower strength pens. The following prices are per month, and exclude potential discounts: Wegovy - 0.25mg: ₹17,345, 0.5mg: ₹17,345, 1mg: ₹17,345, 1.7mg: ₹24,280, 2.4mg: ₹26,015. Mounjaro - 2.5mg: ₹14,000, 5mg: ₹17,500, 7.5mg: ₹20,238, 10mg: ₹20,238, 12.5mg: ₹26,672, 15mg: ₹26,672.",
  },
];

const CommonQuestions = ({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id || ""}
      className={cn("flex flex-col items-center gap-20", className)}
    >
      <div className="flex flex-col gap-8 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
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
              className="text-xl font-semibold relative"
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
