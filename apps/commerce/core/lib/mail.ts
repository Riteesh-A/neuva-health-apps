import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (email: string) => {
  resend.emails.send({
    from: 'onboarding@neuvahealth.com',
    to: 'tejasladhe24@gmail.com',
    subject: 'New Subscriber',
    text: `<p>You have a new subscriber - <strong>${email}</strong></p>`,
  });
};
