import { createClient } from '@/app/lib/server';
import AccountPage from './accountPage';

export default async function Page() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    return <AccountPage user={data.user}/>;
}