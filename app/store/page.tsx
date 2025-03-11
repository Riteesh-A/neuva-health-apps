import { Carousel } from "@/core/components/carousel";
import { ThreeItemGrid } from "@/core/components/grid/three-items";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-full">
        <ThreeItemGrid />
      </div>
      <Carousel />
    </div>
  );
}
