import ProductCardsHome from "@/core/components/home/ProductCardsHome";

export const metadata = {
  title: "Shop - Neuva Health",
  description: "Browse our selection of health and wellness products.",
  openGraph: {
    type: "website",
  },
};

export default function ShopPage() {
  const slug = "lose-weight";

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col items-center px-4 py-8 gap-6 md:px-10 md:py-10 md:gap-20 max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col items-center text-center w-full gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-medium w-full md:w-1/2 tracking-tight">
            Shop Our Products
          </h1>
          <p className="text-sm md:text-base font-medium text-muted-foreground">
            Discover our curated selection of health and wellness solutions
          </p>
        </div>
        <ProductCardsHome slug={slug} />
      </div>
    </div>
  );
}
