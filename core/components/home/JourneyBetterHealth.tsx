import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import React from 'react';

const JourneyBetterHealth: React.FC = () => {
    return (
        <div className={cn(hankenGrotesk.className,"container mx-auto py-12")}>
            <h1 className= "text-4xl  text-center">Your Journey to Better Health</h1>
            <p className="text-center mt-2 mb-8 font-light">Some subtitle/marketing copy goes here</p>
            <div className="flex justify-between space-x-4 h-[650px]">
                <div className="bg-[#E3EDFB] p-8 rounded-lg flex flex-col justify-between w-1/2">
                    <div className="flex-grow"></div>
                    <div className="items-center text-center">
                        <h2 className="text-2xl">Have longer sex</h2>
                        <p className="mt-2 mb-4 font-light">Improve stamina and confidence with personalized solutions.</p>
                        <button className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">Get Started</button>
                    </div>
                </div>
                <div className="w-1/2 space-y-4">
                    <div className="bg-[#E3EDFB] p-4 rounded-lg flex flex-col justify-center items-center text-center h-1/3">
                        <h2 className="text-xl ">Lose weight</h2>
                        <p className="mt-2 mb-4 font-light">Answer a few questions about your health in just 3 minutes.</p>
                        <button className="bg-[#4F7CAC] text-white w-fit py-2 px-4 rounded-full">Start Your Journey</button>
                    </div>
                    <div className="bg-[#E3EDFB] p-4 rounded-lg flex flex-col justify-center items-center text-center h-1/3">
                        <h2 className="text-xl ">Tackle Anxiety</h2>
                        <p className="mt-2 mb-4 font-light">Answer a few questions about your health in just 3 minutes.</p>
                        <button className="bg-[#4F7CAC] text-white w-fit py-2 px-4 rounded-full">Find Relief</button>
                    </div>
                    <div className="space-y-2">
                        <div className="bg-[#E3EDFB] text-black py-4 px-4 rounded-lg w-full flex justify-between items-center">
                            <span>View all Treatments</span>
                            <img src="/icons/right_icon.png" alt="right icon" className="w-4 h-4" />
                        </div>
                        <div className="bg-[#E3EDFB] text-black py-4 px-4 rounded-lg w-full flex justify-between items-center">
                            <span>Book a Consultation</span>
                            <img src="/icons/right_icon.png" alt="right icon" className="w-4 h-4" />
                        </div>
                        <div className="bg-[#E3EDFB] text-black py-4 px-4 rounded-lg w-full flex justify-between items-center">
                            <span>Start Quick Assessment</span>
                            <img src="/icons/right_icon.png" alt="right icon" className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneyBetterHealth;