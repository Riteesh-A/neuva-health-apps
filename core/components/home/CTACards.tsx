"use client";

import { cn } from "@/core/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const cardDataByPath: Record<string, Array<{
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  url: string;
}>> = {
  
  "/home/have-better-sex": [
    {
        title: "Tackle Anxiety",
        subtitle: "Answer a few questions about your \nhealth in just 3 minutes.",
        buttonText: "Explore Products",
        image: "/assets/card_bg_1.jpeg",
        url: "/home/tackle-anxiety",
      },
      {
        title: "Lose weight",
        subtitle: "Answer a few questions about your \nhealth in just 3 minutes.",
        buttonText: "Explore Products",
        image: "/assets/card_bg_2.jpeg",
        url: "/home/lose-weight",
      },
  ],
  "/home/lose-weight": [
    {
        title: "Tackle Anxiety",
        subtitle: "Answer a few questions about your health \nin just 3 minutes.",
        buttonText: "Explore Products",
        image: "/assets/card_bg_1.jpeg",
        url: "/home/tackle-anxiety",
      },
      {
        title: "Have Longer Sex",
        subtitle: "Improve stamina and confidence with \npersonalized solutions.",
        buttonText: "Explore Products",
        image: "/assets/bg-bed-couple.jpg",
        url: "/home/have-better-sex",
      },
  ],
  "/home/tackle-anxiety": [
    {
        title: "Have Longer Sex",
        subtitle: "Improve stamina and confidence with \npersonalized solutions.",
        buttonText: "Explore Products",
        image: "/assets/bg-bed-couple.jpg",
        url: "/home/have-better-sex",
      },
      {
        title: "Lose weight",
        subtitle: "Answer a few questions about your \nhealth in just 3 minutes.",
        buttonText: "Explore Products",
        image: "/assets/card_bg_2.jpeg",
        url: "/home/lose-weight",
      },
  ],
  "/home/regrow-hair": [
    {
        title: "Have Longer Sex",
        subtitle: "Improve stamina and confidence with \npersonalized solutions.",
        buttonText: "Explore Products",
        image: "/assets/bg-bed-couple.jpg",
        url: "/home/have-better-sex",
      },
      {
        title: "Tackle Anxiety",
        subtitle: "Answer a few questions about your health \nin just 3 minutes.",
        buttonText: "Explore Products",
        image: "/assets/card_bg_1.jpeg",
        url: "/home/tackle-anxiety",
      },
  ],
  "/home": [
    
  ],
};
const CTACards = ({ className, id }: { className?: string; id?: string }) => {
  const pathname = usePathname();
  let cards = cardDataByPath[pathname] || [];
  if (cards.length === 0 && pathname.startsWith("/purchase/")) {
    cards = cardDataByPath["/home/have-better-sex"] || [];
  }
  return (
    <div id={id||""} className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6 p-6", className)}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden shadow-lg group md:h-[750px]"
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 md:w-[570px] md:h-[750px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-end text-center p-6 text-white items-center">
            <h2 className="text-5xl font-bold">{card.title}</h2>
            <p className="mt-6 text-lg whitespace-pre-line font-light">{card.subtitle}</p>
            <Button
              asChild
              variant={"default"}
              className="w-fit mt-6 bg-white text-black"
            >
              <a href={card.url || "#"}>{card.buttonText}</a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CTACards;