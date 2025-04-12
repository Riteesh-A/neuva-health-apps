import { Separator } from "@/core/components/ui/separator";
import CommonQuestions from "./_components/CommonQuestions";
import TakeFirstStep from "./_components/TakeFirstStep";
import TrustedByMen from "./_components/TrustedByMen";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import { SlugHeader } from "./_components/slug-header";

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
    <div className="flex flex-col">
      <Navbar />
      <SlugHeader slug={"have-better-sex"} />
      {children}
      {/* <Separator /> */}
      <TrustedByMen className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <CommonQuestions className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <TakeFirstStep className="p-20 w-full px-4 md:px-10 mx-auto" />
      <Separator />
      <Footer />
    </div>
  );
}
