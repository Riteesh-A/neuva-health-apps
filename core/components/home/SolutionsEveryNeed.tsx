"use client";

import { cn } from "@/core/lib/utils";
import React from "react";

const SolutionsEveryNeed: React.FC = () => {
  const cards = [
    {
      title: "Improve Performance",
      description:
        "Clinically proven treatments for better sexual performance and confidence.",
    },
    {
      title: "Last Longer",
      description:
        "Effective solutions to help you maintain control and enhance intimacy.",
    },
    {
      title: "Prevent Hair Loss",
      description:
        "Science-backed treatments to stop hair loss and promote regrowth.",
    },
  ];

  return (
    <div className="py-8">
      <h2 className={cn("text-3xl text-center")}>Solutions for Every Need</h2>
      <p className="text-center mt-2 mb-4 font-light">
        Some subtitle/marketing copy goes here
      </p>
      <div className="flex justify-between space-x-4 py-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "bg-primary-98 p-6 rounded-lg flex flex-col items-start w-1/3"
            )}
          >
            <h3 className="text-xl mb-2">{card.title}</h3>
            <p className="text-sm font-light">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsEveryNeed;
