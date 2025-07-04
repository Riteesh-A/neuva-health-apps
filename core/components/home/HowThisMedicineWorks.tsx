"use client";
import { Button } from "@/core/components/ui/button";
import { cn } from "@/core/lib/utils";
import { usePathname } from "next/navigation";


type Section = {
    key: string;
    title: string;
    image: string;
    heading: string;
    description: string;
    info: string;
    buyText: string;
    buyLink: string;
    consultText: string;
    consultLink: string;
};

const sections: Section[] = [
    {
        key: "lose-weight",
        title: "Weight Loss Medications",
        image: "/assets/how_it_works.jpg",
        heading: "Lose up to 20% of initial body weight",
        description: "Based on clinical studies of Mounjaro (Tirzepatide)",
        info: "",
        buyText: "Buy now",
        buyLink: "https://wa.me/918904967444?text=LoseWeight",
        consultText: "Is this right for me?",
        consultLink: "/home/assessment",
    },
    {
        key: "have-better-sex",
        title: "How tadalafil (cialis) or sildenafil (viagra) works for erectile dysfunction",
        image: "/assets/how_tadalifil.jpg",
        heading: "",
        description: "",
        info:
            "Tadalafil (Cialis) and sildenafil (Viagra) help increase blood flow to the penis, making it easier to get and keep an erection when sexually aroused. They work by relaxing the muscles in blood vessels and blocking an enzyme that restricts blood flow. These medicines don’t cause an erection on their own—they just make it easier when the moment is right.",
        buyText: "Buy now",
        buyLink: "/purchase/",
        consultText: "Is this right for me?",
        consultLink: "/home/assessment",
    },
    {
        key: "regrow-hair",
        title: "Hair Regrowth Treatments",
        image: "/assets/how_minoxidil.jpg",
        heading: "Regrow hair and slow down hair loss",
        description: "Proven effectiveness of minoxidil in stimulating hair follicles",
        info:
            "Minoxidil is a topical solution that increases blood flow to hair follicles, helping to extend the growth phase of hair and promote regrowth. It’s FDA-approved and works best when used consistently over time, especially for early-stage hair thinning.",
        buyText: "Buy now",
        buyLink: "https://wa.me/918904967444?text=RegrowHair",
        consultText: "Is this right for me?",
        consultLink: "/home/assessment",
    },
    {
        key: "tackle-anxiety",
        title: "Anxiety and Mood Support",
        image: "/assets/how_escitalopram.gif",
        heading: "Feel calmer, more in control",
        description: "Clinical use of escitalopram for anxiety and depression",
        info:
            "Escitalopram is an SSRI (Selective Serotonin Reuptake Inhibitor) used to treat anxiety and depression. It works by increasing serotonin levels in the brain, helping improve mood, reduce anxiety, and enhance emotional balance. It typically takes a few weeks to show full effect.",
        buyText: "Buy now",
        buyLink: "https://wa.me/918904967444?text=TackleAnxiety",
        consultText: "Is this right for me?",
        consultLink: "/home/assessment",
    },
];


function getSectionFromPath(path: string) {
    if (path.includes("lose-weight")) return [sections[0]];
    if (path.includes("have-better-sex")) return [sections[1]];
    if (path.includes("regrow-hair")) return [sections[2]];
    if (path.includes("tackle-anxiety")) return [sections[3]];
    // Default: show all
    return sections;
}

export default function HowThisMedicineWorks({ className, id }: { className?: string; id?: string }) {
    const pathname = usePathname();
    const visibleSections = getSectionFromPath(pathname);



    return (
        <div id={id||""} className={cn("flex flex-col overflow-x-hidden", className)}>
            <div className="flex flex-col p-10 md:p-20 gap-10 md:gap-20 max-w-screen-lg w-full px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center w-full gap-6">
                    <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
                        How do these medications work?
                    </h1>
                    <p className="font-extralight text-lg">
                        Daily treatments to help manage symptoms and improve wellbeing.
                    </p>
                </div>
                {visibleSections.map(
                    (section) =>
                        section && (
                            <div className="flex flex-col gap-2" key={section.key}>
                                <div className="flex px-6 flex-col items-left text-left w-full gap-2">
                                    <h2 className="text-lg md:text-2xl font-medium">{section.title}</h2>
                                </div>
                                <div
                                    className="h-64 md:h-[900px] scale-100 md:scale:90 bg-[#FCF9F9] bg-cover bg-center rounded-xl"
                                    style={{
                                        backgroundImage: `url(${section.image})`,
                                        scale:
                                            typeof window !== "undefined" && window.innerWidth >= 768
                                                ? "1"
                                                : "0.9",
                                    }}
                                />
                                <div className="flex px-6 flex-col items-left text-left w-full gap-2">
                                    {section.heading && (
                                        <h3 className="text-lg md:text-xl font-semibold">{section.heading}</h3>
                                    )}
                                    {section.description && (
                                        <p className="text-sm text-left md:text-base font-light text-muted-foreground">
                                            {section.description}
                                        </p>
                                    )}
                                    {section.info && (
                                        <p className="text-sm text-left md:text-base font-light text-muted-foreground">
                                            {section.info}
                                        </p>
                                    )}
                                </div>
                                <div className="flex justify-center items-center gap-3 mt-4">
                                    <Button className="text-sm md:text-base" asChild>
                                        <a href={section.buyLink} target="_blank" rel="noopener noreferrer">
                                            {section.buyText}
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="text-sm md:text-base" asChild>
                                        <a href={section.consultLink} target="_blank" rel="noopener noreferrer">
                                            {section.consultText}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}