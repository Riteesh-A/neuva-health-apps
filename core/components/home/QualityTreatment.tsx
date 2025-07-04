"use client";

import { cn } from "@/core/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const cards = [
  {
    imageUrl: "/assets/first_medicine.png",
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
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
          Quality Treatment <br />
          Options
        </h1>
        <h2 className="font-extralight text-sm md:text-lg">
          FDA-approved medications & evidence-based treatments selected for
          maximum effectiveness.
        </h2>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 relative">
      <div className="absolute -top-14 -right-14 z-10">
          <img 
            src="/icons/star_fda.png" 
            alt="Quality Badge" 
            className="w-32 h-32" 
          />
        </div>
        {cards.map((card, index) => (
          <Card
        key={index}
        className="p-0 overflow-hidden w-60 lg:w-80 aspect-[3/4] bg-primary-98 "
          >
       
        <CardContent
          className="p-6 flex flex-col h-full relative z-0 overflow-hidden"
        >
          <div 
            className="absolute inset-0 z-[-1]"
            style={{
              backgroundImage: `url(${card.imageUrl})`,
              backgroundSize: index === 0 ? '130%' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: index === 0 ? 'translateY(50px)' : 'none',
            }}
          />
          <div className="flex flex-col h-full">
            <h1 className="text-xl font-bold mb-4">{card.title}</h1>
            <h2 className="text-sm font-light">{card.description}</h2>
          </div>
        </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <Button asChild variant="outline">
          <a href="/home/have-better-sex">Explore Products</a>
        </Button>
      </div>
    </div>
  );
};

export default QualityTreatment;
