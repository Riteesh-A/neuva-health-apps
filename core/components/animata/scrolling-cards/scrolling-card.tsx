import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../../ui/card";

export interface ScrollingCard {
  stat: { statLabel: string; statValue: number };
  description: string;
  image: string;
}

export interface ScrollingCardProps {
  data: ScrollingCard[];
}

export function ScrollingCard({
  content: {
    stat: { statLabel, statValue },
    description,
    image,
  },
}: {
  content: ScrollingCard;
}) {
  return (
    <Card className="flex p-0 h-96 aspect-[3/4] overflow-hidden rounded-xl bg-[#E3EDFB]">
      <CardContent
        className="p-0 flex flex-col h-full relative z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex flex-col p-8 gap-1 z-10 h-full justify-between">
          <div className="flex flex-col h-full backdrop-blur-md p-4 text-white bg-gray-700/30 justify-between border border-white rounded-lg shadow-2xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <h1 className="text-4xl">{statValue}</h1>
                <ArrowUp />
              </div>
              <h1 className="font-extralight text-xs">{statLabel}</h1>
            </div>
            <div className="flex flex-col gap-2 text-center text-sm font-light">
              <Image alt="stat-graph" fill src={"/assets/stat-graph.svg"} />
              {description}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
