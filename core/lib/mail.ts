import { Resend } from "resend";
import { toast } from "sonner";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendMail({
  from = "Info <info@neuvahealth.com>",
  to,
  subject,
  html,
}: {
  from?: string;
  to: string[];
  subject: string;
  html: string;
}) {
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });

  if (error) {
    return toast.error("Failed to send email");
  }

  console.log(data);

  return toast.success("Thank you for subscribing!");
}
