'use client';

import { Logo } from '@neuva-health/ui/components/logo';
import { cn } from '@neuva-health/ui/lib/utils';
import { NotifyForm } from '@/components/notify-form';
import { TypewriterEffectSmooth } from '@neuva-health/ui/components/base/typewriter-effect';
import { WavyBackground } from '@neuva-health/ui/components/base/wavy-background';
import { Card, CardContent } from '@neuva-health/ui/components/base/card';
import { hankenGrotesk } from '@neuva-health/ui/fonts';

export default function HomePage() {
  return (
    <div className={cn('flex flex-col h-full overflow-hidden', hankenGrotesk.className)}>
      <div className="flex flex-col gap-4 items-center justify-center text-center h-full">
        <WavyBackground backgroundFill="white" className="max-w-4xl">
          <Card className="bg-white border-[#d9e9ff] border-8">
            <CardContent className="flex flex-col gap-4 items-center justify-center rounded-lg">
              <h1 className="text-xl font-medium whitespace-nowrap">
                Making India Healthier and Happier
              </h1>
              <Logo size={256} src="./logo.svg" href={process.env.NEXT_PUBLIC_SITE_URL} />
              <TypewriterEffectSmooth
                className="text-xl font-extralight"
                words={[
                  { text: 'We', className: 'text-3xl font-extralight' },
                  { text: 'are', className: 'text-3xl font-extralight' },
                  { text: 'launching', className: 'text-3xl font-extralight' },
                  { text: 'soon', className: 'text-3xl font-extralight' },
                ]}
              />
              <NotifyForm />
            </CardContent>
          </Card>
        </WavyBackground>
      </div>
      {/* <Footer className="z-10" /> */}
    </div>
  );
}
