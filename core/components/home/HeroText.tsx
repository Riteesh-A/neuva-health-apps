"use client";

import { cn } from "@/core/lib/utils";
import { Button } from "../ui/button";

const HeroText = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-4 py-10 md:p-20 gap-8 max-w-screen-md self-center text-center"
      )}
    >
      <div className="flex flex-col text-3xl md:text-6xl font-semibold">
        <h1 className="whitespace-nowrap">Better Performance.</h1>
        <h1 className="whitespace-nowrap">Expert Care.</h1>
      </div>
      <p className="text-sm md:text-lg font-light">
        Connect with licensed doctors for personalized sexual health solutions,
        delivered discreetly to your door.
      </p>
      <div className="flex flex-col w-full md:w-auto md:flex-row justify-start gap-4">
        <Button className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">
          Start Free Assessment
        </Button>
        <Button className="bg-[#D7DDE4] text-gray-700 py-2 px-4 rounded-full">
          View Products
        </Button>
      </div>
    </div>
  );
};

export default HeroText;
