import { youngSerif } from "../fonts";
import { cn } from "../lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  let companyName = "Neuva Health";
  return (
    <a
      href="/"
      className={cn(
        "flex flex-col text-2xl lowercase font-light leading-6",
        youngSerif.className,
        className
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
