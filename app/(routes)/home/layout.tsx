import Footer from "@/core/components/footer";
import Navbar from "@/core/components/navbar";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
