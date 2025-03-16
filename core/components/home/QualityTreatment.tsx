import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import React from 'react';

const QualityTreatment: React.FC = () => {
    return (
        <div className={cn(hankenGrotesk.className, "container mx-auto py-12")}>
            <h1 className="text-4xl text-center">Quality Treatment Options</h1>
            <p className="text-center mt-2 mb-8 font-light">Some subtitle/marketing copy goes here</p>
            <div className="flex justify-between space-x-4">
                <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between h-fit">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left">
                            <h2 className="text-xl">Performance Enhancement Kit</h2>
                            <p className="font-light">Doctor-recommended medication to improve erectile function.</p>
                            <p className="">₹XXX / month</p>
                            <div className="justify-items-end items-end">
                                <div className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">Buy Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between h-fit">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left ">
                            <h2 className="text-xl">Duration Control Solution</h2>
                            <p className="font-light">Clinically proven medication that will help you last longer.</p>
                            <p className="">₹XXX / month</p>
                            <div className="justify-items-end items-end">
                                <div className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">Buy Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3"><div className="bg-[#E3EDFB] rounded-lg h-80 w-full mb-2"></div>
                    <div className="bg-[#E3EDFB] py-3 px-8 rounded-lg flex flex-col justify-between h-fit">
                        <div className="flex-grow"></div>
                        <div className="items-start text-left">
                            <h2 className="text-xl">Performance Enhancement Kit</h2>
                            <p className="font-light">Doctor-recommended medication to improve erectile function.</p>
                            <p className="">₹XXX / month</p>
                            <div className="justify-items-end items-end">
                                <div className="bg-[#4F7CAC] text-white py-2 px-4 rounded-full">Buy Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="bg-[#D7DDE4] text-gray-800 py-2 px-4 rounded-full">View All Products</button>
            </div>
        </div>
    );
};

export default QualityTreatment;