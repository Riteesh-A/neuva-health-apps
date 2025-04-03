import Footer from "@/core/components/footer";
import CommonQuestions from "@/core/components/home/CommonQuestions";
import TakeFirstStep from "@/core/components/home/TakeFirstStep";
import TrustedByMen from "@/core/components/home/TrustedByMen";
import Navbar from "@/core/components/navbar";
import { Separator } from "@/core/components/ui/separator";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Separator />
      <TrustedByMen className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <CommonQuestions className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <TakeFirstStep className="p-20 w-full px-4 md:px-10 mx-auto" />
      <Separator />
      <Footer />
    </div>
  );
}
