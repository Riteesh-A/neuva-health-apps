import { createClient } from "@/app/lib/server";
import { PrescriptionUpload } from "@/components/prescriptionUpload";
export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser()
  const user = data?.user;
  return (
    <PrescriptionUpload user={user} />
  );
}