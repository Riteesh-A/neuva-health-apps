"use client";

import { Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ProductUsage = ({
  title,
  description,
  faqs,
}: {
  title: string;
  description: React.ReactNode;
  faqs?: { question: string; answer: string | React.ReactNode }[];
}) => {
  return (
    <div className="flex flex-col items-center section-y">
      <section className="flex flex-col items-center container text-center w-full gap-4  md:items-center md:gap-6">
        <div className="flex flex-col items-start text-left w-full gap-4 md:gap-6">
          <h1 className="type-headline-sm md:type-headline-lg  w-full">
            {title}
          </h1>
          <h2 className="w-full">{description}</h2>
        </div>
        <Accordion type="single" collapsible className="w-full ">
          {faqs?.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`${index}`}>
              <AccordionTrigger
                icons={{ Open: Plus, Closed: X }}
                className="text-xl font-semibold relative"
              >
                {question}
              </AccordionTrigger>
              <AccordionContent className="font-extralight text-lg text-left">
                {typeof answer === "string" ? <div>{answer}</div> : answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default ProductUsage;
