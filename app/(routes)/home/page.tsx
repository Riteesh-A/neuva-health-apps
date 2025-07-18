import { categories } from "@/app/lib/categories";
import ProductCardsHome from "@/core/components/home/ProductCardsHome";
interface HomeSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HomePage() {
  const slug = 'lose-weight'; 
  
  // Fetch products from Shopify that have the tag matching the slug
  
  const category = categories.find((cat) => cat.slug === slug);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col items-center px-4 py-8 gap-6 md:px-10 md:py-10 md:gap-20 max-w-screen-xl w-full mx-auto">
        {/* <div className="flex flex-col items-center text-center w-full gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-medium w-full md:w-1/2 tracking-tight">
            {category?.heroSubTitle}
          </h1>
          <p className="text-sm md:text-base font-medium text-muted-foreground">
            {category?.heroDescription}
          </p>
        </div> */}
        <ProductCardsHome slug={slug}/>
      </div>
    </div>
  );
}
