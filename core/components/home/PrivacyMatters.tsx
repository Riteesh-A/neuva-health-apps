"use client";
import { cn } from "@/core/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const cards = [
  {
    Icon: "icons/ShieldCheck.svg",
    title: "End-to-end Encryption",
    description:
      "Your medical information is secured with advanced encryption, protecting your privacy throughout your care.",
  },
  {
    Icon: "icons/Package.svg",
    title: "Discreet Packaging",
    description:
      "Products arrive in plain, unmarked boxes with no indication of contents or our company name.",
  },
  {
    Icon: "icons/Invoice.svg",
    title: "Discreet Billing",
    description:
      "Your statements show only a generic company name, never revealing what you've purchased.",
  },
  {
    Icon: "icons/ShootingStar.svg",
    title: "100% Authentic",
    description:
      "All medications come directly from licensed U.S. pharmacies, guaranteed genuine and effective.",
  },
];

const PrivacyMatters = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-10 md:gap-20", className)}>
      <div className="flex flex-col gap-4 md:gap-8 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
          Your Privacy Matters
        </h1>
        <h2 className="font-extralight text-sm md:text-lg">
          We maintain strict confidentiality protocols at every touchpoint, from
          consultation to delivery, ensuring your personal health journey
          remains private.
        </h2>
      </div>
      <div className=" flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-10 w-full">
        {cards.map(({ Icon, title, description }, i) => (
          <Card key={i} className="p-0 border-0 shadow-none">
            <CardContent className="flex border-0 flex-col p-6 gap-2 items-start">
              <img src={Icon} alt={title} className="size-8" />
              <h1 className="font-semibold">{title}</h1>
              <p className="text-start font-extralight text-sm">
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
