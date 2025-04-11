import { Separator } from "@/core/components/ui/separator";
import React from "react";
export default async function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
  <div className="flex flex-col md:h-[70vh] relative">{children}
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute w-96 h-96 bg-[#75A1D3] rounded-full z-[0] blur-[250px] opacity-50"
        style={{ top: "0%", left: "-10%" }}
      ></div>
      <div
        className="absolute w-[600px] h-[600px] bg-[#75A1D3] rounded-full z-0 blur-[250px] opacity-50"
        style={{ bottom: "-20%", right: "-20%" }}
      ></div>
    </div>
  </div>
  <Separator className="z-10"/>
  </>);
}
