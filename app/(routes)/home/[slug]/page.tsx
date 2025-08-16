import { categories } from "@/app/lib/categories";
import ProductCards from "@/core/components/home/ProductCards";
interface HomeSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HomeSlugPage({ params }: HomeSlugPageProps) {
  const { slug } = await params;

  // Show "Coming soon" for all slugs except 'lose-weight'
  if (slug !== "lose-weight") {
    return (
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex flex-col items-center p-10 md:px-20 md:py-10 gap-10 md:gap-20 max-w-screen-lg w-full mx-auto">
          <div className="flex flex-col items-center text-center w-full gap-4 md:gap-6">
            <h1 className="text-2xl md:type-display-lg w-full md:w-1/2 tracking-tight">
              . . In due time!
            </h1>
            <p className="text-sm md:type-body-md font-medium text-muted-foreground">
              Stay tuned for more information.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fetch products from Shopify that have the tag matching the slug

  const category = categories.find((cat) => cat.slug === slug);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col items-center p-10 md:px-20 md:py-10 gap-10 md:gap-20 max-w-screen-lg w-full mx-auto">
        <div className="flex flex-col items-center text-center w-full gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-medium w-full md:w-1/2 tracking-tight">
            {category?.heroSubTitle}
          </h1>
          <p className="text-sm md:text-base font-medium text-muted-foreground">
            {category?.heroDescription}
          </p>
        </div>

        <ProductCards slug={slug} />
      </div>

      {/* <div className="flex flex-col p-10 md:p-20 gap-10 md:gap-20 max-w-screen-lg w-full px-4 md:px-10 mx-auto">
        <div className="flex flex-col items-center text-center w-full gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-bold w-full md:w-1/2 tracking-tight">
            How does this medication work?
          </h1>
          <p className="text-sm md:text-base font-light text-muted-foreground">
            Daily treatments to help manage symptoms and improve wellbeing.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col h-48 md:h-96 bg-[#DEE3EC] rounded-xl" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <Button>Buy now</Button>
            <Button variant="outline">Is this right for me?</Button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
