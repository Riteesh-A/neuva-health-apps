"use client";

import { cn } from "@/core/lib/utils";
import React, { useState } from "react";

// filepath: c:/Users/punee/OneDrive/Documents/GitHub/neuva-health-apps/core/components/home/CommonQuestions.tsx

const CommonQuestions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "Are the doctors licensed medical professionals?",
    "How discreet is the packaging?",
    "Are the medications authentic?",
  ];

  return (
    <div className={cn("container mx-auto py-12")}>
      <h1 className="text-4xl text-center">Common Questions</h1>
      <p className="text-center mt-2 mb-8 font-light px-72">
        At Neuva Health, we understand the importance of discretion. Our
        consultations are confidential, and all medications are delivered in
        plain, unmarked packaging.
      </p>
      <div className="space-y-4 px-64">
        {questions.map((question, index) => (
          <div key={index} className="bg-[#E3EDFB] rounded-lg">
            <button
              className="w-full text-left py-4 px-6 flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              <span>{question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="font-light">Answer to the question goes here.</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#D7DDE4] text-gray-800 py-2 px-4 rounded-full">
          View All FAQs
        </button>
      </div>
    </div>
  );
};

export default CommonQuestions;
