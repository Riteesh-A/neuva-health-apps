import { CartProvider } from "@/core/components/cart/cart-context";
import Footer from "@/core/components/footer";
import Navbar from "@/core/components/navbar";
import { getCart } from "@/core/lib/shopify";
import { createClient } from '@/lib/server';
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient()
  const cart = getCart();
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    // redirect('/auth/login')
  }
  return (
    <CartProvider cartPromise={cart}>
    <div className="flex flex-col">
      <Navbar user={data?.user}/>
      {children}
      <Footer />
    </div>
    </CartProvider>
  );
}
