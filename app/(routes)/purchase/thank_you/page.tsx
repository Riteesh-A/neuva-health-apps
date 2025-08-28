import { createClient } from "@/app/lib/server";
import { ConsultationFlow } from "@/components/consultationFlow";

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const user = data?.user;

  return <ConsultationFlow user={user} />;
}
