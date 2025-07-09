import React from 'react';
export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700">Your purchase was successful.</p>
      <p className="text-sm text-gray-500 mt-2">We appreciate your business!</p>
    </div>
  );
}