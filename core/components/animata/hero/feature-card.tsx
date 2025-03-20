import { cn } from "@/core/lib/utils";
import {
  HTMLMotionProps,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode } from "react";

export interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: {
    name: ReactNode;
    experience: string;
    imageUrl: string;
    qualifications: string;
  };
  zIndexOffset?: number;
}

export function FeatureCard({
  feature,
  className,
  zIndexOffset = 0,
  ...props
}: FeatureCardProps) {
  const { name, experience, qualifications, imageUrl } = feature;
  const springValue = useSpring(0, {
    bounce: 0,
  });
  const zIndex = useTransform(
    springValue,
    (value) => +Math.floor(value * 10) + 10 + zIndexOffset
  );
  const scale = useTransform(springValue, [0, 1], [1, 1.3]);

  const content = (
    <>
      <img
        src={imageUrl}
        alt=""
        className="-z-1 absolute inset-0 h-full w-full object-cover"
      />
      <div className="flex flex-col items-start justify-end h-full p-4 bg-black/30 text-white">
        <h1 className="text-[8px] md:text-sm font-semibold">{name}</h1>
        <h1 className="text-[7px] md:text-sm">{experience}</h1>
      </div>
    </>
  );

  const containerClassName = cn(
    "relative flex h-64 w-48 md:scale-150 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl",
    className
  );

  return (
    <motion.div
      onMouseEnter={() => springValue.set(1)}
      onMouseLeave={() => springValue.set(0)}
      style={{
        zIndex,
        scale,
      }}
      className={cn(containerClassName, "flex border-6 border-blue-100")}
      {...props}
    >
      {content}
    </motion.div>
  );
}
