"use client";

import emailjs from "emailjs-com";
import { useRef } from "react";

export default function EmailForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // ✅ Replace with your Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // ✅ Replace with your Template ID
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 p-4 border rounded-lg"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send Email
      </button>
    </form>
  );
}
