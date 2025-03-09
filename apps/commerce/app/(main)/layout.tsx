import { CartProvider } from '@/components/cart/cart-context';
import { Navbar } from '@/components/layout/navbar';
import { WelcomeToast } from '@/components/welcome-toast';
import { getCart } from '@/lib/shopify';
import { ReactNode } from 'react';

export default async function MainLayout({ children }: { children: ReactNode }) {
  const cart = getCart();

  return (
    <CartProvider cartPromise={cart}>
      <Navbar />
      <main>
        {children}
        <WelcomeToast />
      </main>
    </CartProvider>
  );
}
