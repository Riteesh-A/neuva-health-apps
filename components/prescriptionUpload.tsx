"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/core/components/ui/button";
import { cn } from "@/core/lib/utils";
import router from "next/router";
import { useEffect, useState } from "react";

interface PrescriptionUploadProps {
  user: any;
  onScheduleConsultation?: () => void;
}

export function PrescriptionUpload({
  user,
  onScheduleConsultation,
}: PrescriptionUploadProps) {
  const [email, setEmail] = useState("");
  const [prescription, setPrescription] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (user?.email) setEmail(user.email);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !prescription) {
      setError("Email and prescription are required");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("prescription", prescription);

    try {
      const res = await fetch("/api/send-prescription", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  const handleScheduleConsultation = () => {
    if (onScheduleConsultation) {
      onScheduleConsultation();
    } else {
      // Fallback to direct navigation if no callback provided
      window.location.href =
        "https://book.healthplix.com/dr-dr-abhay-kr-rohatgi-general-physician-426-cmr-rd-hr";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen p-4 sm:p-6 md:p-8">
      <div className="bg-white border rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-center text-primary">
          Upload Your Prescription
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full space-y-5"
        >
          <div className="w-full mb-4 sm:mb-6">
            <Label className="block mb-1 sm:mb-2 text-base sm:text-lg font-medium text-gray-700">
              Email Address
            </Label>
            <Input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "w-full",
                error && !email && "border-red-500 animate-shake"
              )}
            />
          </div>
          <div className="w-full mb-4 sm:mb-6">
            <Label
              className="block mb-1 sm:mb-2 text-base sm:text-lg font-medium text-gray-700"
              htmlFor="prescription"
            >
              Do you have a prescription?
            </Label>
            <div
              className={cn(
                "border-2 border-dashed border-gray-300 rounded-lg p-3 sm:p-4 md:p-6 text-center hover:border-primary transition-colors cursor-pointer",
                error && !prescription && "border-red-500 animate-shake"
              )}
            >
              <Input
                type="file"
                id="prescription"
                name="prescription"
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                onChange={(e) => setPrescription(e.target.files?.[0] || null)}
              />
              <label htmlFor="prescription" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-1 sm:mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 sm:mt-1">
                    PDF, JPG, JPEG, PNG
                  </p>
                </div>
              </label>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                {prescription?.name || ""}
              </p>
            </div>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {!submitted && (
            <div className="w-full space-y-3 sm:space-y-4">
              <Button className="w-full" id="submit-prescription">
                Submit Prescription
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
              <Button
                className="w-full"
                onClick={handleScheduleConsultation}
                type="button"
              >
                Schedule Consultation Directly
              </Button>
              <h2 className="text-sm font-light text-center">
                and we will give you a prescription after your consultation.
              </h2>
            </div>
          )}
          {submitted && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md w-full">
              <p className="text-green-800 font-medium text-center">
                Prescription submitted successfully!
              </p>
              <Button
                className="mt-3 w-full"
                onClick={() => window.location.href = "/"}
                type="button"
              >
                Back to Home
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
