import { createClient } from "@/app/lib/server";
import { CartProvider } from "@/core/components/cart/cart-context";
import Footer from "@/core/components/footer";
import Navbar from "@/core/components/navbar";
import { getCart } from "@/core/lib/shopify";
import React from 'react';
export default async function Layout({ children }: { children: React.ReactNode }) {
    const cart = getCart();
      const supabase = await createClient()
      
      const { data, error } = await supabase.auth.getUser()
      if (error || !data?.user) {
        // redirect('/auth/login')
      }
    return (
    <CartProvider cartPromise={cart}>
    <div>
    <Navbar user={data?.user}/>
    <div className='mx-30  flex flex-col space-y-20'>
      {children}
        
    </div>
    
    <Footer/>
    {/* Add your content here */}
</div>
</CartProvider>
    );
}