"use client";

import { Slider } from "@/core/components/ui/slider";
import { useState } from "react";

export default function WeightSlider() {
  const [currentWeight, setCurrentWeight] = useState(138); // 138 kgs instead of 305 lbs

  // Calculate potential weight loss as 22% of current weight in kgs
  const calculateWeightLoss = (weight: number) => {
    const weightLossInKg = weight * 0.22; // 22% of weight in kgs
    return Math.round(weightLossInKg); // Round to nearest whole number
  };

  const handleWeightChange = (value: number[]) => {
    setCurrentWeight(value[0] ?? 0);
  };

  const potentialWeightLoss = calculateWeightLoss(currentWeight);

  return (
    <div className="flex flex-col items-center md:py-20 space-y-6 p-6 min-h-[300px] justify-center">
      <h1 className="type-display-md">How much weight could you lose?</h1>
      {/* Current Weight Display */}
      <div className="text-center">
        <p className="text-gray-800 text-lg font-medium mb-2">
          Your current weight:
        </p>
        <p className="text-gray-900 text-4xl font-bold">{currentWeight} kg</p>
      </div>

      {/* Weight Slider */}
      <div className="w-full max-w-md">
        <Slider
          defaultValue={[138]}
          value={[currentWeight]}
          onValueChange={handleWeightChange}
          min={50}
          max={200}
          step={1}
          className="w-full"
        />
      </div>

      {/* Weight Loss Display */}
      <div className="bg-[#2F5F8D] rounded-full px-8 py-4 gap-2 flex items-center justify-between min-w-[280px]">
        <div className="text-white text-center">
          You could easily lose up to:
        </div>
        <div className="text-white text-2xl font-bold">
          <span className="underline">{potentialWeightLoss}</span> kg
        </div>
      </div>
    </div>
  );
}
