import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import React from 'react';

// filepath: c:\Users\punee\OneDrive\Documents\GitHub\neuva-health-apps\core\components\home\TakeFirstStep.tsx

const TakeFirstStep: React.FC = () => {
    return (
        <div className={cn(hankenGrotesk.className, "bg-[#E3EDFB] rounded-lg px-8 py-32 text-center")}>
            <h1 className="text-4xl mb-4">Take the First Step Today</h1>
            <p className="text-lg mb-8 font-light px-64">
                Join thousands of men who have improved their sexual health with Neuva. Our discrete, professional approach puts you in control of your wellness journey.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">Start Free Assessment</button>
                <button className="bg-[#D7DDE4] text-gray-800 py-2 px-4 rounded-full">Book Consultation</button>
            </div>
        </div>
    );
};

export default TakeFirstStep;