"use client";

import { cn } from "@/core/lib/utils";
import { Card, CardContent } from "../ui/card";

const cards = [
  {
    imageUrl: "/assets/quality-treatment-1.png",
    title: "Neuva Extend",
    description: "Starting from $10.50",
  },
  {
    imageUrl: "/assets/quality-treatment-2.png",
    title: "Neuva Relief",
    description: "Starting from $10.50",
  },
  {
    imageUrl: "/assets/quality-treatment-3.png",
    title: "Neuva Balance",
    description: "Starting from $10.50",
  },
];

const QualityTreatment = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-20", className)}>
      <div className="flex flex-col gap-8 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl tracking-tight">
          Quality Treatment <br />
          Options
        </h1>
        <h2 className="font-extralight text-lg">
          FDA-approved medications & evidence-based treatments selected for
          maximum effectiveness.
        </h2>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="p-0 overflow-hidden w-80 aspect-[3/4] bg-[#FCF9F9]"
          >
            <CardContent
              className="p-6 flex flex-col h-full relative z-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.imageUrl})`,
              }}
            >
              <div className="flex flex-col justify-between">
                <h1 className="text-xl">{card.title}</h1>
                <h2 className="text-xs font-extralight">{card.description}</h2>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QualityTreatment;
