import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import React from 'react';

const HeroCards: React.FC = () => {
    const cards = [
        { text: "Have longer sex" },
        { text: "Lose weight" },
        { text: "Tackle Anxiety" }
    ];

    return (
        <div className="flex justify-between space-x-4 py-8">
            {cards.map((card, index) => (
                <div key={index} className={cn(hankenGrotesk.className, "bg-[#E3EDFB] h-30 p-4 rounded-lg flex items-center justify-between w-1/3")}>
                    <span className="text-lg font-medium">{card.text}</span>
                    <img src="/icons/right_icon.png" alt="Right Icon" className="h-5 w-5" />
                </div>
            ))}
        </div>
    );
};

export default HeroCards;