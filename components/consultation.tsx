import { useEffect, useState } from "react";
// import { Button } from "@core/components/ui/button";
import { Button } from "@/core/components/ui/button";
import { Dialog, Transition } from "@headlessui/react";
import { createClient } from '@supabase/supabase-js';
import KYCForm from "./aKYCForm";
import ConsultationScheduler from "./consultationScheduler";
import PendingKYC from './pendingKYC';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
interface ConsultationProps {
    user: any; // Replace 'any' with a specific user type if available
}

export default function Consultation({ user }: ConsultationProps) {
    const [showconsultation, setShowConsultation] = useState(false);
    
    // Fetch KYC data for the user when component mounts or user changes
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    // Determine KYC status
    const [kycStatus, setKycStatus] = useState<"noKYC" | "pending" | "completed">("noKYC");
    useEffect(() => {
        if (data) {
            if (data.kyc_status === true) {
                setKycStatus("completed");
            } else {
                setKycStatus("pending");
            }
        } else {
            setKycStatus("noKYC");
        }
    }, [data]);
    useEffect(() => {
        const fetchKYC = async () => {
            const { data, error } = await supabase
                .from('usersKYC')
                .select('*')
                .eq('user_id', user.id)
                .maybeSingle();
            setData(data);
            console.log("KYC Data:", data);
            setError(error);
        };
        if (user?.id) {
            fetchKYC();
        }
    }, [user?.id]);
    return (
        <div>
            <Button
                size="lg"
                className="hidden md:flex"
                onClick={() => setShowConsultation(true)}
            >
                Book Free Consultation
            </Button>
            <Transition show={showconsultation} as={undefined}>
                <Dialog
                    onClose={() => setShowConsultation(false)}
                    className="fixed inset-0 z-50 flex"
                >
                    {/* Overlay */}
                    <Transition.Child
                        as={undefined}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    {/* Panel */}
                    <Transition.Child
                        as={undefined}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 overflow-y-auto">
                            {kycStatus === "noKYC" ? (
                                <KYCForm user={user} />
                            ) : kycStatus === "pending" ? (
                                // <PendingKYC user={user} />
                                <PendingKYC/>
                                
                            ) : (
                                <ConsultationScheduler user={user} supabase={supabase}/>
                            )}
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div>
    );
};
