'use client';

import { buttonVariants } from '@neuva-health/ui/components/base/button';
import { cn } from '@neuva-health/ui/lib/utils';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col p-6', className)}>
      <div className="flex flex-row justify-center items-center">
        <div className="flex items-center gap-10 text-violet-500">
          <Link href={'#'} className={cn(buttonVariants({ size: 'icon' }))}>
            <FaGithub className="size-6" />
          </Link>
          <Link href={'#'} className={cn(buttonVariants({ size: 'icon' }))}>
            <FaTwitter className="size-6" />
          </Link>
          <Link href={'#'} className={cn(buttonVariants({ size: 'icon' }))}>
            <FaLinkedin className="size-6" />
          </Link>
          <Link href={'#'} className={cn(buttonVariants({ size: 'icon' }))}>
            <Mail className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
