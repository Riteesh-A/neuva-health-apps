"use client";

import { Logo } from "@/core/components/logo";
import { Button, buttonVariants } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { cn } from "@/core/lib/utils";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

const links = [
  {
    category: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    category: "Support",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-10 py-10 md:py-20 px-4 md:px-10 max-w-screen-xl self-center w-full">
      <div className="flex flex-col gap-3">
        <Logo />
        <div className="flex items-center gap-3 text-black/60">
          <Link href={"#"}>
            <IoLogoFacebook className="size-8" />
          </Link>
          <Link href={"#"}>
            <FaInstagram className="size-8" />
          </Link>
          <Link href={"#"}>
            <FaXTwitter className="size-8" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:grid grid-cols-4 gap-10 w-full">
        {links.map(({ category, links }, i) => (
          <div key={i} className="flex flex-col md:items-center">
            <div key={i} className="flex flex-col gap-4">
              <h1 className="text-sm text-primary">{category}</h1>
              <div className="flex flex-col">
                {links.map(({ name, href }, j) => (
                  <Link
                    key={j}
                    href={href}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "p-0 justify-start text-base"
                    )}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="col-span-2 flex flex-col gap-2">
          <h1 className="text-sm">Subscribe to our Newsletter</h1>
          <h2 className="font-light">
            Stay updated with our latest products and offers.
          </h2>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <Input type="text" />
            <Button size={"sm"}>Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
