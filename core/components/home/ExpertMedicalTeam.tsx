import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import React from 'react';

const ExpertMedicalTeam: React.FC = () => {
    return (
        <div className={cn(hankenGrotesk.className, "container mx-auto py-12")}>
            <h1 className="text-4xl text-center">Expert Medical Team</h1>
            <p className="text-center mt-2 mb-8 font-light">Some subtitle/marketing copy goes here</p>
            <div className="flex justify-between space-x-4">
                <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between ">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left">
                            <h2 className="text-xl">Dr. Amit Sharma</h2>
                            <p className="">MBBS, MD | Men's Health</p>
                            <p className="font-light">10+ Years</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between ">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left">
                            <h2 className="text-xl">Dr. Priya Patel</h2>
                            <p className="">MBBS, MD | Men's Health</p>
                            <p className="font-light">10+ Years</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between ">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left">
                            <h2 className="text-xl">Dr. Amit Sharma</h2>
                            <p className="">MBBS, MD | Men's Health</p>
                            <p className="font-light">10+ Years</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">Book Consultation</button>
            </div>
        </div>
    );
};

export default ExpertMedicalTeam;