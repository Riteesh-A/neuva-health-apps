import { createClient } from '@/app/lib/server';
import { redirect } from 'next/navigation';
import AccountPage from './accountPage';
export default async function Page() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (!data.user || error) {
        return redirect('/auth/login');
    }
    return <AccountPage user={data.user}/>;
}