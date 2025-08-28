"use client";

import { useState } from "react";
import { PrescriptionUpload } from "./prescriptionUpload";
import { ScheduleConsultation } from "./scheduleConsultation";

interface ConsultationFlowProps {
  user: any;
}

export function ConsultationFlow({ user }: ConsultationFlowProps) {
  const [currentStep, setCurrentStep] = useState<
    "prescription" | "consultation"
  >("prescription");

  const handleScheduleConsultation = () => {
    setCurrentStep("consultation");
  };

  const handleBackToPrescription = () => {
    setCurrentStep("prescription");
  };

  if (currentStep === "consultation") {
    return <ScheduleConsultation onBack={handleBackToPrescription} />;
  }

  return (
    <PrescriptionUpload
      user={user}
      onScheduleConsultation={handleScheduleConsultation}
    />
  );
}
