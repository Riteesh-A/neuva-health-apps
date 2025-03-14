import { companyName } from "@/site-config";
import { youngSerif } from "../fonts";
import { cn } from "../lib/utils";

export const Logo = () => {
  return (
    <a
      href="/"
      className={cn(
        "flex flex-col text-2xl lowercase font-light leading-6",
        youngSerif.className
      )}
    >
      {companyName.split(" ").map((word, index) => (
        <span key={index} className="block">
          {word}
        </span>
      ))}
    </a>
  );
};
