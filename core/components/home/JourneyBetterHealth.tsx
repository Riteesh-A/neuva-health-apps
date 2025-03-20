"use client";

import { cn } from "@/core/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const cards = [
  {
    title: "Have longer sex",
    image:
      "https://s3-alpha-sig.figma.com/img/4289/6577/8583bfc1a2ede6f5372b854ef2c8c2cd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hs2-tC2wt~PdQ5Bb2vPV11f8NhcZ2XudjUv9bSfZXNeTBWWLS3O~RdMpFCWcE~QT2gtbN32UgUIX9niHJcdgTVHq4F~yn88oLMJCyEiXDy6FLc589ztAfJVnXgJwsDT7t-yAreEsLWwD77uwQyVyoEDJzukIUoRV0hafRcYzDFtyKsEfszwkoYulRbXMCi1vIaizUVewKW04JMzrdCeVEdceabBJjC7X-grGIOKyJsYnUpc4nBMsjL43lxCm3Rb-belWEGBCHUKl3A7oWwJ5JGlAJUkesBFcm-7WqVDib43W~NJhO7RZ03iy5jPFiLDf2Apg-4bxrSDY-YLT6EIsCQ__",
    description: "Improve stamina and confidence with personalized solutions.",
    buttonLabel: "Get Started",
    href: "#",
  },
  {
    title: "Lose weight",
    image:
      "https://s3-alpha-sig.figma.com/img/c7e1/b758/b832df8a58cfef1039e364d8ea41d24a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UbND9auF3LNR88Lb8wvdfafyl72ebU9IR678TeOvacnqAL092ZxaBxR7rQDSlaXgzSfSIpl2uWzaQqrcxyPHUp-xO8Jziyb~uB3~wf3Gu6alZQ8Mcf2vaZLB3vMpb7YuajanRhrgKLEgktYw8M9cpUpNoz~-U2Rnkl~iyGJ0ZdQ5iggUpC0BaQ1CAb4YXRNXtLQHUT3DUoYEjZZj7ixHoH8Y~FgzHKHP6sNpfE-DTrZWPLrm4I5fs0h-FY64DDikB22f6po22ryIQRy~a4g~hiaCVIrt~G9Nv1TnbX8eta7jJzlYkGVdvghUpFWHjTVYvJV6k~gK~Jvy5HoqTJN-ag__",
    description: "Answer a few questions about your health in just 3 minutes.",
    buttonLabel: "Start your Journey",
    href: "#",
  },
  {
    title: "Tackle Anxiety",
    image:
      "https://s3-alpha-sig.figma.com/img/ffba/9dfc/d03933ec1d02004400998a83ed625ea3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p9NeT2gY6Ktqtc~dv~7Q9WITxx3v6JXR6IqiojwlmdekdmcXVMBCGbT28wMLsxahCLrEKKGwscWKqG4nUyu1Xt7mSVrEp2hkxJkDHy5EPm1EnDKRa1aLYIEVB7ftIoEURsAEzET7RkUtxZoEhGZ6k1vmqCfKjBLdFbgQzRPwObtbUoUtnAxFb016Kw~scIjw3fPxke7-P8S8aloWrFGaUr7erwOq01qGs7AS9Ly3GoNN3ga3c9kKYjgJER3mG~ddNZfB9-JpQFdNhkS9A-nTLUyruKU7FNgSQT3ELHiJQVGMcDmhfl7iebzR87BY0av6Cb-FydHjDNN7vZVa7jzidQ__",
    description: "Answer a few questions about your health in just 3 minutes.",
    buttonLabel: "Start your Journey",
    href: "#",
  },
  {
    title: "Regrow Hair",
    image:
      "https://s3-alpha-sig.figma.com/img/4a5f/4504/088d94a4dd8f0231562ff38322d3875d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pYNbcNZhC2-YMYOhf7huQhjvaEg9dD3xFODX6pWx7ZXXMHsJDcHBA-uIAYwovHOxQuZw4WIISoQW6qAROyFkxAtDyym5webZinf7K5PrBJ0d05JixTvKLZjLhORrNraRlpDzPTU2D5hO~p1CS~4Mn5rWkEyCfka5RNXbPKfgQhEkbuxmbTtXQm8SGATu2IV75qBMw8vxbzbYR61fvd5xQckzx3lMYRfx~uomfUjS7Xf0EGD30bqOLQ261GUYrTXLWET7CgBerqzJCu4SJzzHWC7SOyCGodJdhpRoEmn4-jALvwuEZm1Vjgsy8RmdZfXF3NJvDYzdOSJamGPPXn-0Vg__",
    description: "Answer a few questions about your health in just 3 minutes.",
    buttonLabel: "Start your Journey",
    href: "#",
  },
];

const JourneyBetterHealth = ({ className }: { className?: string }) => {
  return (
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
      className={cn("flex flex-col py-10 md:py-20 items-center", className)}
    >
      <div className="flex flex-col gap-8 text-center">
        <div className="text-4xl md:text-6xl font-semibold tracking-tight">
          <h1>Your Journey to</h1>
          <h1>Better Health</h1>
        </div>
        <div className="text-lg font-extralight max-w-screen-md">
          Our comprehensive care approach guides you from initial consultation
          to ongoing treatment, with physician support at every stage of your
          wellness journey.
        </div>
      </div>
      <div className="flex flex-col relative w-full h-[50vw] z-10">
        <Image
          src={"/assets/journey_to_better_health.svg"}
          alt="wavy-bg"
          fill
          className="object-contain z-0"
        />
      </div>
      <div className="flex flex-col md:grid grid-cols-2 max-w-screen-xl md:h-[90vh] w-full px-4 md:px-10 gap-5">
        {cards.map((card, index) => (
          <Card
            key={index}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            className={cn(
              "relative bg-cover text-white flex items-center justify-between p-4 overflow-hidden z-0",
              index === 0 && "row-span-3"
            )}
          >
            <CardContent
              className={cn(
                "flex flex-col w-full h-full p-6",
                index === 0 && "justify-end"
              )}
            >
              <div className="absolute inset-0 bg-black/40 bg-opacity-50 -z-10" />
              <div
                className={cn(
                  "flex flex-col items-start w-full gap-6",
                  index === 0 && "md:items-center"
                )}
              >
                <h1 className="font-semibold text-3xl md:text-5xl">
                  {card.title}
                </h1>
                <h1 className="text-base">{card.description}</h1>
                <Button
                  variant={index === 0 ? "default" : "outline"}
                  className={cn(
                    index === 0
                      ? "bg-white text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground"
                      : "bg-transparent"
                  )}
                >
                  {card.buttonLabel}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.header>
  );
};

export default JourneyBetterHealth;
