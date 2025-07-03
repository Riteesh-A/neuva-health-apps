'use client';

import { Button } from '@/core/components/ui/button';
import { CheckCircle, Clock, Info } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  status: 'success' | 'fail';
  date: string; // Example: "Thursday, April 10, 2025"
  startTime: string; // Example: "11:00 AM"
  endTime: string;   // Example: "11:15 AM"
  meetLink: string; // Optional, if you want to display the link
  setConsultationDataAction: Dispatch<SetStateAction<any>>;
  onClose?: () => void; 
}

export default function ConsultationConfirmation({
  status,
  date,
  startTime,
  endTime,
  meetLink,
  setConsultationDataAction,
  onClose
}: Props) {
  if (status === 'fail') {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow text-center space-y-4">
        <div className="text-4xl text-red-500">❌</div>
        <h2 className="text-xl font-semibold">Something Went Wrong</h2>
        <p className="text-sm text-gray-600">
          We couldn’t schedule your consultation right now. Please try booking again in a few minutes.
        </p>
        <Button className="w-full mt-4">Book Appointment Again</Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>

      <h2 className="text-xl font-semibold mb-1">All Set!</h2>
      <p className="text-sm text-gray-600 mb-4">
        Your consultation has been scheduled successfully. <br />
        We’ve sent confirmation details to your email.
      </p>
      {meetLink === '' ? (
        <div className="flex items-center justify-center mb-4">
          <svg className="animate-spin h-5 w-5 text-blue-600 mr-2" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          <span className="text-sm text-blue-600">Loading meeting link...</span>
          <span className="text-sm text-gray">Don't navigate away for a while</span>
        </div>
      ) : meetLink && (
        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-sm text-blue-600 underline">
            <a href={meetLink} target="_blank" rel="noopener noreferrer">
              Join your consultation here
            </a>
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const details = `Consultation Details:
      Date: ${date}
      Time: ${startTime} – ${endTime}
      Meeting Link: ${meetLink}`;
              navigator.clipboard.writeText(details);
            }}
          >
            Copy Meeting Details
          </Button>
        </div>
      )}

      {/* Appointment Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-left text-sm mb-5">
        <div className="flex items-center gap-2 font-medium mb-1">
          <Clock className="w-4 h-4 text-blue-500" />
          {date}
        </div>
        <div className="ml-6 text-gray-700">
          {startTime} – {endTime}
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex gap-2">
            <Info className="w-4 h-4 text-blue-400 mt-0.5" />
            You’ll receive a link to join the video consultation 15 minutes before your appointment.
          </div>
          <div className="flex gap-2">
            <Info className="w-4 h-4 text-blue-400 mt-0.5" />
            The doctor will review your information and discuss your treatment options.
          </div>
          <div className="flex gap-2">
            <Info className="w-4 h-4 text-blue-400 mt-0.5" />
            Your prescription will be processed immediately and your order will be shipped.
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col justify-between gap-3">
        <Button variant="outline" className="w-full">View Order Details</Button>
        <Button onClick={onClose} className="w-full" asChild>
      Go to Dashboard
    </Button>
      </div>

      <Button
        variant="link"
        className="text-xs text-blue-600 underline mt-4 cursor-pointer p-0 h-auto"
        onClick={() => setConsultationDataAction((prev: any) => ({ ...prev, status: 'unset' }))}
      >
        Edit Appointment Date & Time
      </Button>
    </div>
  );
}
