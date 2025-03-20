"use client";

import { cn } from "@/core/lib/utils";
import ScrollingCards from "../animata/scrolling-cards";
import { Button } from "../ui/button";

const content = [
  {
    stat: { statLabel: "Vitality Age", statValue: 39 },
    description: "9 years younger than your calendar age",
    image: "/assets/person-1.png",
  },
  {
    stat: { statLabel: "Performance Score", statValue: 24 },
    description: "Outperforming 72% of men in his age group",
    image: "/assets/person-2.png",
  },
  {
    stat: { statLabel: "Stamina Rating", statValue: 41 },
    description: "7 years sharper than average for your age",
    image: "/assets/person-3.png",
  },
  {
    stat: { statLabel: "Vitality Age", statValue: 92 },
    description: "9 years younger than your calendar age",
    image: "/assets/person-4.png",
  },
];

const TakeFirstStep = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      <div className="flex flex-col gap-8 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl tracking-tight">
          Take the First Step Today
        </h1>
        <h2 className="font-extralight text-lg">
          Begin your journey to better health with a free online consultation
          and discover personalized solutions designed for your specific needs.
        </h2>
      </div>
      <div className="flex flex-col w-full md:flex-row md:justify-center gap-4">
        <Button className="text-white">Start Free Assessment</Button>
        <Button variant={"outline"}>Book Consultation</Button>
      </div>
      <div className="w-dvw overflow-hidden">
        <ScrollingCards data={content} />
      </div>
    </div>
  );
};

export default TakeFirstStep;
