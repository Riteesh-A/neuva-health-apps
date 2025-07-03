'use client';

import { Button } from '@/core/components/ui/button';
import { Clock } from 'lucide-react';

interface PendingKYCProps {
  onClose?: () => void; // Optional callback to close the form
}

export default function PendingKYC({ onClose }: PendingKYCProps) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow text-center">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
          <Clock className="w-6 h-6" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-lg font-semibold mb-1">KYC Under Review</h2>
      <p className="text-sm text-gray-600 mb-4">
        We’ve received your documents and they’re being reviewed by our team.
        <br />
        This usually takes less than 24 hours.
      </p>

      {/* Info Block */}
      <div className="bg-yellow-50 border border-yellow-200 text-left p-4 rounded-md text-sm space-y-2 mb-6">
        <p>🔍 We’re verifying your identity to ensure safe and compliant prescriptions.</p>
        <p>📧 You’ll be notified by email and SMS once your KYC is approved.</p>
        <p>⏳ In the meantime, feel free to browse or update your profile details.</p>
      </div>

      {/* Optional Navigation */}
      <Button onClick={onClose} className="w-full" asChild>
        Go to Dashboard
      </Button>
      {onClose && (
        <Button variant="ghost" className="mt-4 w-full" onClick={onClose}>
          Close
        </Button>
      )}
    </div>
  );
}
