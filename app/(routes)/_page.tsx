import { NotifyForm } from "@/core/components/form/notify-form";
import { Logo } from "@/core/components/logo";
import { youngSerif } from "@/core/fonts";
import { copyrightName, copyrightYear } from "@/core/lib/constants";
import { cn } from "@/core/lib/utils";

export default async function HomePage() {
  return (
    <div className="flex flex-col h-screen max-h-screen bg-[url(/bg.png)] bg-bottom bg-cover bg-no-repeat bg-fixed">
      <header className="flex gap-4 p-4 lg:px-6 justify-between">
        <Logo />
      </header>
      <div className="flex-grow flex flex-col gap-28 justify-center items-center px-4 lg:px-6">
        <div className="flex flex-col gap-2 w-full md:max-w-screen-lg">
          <h1 className={cn("text-7xl", youngSerif.className)}>neuva</h1>
          {/* <Separator className="bg-sidebar-accent-foreground" /> */}
          <div className="flex self-start relative w-full">
            {/* First Sentence */}
            <p className="absolute left-0 overflow-hidden whitespace-nowrap text-base md:text-2xl animate-[typewriter-1_6s_steps(30)_infinite]">
              Making India Healthier and Happier
              <span className="border-r-2 border-white animate-[blink_0.7s_steps(2)_infinite]">
                &nbsp;
              </span>
            </p>

            {/* Second Sentence */}
            <p className="absolute left-0 overflow-hidden whitespace-nowrap text-base md:text-2xl animate-[typewriter-2_6s_steps(20)_infinite]">
              We are launching soon!
              <span className="border-r-2 border-white animate-[blink_0.7s_steps(2)_infinite]">
                &nbsp;
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-start gap-3 w-full md:max-w-screen-lg">
          <h1 className="text-primary">Subscribe here for latest updates</h1>
          <NotifyForm />
        </div>
      </div>
      <footer className="text-sm text-muted-foreground">
        <div className="px-4 lg:px-6 py-6 text-sm">
          <div className="flex items-center justify-center text-center text-primary">
            <p>
              &copy; {copyrightYear} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith(".")
                ? "."
                : ""}{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
}
