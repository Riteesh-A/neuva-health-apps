import { createClient } from "@/app/lib/server";
import { CartProvider } from "@/core/components/cart/cart-context";
import Footer from "@/core/components/footer";
import CommonQuestions from "@/core/components/home/CommonQuestions";
import CTACards from "@/core/components/home/CTACards";
import TrustedByMen from "@/core/components/home/TrustedByMen";
import Navbar from "@/core/components/navbar";
import { getCart } from "@/core/lib/shopify";

export default async function PurchaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cart = getCart();
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   // redirect('/auth/login')
  // }
  return (
    <CartProvider cartPromise={cart}>
    <div>
    <Navbar user={data?.user}/>
    <main className='mx-30  flex flex-col space-y-20'>
      {children}
        
    </main>
    <TrustedByMen className="p-10 md:p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
    <CommonQuestions className="p-10 md:p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
    <CTACards className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"  />
    <Footer/>
    {/* Add your content here */}
</div>
</CartProvider>
  );
}
