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
      className="flex p-0 h-44 w-96 overflow-hidden rounded-xl bg-primary-94"
      key={name}
    >
      <CardContent className="p-0 flex items-center h-full">
        {/* <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div> */}
        <div className="flex flex-col p-4 gap-1 justify-between h-full">
          <p className="block text-xl md:text-lg font-bold tracking-tight leading-6 text-foreground">
            "
            {quote.map(({ text, highlight }, i) => (
              <span key={i} className={cn(highlight && "text-primary-25")}>
                {text}
              </span>
            ))}
            "
          </p>
          <div className="flex flex-col mt-2 justify-end gap-1">
            <h1 className="block text-xs font-bold text-foreground">{name}</h1>
            <h2 className=" mb-1 block text-xs font-medium leading-loose text-muted-foreground">
              {location}
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
