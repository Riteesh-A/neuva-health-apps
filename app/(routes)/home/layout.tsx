import Footer from "@/core/components/footer";
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
      <Footer />
    </div>
  );
}
