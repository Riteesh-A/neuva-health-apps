"use client";

import { Button } from "@/core/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border p-8 md:p-12">
      <h2 className="text-xl font-bold">Oh no!</h2>
      <p className="my-2">
        There was an issue with our storefront. This could be a temporary issue,
        please try your action again.
      </p>
      <Button
        className="mx-auto mt-4 flex w-full items-center justify-center bg-blue-600 p-4 tracking-wide hover:opacity-90"
        onClick={() => reset()}
      >
        Try Again
      </Button>
    </div>
  );
}
