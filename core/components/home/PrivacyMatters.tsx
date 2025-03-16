import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import React from 'react';

// filepath: c:/Users/punee/OneDrive/Documents/GitHub/neuva-health-apps/core/components/home/PrivacyMatters.tsx

const PrivacyMatters: React.FC = () => {
    return (
        <div className={cn(hankenGrotesk.className, "container mx-auto py-12 text-center")}>
            <h1 className="text-4xl">Your Privacy Matters</h1>
            <p className="mt-2 mb-8 font-light px-72">
                At Neuva Health, we understand the importance of discretion. Our consultations are confidential, and all medications are delivered in plain, unmarked packaging.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#E3EDFB] rounded-lg py-8 px-4 flex flex-col items-center">
                    <div className="bg-[#C3D1E5] rounded-full h-16 w-16 mb-4"></div>
                    <h2 className="text-xl">End-to-end encryption</h2>
                </div>
                <div className="bg-[#E3EDFB] rounded-lg py-8 px-4 flex flex-col items-center">
                    <div className="bg-[#C3D1E5] rounded-full h-16 w-16 mb-4"></div>
                    <h2 className="text-xl">Discreet packaging</h2>
                </div>
                <div className="bg-[#E3EDFB] rounded-lg py-8 px-4 flex flex-col items-center">
                    <div className="bg-[#C3D1E5] rounded-full h-16 w-16 mb-4"></div>
                    <h2 className="text-xl">Discreet billing</h2>
                </div>
                <div className="bg-[#E3EDFB] rounded-lg py-8 px-4 flex flex-col items-center">
                    <div className="bg-[#C3D1E5] rounded-full h-16 w-16 mb-4"></div>
                    <h2 className="text-xl">100% authentic medications</h2>
                </div>
            </div>
            <div className="mt-8">
                <button className="bg-[#D7DDE4] text-gray-800 py-2 px-4 rounded-full">Learn more about Neuva</button>
            </div>
        </div>
    );
};

export default PrivacyMatters;