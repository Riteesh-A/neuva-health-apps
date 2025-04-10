import React from "react";

export default async function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col flex-1 h-full relative">{children}</div>;
}
