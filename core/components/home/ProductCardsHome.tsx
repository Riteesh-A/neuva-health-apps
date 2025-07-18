"use cache";
import { Accordion } from "@/core/components/product/product-description";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent, CardFooter } from "@/core/components/ui/card";
import { getProducts } from "@/core/lib/shopify";
import { ChevronRight } from "lucide-react";

export default async function ProductCards({ slug }: { slug: string }) {
  const shopifyProducts = await getProducts({ query: `tag:${slug}` });
  console.log("Fetching products for slug:", slug);
  console.log("Shopify Products:", shopifyProducts);

  return (
    <div className="flex flex-wrap justify-between w-full">
      {shopifyProducts.map((product, index) => (
        <Card
          key={index}
          className="p-0 gap-0 border-0 shadow-none overflow-hidden w-full md:w-1/2 h-full bg-transparent"
        >
          <CardContent className="p-4 md:p-6 pb-0 flex flex-col h-full relative z-0">
            <div className="flex flex-col justify-between">
              <h1 className="text-4xl text-[#42474F] font-bold">
                {product.title.replace(/weekly subscription \(\d+ doses\)/i, '').trim()}
              </h1>
              {/(weekly|monthly) subscription \((\d+) doses\)/i.test(product.title) && (
                <div>
                  <p className="text-lg text-gray-500 mt-1">
                    {product.title.toLowerCase().includes("weekly") ? "Weekly" : "Monthly"} Subscription
                  </p>
                  <p>
                    ( Total {" "}{product.title.match(/(\d+) doses/i)?.[1]} doses
                    )
                  </p>
                </div>
              )}

            </div>
            <div
              className="w-full bg-contain bg-bottom bg-no-repeat"
              style={{
                backgroundImage: `url(${product.featuredImage?.url || product.images[0]?.url})`,
                height: "200px", // Set a fixed height for mobile
              }}
            />
            <div className="inline-block bg-secondary text-foreground rounded-full p-2 px-4 w-fit font-semibold my-4 shadow-sm">
              Starting from {product.priceRange.minVariantPrice.currencyCode} {product.priceRange.minVariantPrice.amount}
            </div>
            <div>
              <Accordion product={product} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch p-4 md:p-6">
            <Button asChild>
              <a href={`/purchase/${product.handle}/about`}>Get Started <ChevronRight /> </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

