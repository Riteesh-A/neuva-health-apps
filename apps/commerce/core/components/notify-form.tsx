'use client';

import { Button } from '@neuva-health/ui/components/base/button';
import { Form, FormField, FormItem } from '@neuva-health/ui/components/base/form';
import { Input } from '@neuva-health/ui/components/base/input';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';
import z from 'zod';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail } from '@/lib/mail';

const schema = z.object({
  email: z.string().email(),
});

export const NotifyForm = () => {
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { email: '' } });

  const onSubmit = async ({ email }: z.infer<typeof schema>) => {
    try {
      await sendEmail(email);
      toast.info("Thanks! We'll notify you when we launch.");
    } catch (error) {
      toast.info('Error occurred while sending email. Please try again later.');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2 w-full max-w-screen-sm"
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex w-96 h-12"
              {...field}
            />
          )}
        />

        <Button size={'sm'} type="submit" variant={'outline'} className="whitespace-nowrap">
          Notify Me <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};
