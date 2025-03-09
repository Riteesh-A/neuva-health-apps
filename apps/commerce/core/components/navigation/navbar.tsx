'use client';

import { Logo } from '@neuva-health/ui/components/logo';

export const Navbar = () => {
  return (
    <div className="flex flex-row p-6 justify-between items-center">
      <Logo size={96} src="./logo.svg" href={process.env.NEXT_PUBLIC_SITE_URL} />
    </div>
  );
};
