"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";

const schema = z.object({
  from_email: z.string().email(),
});

type InputType = z.infer<typeof schema>;

export const NotifyForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<InputType>({
    resolver: zodResolver(schema),
    defaultValues: { from_email: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const sendEmail = async (values: InputType) => {
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.error("Thank you for subscribing!");
      form.reset();
    } catch (err) {
      toast.error("Failed to send email");
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(sendEmail)}
        className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-3"
      >
        <FormField
          name="from_email"
          control={form.control}
          render={({ field }) => (
            <Input
              className="min-w-48 border-black bg-white"
              type="email"
              placeholder="Enter your email"
              {...field}
            />
          )}
        />

        <Button type="submit">
          {isLoading && <Loader2 className="animate-spin size-4" />}
          Notify Me
        </Button>
      </form>
    </Form>
  );
};
