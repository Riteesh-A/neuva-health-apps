"use client";

import { useIsMobile } from "@/core/hooks/use-mobile";
import { cn } from "@/core/lib/utils";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FeatureCard, FeatureCardProps } from "../animata/hero/feature-card";
import { Button } from "../ui/button";

const team: FeatureCardProps["feature"][] = [
  {
    name: "Dr. John Doe",
    experience: "10+ Years",
    imageUrl: "/assets/doctor_1.jpeg",
    qualifications: "Elegant Swirling Glass Vase",
  },
  {
    name: "Dr. Jane Doe",
    experience: "10+ Years",
    imageUrl: "/assets/doctor_2.png",
    qualifications: "Elegant Swirling Glass Vase",
  },
  {
    name: "Dr. John Doe",
    experience: "10+ Years",
    imageUrl: "/assets/doctor_3.png",
    qualifications: "Elegant Swirling Glass Vase",
  },
];

const ExpertMedicalTeam = ({ className }: { className?: string }) => {
  const isMobile = useIsMobile();

  const cardWidth = 96 * 4;
  const angle = 6;
  const yOffset = isMobile ? 50 : -30;

  return (
    <section
      className={cn(
        "storybook-fix flex w-full flex-col items-center gap-4 py-10 md:mt-[100vh]",
        className
      )}
    >
      <motion.header
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="flex max-w-md md:max-w-xl flex-col items-center gap-2 md:gap-4 text-center"
      >
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
          Expert Medical Team
        </h1>
        <Balancer className="block text-sm md:text-lg font-extralight">
          Our board-certified physicians specialize in men's health and provide
          personalized care tailored to your specific needs.
        </Balancer>
      </motion.header>

      <div className="relative flex items-center md:mt-20 w-full justify-center gap-8 py-12 sm:flex-row sm:gap-0">
        <FeatureCard
          className="h-48 md:h-80 w-40 md:w-48"
          feature={team[0]!}
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
          className="h-60 md:h-96 w-48 md:w-56"
          feature={team[1]!}
          initial={{
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.4,
            },
          }}
          zIndexOffset={1}
        />

        <FeatureCard
          className="h-48 md:h-80 w-40 md:w-48"
          feature={team[2]!}
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

      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Button className="md:mt-20" variant={"outline"}>
          Book a Consultation
        </Button>
      </motion.div>
    </section>
  );
};

export default ExpertMedicalTeam;
