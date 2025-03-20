import Marquee from "../container/marquee";
import { ScrollingCard, ScrollingCardProps } from "./scrolling-card";

export default function ScrollingCards({ data }: ScrollingCardProps) {
  return (
    <div className="w-full">
      <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((content, index) => (
          <ScrollingCard key={index} content={content} />
        ))}
      </Marquee>
    </div>
  );
}
