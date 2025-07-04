"use cache";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent, CardFooter } from "@/core/components/ui/card";
import { getProducts } from "@/core/lib/shopify";

export default async function ProductCards({slug}:{slug: string}) {
    const shopifyProducts = await getProducts({ query: `tag:${slug}` });
    console.log("Fetching products for slug:", slug);
    console.log("Shopify Products:", shopifyProducts);

    return(
        <div className="flex flex-wrap justify-center items-center gap-4">
          {shopifyProducts.map((product, index) => (
            <Card
              key={index}
              className="p-0 gap-0 overflow-hidden w-40 md:w-60 lg:w-72 aspect-[3/4] bg-transparent"
            >
              <CardContent className="p-4 md:p-6 pb-0 flex flex-col h-full relative z-0">
                <div className="flex flex-col justify-between">
                  <h1 className="text-base md:text-xl">{product.title}</h1>
                  <h2 className="text-xs font-extralight">
                    Starting from {product.priceRange.minVariantPrice.amount}
                  </h2>
                </div>
                <div
                  className="h-full bg-contain bg-bottom bg-no-repeat"
                  style={{
                    backgroundImage: `url(${product.featuredImage?.url || product.images[0]?.url})`,
                  }}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-stretch p-4 md:p-6">
                <Button asChild>
                  <a href={`/purchase/${product.handle}`}>Buy now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
    );
}