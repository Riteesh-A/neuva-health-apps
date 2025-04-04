"use client";

import { Logo } from "@/core/components/logo";
import { Button, buttonVariants } from "@/core/components/ui/button";
import { Separator } from "@/core/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/core/components/ui/sheet";
import { cn } from "@/core/lib/utils";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const items = [
  { icon: "fas fa-male", text: "10,000+ Men Helped" },
  { icon: "fas fa-stethoscope", text: "Licensed Doctors" },
  { icon: "fas fa-box", text: "Discreet Delivery" },
  { icon: "fas fa-heartbeat", text: "Comprehensive Care" },
  { icon: "fas fa-user-md", text: "Expert Advice" },
  { icon: "fas fa-shield-alt", text: "Privacy Guaranteed" },
  { icon: "fas fa-pills", text: "Quality Medication" },
  { icon: "fas fa-phone", text: "24/7 Support" },
];

const links = [
  { text: "Home", href: "#" },
  { text: "Shop", href: "#" },
  { text: "How it works?", href: "#" },
  { text: "About Neuva", href: "#" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) setIsScrolled(true);
    else setIsScrolled(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="flex flex-col z-30">
      <div
        className={cn(
          "flex items-center h-10 p-2 px-4 bg-blue-100 transition-all duration-300",
          isScrolled ? "opacity-0 h-0" : "opacity-100"
        )}
      >
        <h1 className="whitespace-nowrap md:px-4">Why Neuva?</h1>
        <Separator
          orientation="vertical"
          className="ml-2 h-4 w-1 bg-muted-foreground"
        />
        <div className="relative w-11/12 overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll space-x-16 w-max text-primary-25">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-16">
                {items.map((item, i) => (
                  <span key={i} className="flex items-center space-x-1">
                    <i className={item.icon} />
                    <span>{item.text}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "flex items-center max-w-screen-xl px-4 py-3 md:p-4 md:px-14 w-full self-center justify-between"
        )}
      >
        <div className="flex items-center gap-[60px]">
          <Logo className="text-sm md:text-xl leading-4 md:leading-5" />
          <div className="hidden md:flex items-center">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="p-3 lg:px-5 whitespace-nowrap font-medium"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size={"lg"} className="hidden md:flex">
            Book Free Consultation
          </Button>
          <Button size={"lg"} variant={"outline"}>
            Sign In
          </Button>
          <MobileMenu className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ className }: { className?: string }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className={className} />
      </SheetTrigger>
      <SheetContent className="gap-0">
        <SheetHeader>
          <div className="flex">
            <Logo />
          </div>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col flex-1 p-4 gap-2">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-base justify-start"
              )}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <Separator />
        <SheetFooter>
          <Button>Book Free Consultation</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
