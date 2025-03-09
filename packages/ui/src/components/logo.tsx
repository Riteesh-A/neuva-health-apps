'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../lib/utils';
import { youngSerif } from '../fonts';

export const Logo = ({
  href,
  src,
  size = 96,
  className,
}: {
  src: string;
  href: string;
  size?: number;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn('flex flex-col text-2xl relative', youngSerif.className, className)}
    >
      <Image src={src} width={size} height={size} alt="neuva-health-logo" />
    </Link>
  );
};
