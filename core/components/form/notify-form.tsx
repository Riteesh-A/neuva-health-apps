"use client";

import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const NotifyForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // ✅ Replace with your Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // ✅ Replace with your Template ID
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.error("Thank you for subscribing!");
    } catch (err) {
      toast.error("Failed to send email");
    }

    setIsLoading(false);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-3"
    >
      <Input
        className="min-w-48 border-black bg-white"
        type="email"
        name="from_email"
        placeholder="Enter your email"
      />

      <Button type="submit">
        {isLoading && <Loader2 className="animate-spin size-4" />}
        Notify Me
      </Button>
    </form>
  );
};
