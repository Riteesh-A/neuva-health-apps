"use client";

import { cn } from "@/core/lib/utils";
import React from "react";
import FeatureCard from "../animata/hero/product-features";

const ExpertMedicalTeam: React.FC = () => {
  const cardWidth = 48 * 4; // w-48 x 4
  const angle = 6;
  const yOffset = 30;

  return (
    <>
      <div className={cn("container mx-auto py-12")}>
        <h1 className="text-[60px] text-center">Expert Medical Team</h1>
        <p className=" text-[18px] text-center mt-2 mb-8 px-96 font-light">
          Our board-certified physicians specialize in men's health and provide
          personalized care tailored to your specific needs.
        </p>
        <div className="flex justify-between space-x-4">
          <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:flex-row sm:gap-0">
            <FeatureCard
              feature={{
                name: "Dr. Amit Sharma",
                imageUrl: "/assets/doctor_1.jpeg",
                qualifications: "MBBS, MD | Men's Health",
                experience: "10+ Years",
              }}
              initial={{
                x: cardWidth,
                y: yOffset,
                opacity: 0,
                rotate: 0,
                scale: 0.9,
              }}
              animate={{
                x: yOffset,
                y: 10,
                opacity: 1,
                scale: 0.95,
                rotate: -angle,
                transition: {
                  type: "spring",
                  delay: 0.8,
                },
              }}
            />

            <FeatureCard
              feature={{
                name: "Dr. Priya Patel",
                qualifications: "MBBS, MD | Mental Health Expert",
                imageUrl: "/assets/doctor_2.png",
                experience: "10+ Years",
              }}
              initial={{
                y: yOffset,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: 0.4,
                },
              }}
              zIndexOffset={1}
            />

            <FeatureCard
              feature={{
                name: "Dr. Amit Sharma",
                qualifications: "MBBS, MD | Men's Health",
                imageUrl: "/assets/doctor_3.png",
                experience: "10+ Years",
              }}
              initial={{
                x: -cardWidth,
                y: yOffset,
                opacity: 0,
                rotate: 0,
                scale: 0.9,
              }}
              animate={{
                x: -yOffset,
                y: 10,
                opacity: 1,
                rotate: angle,
                scale: 0.95,
                transition: {
                  type: "spring",
                  delay: 0.6,
                },
              }}
            />
          </div>
          {/* <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                        <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between ">
                            <div className="flex-grow"></div>
                            <div className="items-start text-left">
                                <h2 className="text-xl">Dr. Amit Sharma</h2>
                                <p className="">MBBS, MD | Men's Health</p>
                                <p className="font-light">10+ Years</p>
                            </div>
                        </div>
                    </div> 
                    <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between ">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left">
                            <h2 className="text-xl">Dr. Priya Patel</h2>
                            <p className="">MBBS, MD | Men's Health</p>
                            <p className="font-light">10+ Years</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between ">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left">
                            <h2 className="text-xl">Dr. Amit Sharma</h2>
                            <p className="">MBBS, MD | Men's Health</p>
                            <p className="font-light">10+ Years</p>
                        </div>
                    </div>
                </div> */}
        </div>
        <div className="text-center mt-8">
          <button className="border font-bold text-[18px] border-gray-500 text-gray-500 py-3 px-5 rounded-full">
            Book a Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default ExpertMedicalTeam;
