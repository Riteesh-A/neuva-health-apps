"use client";

import { cn } from "@/core/lib/utils";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
const HeroText = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-4 py-10 md:p-20 gap-8 max-w-screen-md self-center text-center"
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
        className="flex flex-col text-3xl md:text-6xl font-semibold"
      >
        <h1 className="whitespace-nowrap">Better Performance.</h1>
        <h1 className="whitespace-nowrap">Expert Care.</h1>
      </motion.header>
      <motion.header
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        className="text-sm md:text-lg font-light"
      >
        Connect with licensed doctors for personalized sexual health solutions,
        delivered discreetly to your door.
      </motion.header>

      <motion.header
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        className="flex flex-col w-full md:w-auto md:flex-row justify-start gap-4"
      >
        <Button asChild variant={"default"}>
          <a href="/home/assessment">Start Free Assessment</a>
        </Button>
        <Button variant={"outline"}>Explore Products</Button>
      </motion.header>
    </div>
  );
};

export default HeroText;
