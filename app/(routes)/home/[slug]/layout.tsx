import { SlugHeader } from "@/core/components/home/slug-header";

interface HomeSlugLayoutProps {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

export default async function HomeSlugLayout({
  params,
  children,
}: HomeSlugLayoutProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col overflow-x-hidden">
      <SlugHeader slug={slug} />
      {children}
    </div>
  );
}
