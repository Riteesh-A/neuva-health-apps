import Marquee from "../container/marquee";
import type { TestimonialProps } from "./testimonial-card";
import { TestimonialCard } from "./testimonial-card";

export default function ScrollingTestimonials({ data }: TestimonialProps) {
  return (
    <div className="w-full">
      <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Marquee>

      <Marquee
        reverse
        className="[--duration:25s]"
        pauseOnHover
        applyMask={false}
      >
        {data.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Marquee>

      <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Marquee>
    </div>
  );
}
