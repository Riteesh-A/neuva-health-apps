import { cn } from "@/core/lib/utils";
import { Card, CardContent } from "../../ui/card";

export interface Testimonial {
  name: string;
  image?: string;
  location: string;
  quote: { text: string; highlight?: boolean }[];
}

export interface TestimonialProps {
  data: Testimonial[];
}

export function TestimonialCard({
  testimonial: { image, location, name, quote },
}: {
  testimonial: Testimonial;
}) {
  return (
    <Card
      className="flex p-0 h-44 w-96 overflow-hidden rounded-xl bg-primary-98"
      key={name}
    >
      <CardContent className="p-0 flex items-center h-full">
        {/* <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div> */}
        <div className="flex flex-col p-4 gap-1 justify-between h-full">
          <p className="block text-base tracking-tight leading-6 text-foreground">
            "
            {quote.map(({ text, highlight }, i) => (
              <span key={i} className={cn(highlight && "text-primary-25")}>
                {text}
              </span>
            ))}
            "
          </p>
          <div className="flex flex-col justify-end gap-2">
            <h1 className="block text-xs font-bold text-foreground">{name}</h1>
            <h2 className="-mt-1 mb-1 block text-xs font-medium leading-loose text-muted-foreground">
              Founder of BAC
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
