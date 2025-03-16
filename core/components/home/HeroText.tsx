import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import React from 'react';
const HeroText: React.FC = () => {
    return (
        <div className={cn(hankenGrotesk.className,"text-left py-16 items-start flex flex-col space-y-6")}>
            <h1 className="text-5xl font-bold font-hansel-grotesk ">
                Better Performance.<br />Expert Care.
            </h1>
            <p className="text-lg font-light ">
                Connect with licensed doctors for personalized sexual health solutions, delivered discreetly to your door.
            </p>
            <div className="flex justify-start space-x-4">
                <button className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">
                    Start Free Assessment
                </button>
                <button className="bg-[#D7DDE4] text-gray-700 py-2 px-4 rounded-full">
                    View Products
                </button>
            </div>
        </div>
    );
};

export default HeroText;