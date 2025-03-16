import { Logo } from "@/core/components/logo";
import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="">
            <div className={`bg-blue-100 flex justify-between items-center p-2 h-12 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0' : 'opacity-100 h-12'}`}>
                <div className={cn(hankenGrotesk.className, "flex items-center w-full")}>
                    <span className='w-1/12 flex items-center justify-center h-1/2 border-r-1 border-gray-400'>
                        Why Neuva?
                        <span className="w-[1px] "></span>
                    </span>
                    <div className="relative w-11/12 overflow-hidden whitespace-nowrap">
                        <div className="flex animate-scroll space-x-16 w-max text-[#4F7CAC]">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex space-x-16">
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-male"></i>
                                        <span>10,000+ Men Helped</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-stethoscope"></i>
                                        <span>Licensed Doctors</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-box"></i>
                                        <span>Discreet Delivery</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-heartbeat"></i>
                                        <span>Comprehensive Care</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-user-md"></i>
                                        <span>Expert Advice</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-shield-alt"></i>
                                        <span>Privacy Guaranteed</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-pills"></i>
                                        <span>Quality Medication</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <i className="fas fa-phone"></i>
                                        <span>24/7 Support</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(hankenGrotesk.className, `flex justify-between items-center p-4 px-6 z-[20] transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md shadow-md backdrop-grain' : ''}`)}><div className=" flex items-center space-x-10">
                    {/* <img src="/path/to/logo.png" alt="Neuva Health" className="h-8" /> */}
                    <span className="">
                        <Logo />
                    </span>
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Shop</a>
                    <a href="#" className="hover:underline">How it works?</a>
                    <a href="#" className="hover:underline">About</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-[#4F7CAC] text-white px-4 py-2 rounded-full">Book a Consultation</button>
                    <button className="bg-[#D7DDE4] text-black px-4 py-2 rounded-full">Log in</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;