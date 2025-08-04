import Navbar from "@/app/(routes)/(root)/_components/navbar";
import { CartProvider } from "@/core/components/cart/cart-context";
import Footer from "@/core/components/layout/footer";
import { getCart } from "@/core/lib/shopify";
import { Toaster } from "sonner";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <CartProvider cartPromise={cart}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
          <Toaster closeButton />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
