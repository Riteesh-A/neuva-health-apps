"use client";
import { cn } from "@/core/lib/utils";
import { Box, CreditCard, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const cards = [
  {
    Icon: ShieldCheck,
    title: "End-to-end Encryption",
    description:
      "Your medical information is secured with advanced encryption, protecting your privacy throughout your care.",
  },
  {
    Icon: Box,
    title: "Discreet Packaging",
    description:
      "Products arrive in plain, unmarked boxes with no indication of contents or our company name.",
  },
  {
    Icon: CreditCard,
    title: "Discreet Billing",
    description:
      "Your statements show only a generic company name, never revealing what you've purchased.",
  },
  {
    Icon: Sparkles,
    title: "100% Authentic",
    description:
      "All medications come directly from licensed U.S. pharmacies, guaranteed genuine and effective.",
  },
];

const PrivacyMatters = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-20", className)}>
      <div className="flex flex-col gap-8 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl tracking-tight">
          Your Privacy Matters
        </h1>
        <h2 className="font-extralight text-lg">
          We maintain strict confidentiality protocols at every touchpoint, from
          consultation to delivery, ensuring your personal health journey
          remains private.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-10 w-full">
        {cards.map(({ Icon, title, description }, i) => (
          <Card key={i} className="p-0">
            <CardContent className="flex flex-col p-6 gap-4 items-start">
              <Icon className="size-8" />
              <h1>{title}</h1>
              <p className="text-start font-extralight text-xs">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-col">
        <Button variant={"outline"}>Start Free Assessment</Button>
      </div>
    </div>
  );
};

export default PrivacyMatters;
