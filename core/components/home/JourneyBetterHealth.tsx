"use client";

import { cn } from "@/core/lib/utils";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const JourneyBetterHealth = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRefs = useRef<(HTMLDivElement | null)[][]>([]);
  
  // Data array for tabs and their content
  const tabsData = [
    {
      name: "Have longer sex",
      cards: [
        {
          title: "Sildenafil (Viagra)",
          description: "Lasts for 4-6 hours \nEffects start in 30 mins",
          buttonText: "Start Assessment",
          image: "/assets/blue-pills.png" // Placeholder for pill image
        },
        {
          title: "\"I was hesitant to seek help, but Neuva made the process comfortable. The medication has made a significant difference.\"",
          testimonial: "Vikram S., 41, Mumbai",
          image: "/assets/bg-bed-couple.jpg" // Placeholder for person image
        },
        {
          title: "How do you want to improve your sex life?",
          options: [
            { label: "Last Longer", isActive: false },
            { label: "Stay Hard", isActive: false },
            { label: "Both", isActive: true }
          ],
          image: "/assets/fit-man-smiling.png"
        }
      ]
    },
    {
      name: "Lose weight",
      cards: [
        {
          title: "GLP-1 Medications",
          description: "Lose 21% of body weight \nin 9 months",
          buttonText: "Start Assessment",
          image: "/assets/blue-pills.png" // Placeholder for pill image
        },
        {
          title: "BMI Calculator",
          options: [
            { label: "Last Longer", isActive: false },
            { label: "Stay Hard", isActive: false },
            { label: "Both", isActive: true }
          ],
          image: "/assets/fit-man-smiling.png"
        },
        {
          title: "Potential \nWeight Loss",
          
          description : "(See how much \nyou could lose)",
          image: "/assets/bg-bed-couple.jpg"
        }
      ]
    },
    {
      name: "Tackle Anxiety",
      cards: [
        {
          title: "GLP-1 Medications",
          description: "Lose 21% of body weight \nin 9 months",
          buttonText: "Start Assessment",
          image: "/assets/blue-pills.png" // Placeholder for pill image
        },
        {
          title: "BMI Calculator",
          options: [
            { label: "Last Longer", isActive: false },
            { label: "Stay Hard", isActive: false },
            { label: "Both", isActive: true }
          ],
          image: "/assets/fit-man-smiling.png"
        },
        {
          title: "Potential \nWeight Loss",
          
          description : "(See how much \nyou could lose)",
          image: "/assets/bg-bed-couple.jpg"
        }
      ]
    },
    {
      name: "Regrow Hair",
      cards: [
        {
          title: "Regrow Hair in 3-6 \nmonths",
          options: [
            { label: "Start Assessment", isActive: false },
          ],
          image: "/assets/fit-man-smiling.png"
        },
        {
          title: "Before and After",
          options: [
            { label: "Is this right for you?", isActive: false },
          ],
          image: "/assets/fit-man-smiling.png"
        },
        {
          title: "Sildenafil (Viagra)",
          description: "Lasts for 4-6 hours | Effects start in 30 mins",
          buttonText: "Start Assessment",
          image: "/assets/blue-pills.png" // Placeholder for pill image
        },
        {
          title: "Finasteride",
          description: "Lasts for 4-6 hours | Effects start in 30 mins",
          buttonText: "Start Assessment",
          image: "/assets/blue-pills.png" // Placeholder for pill image
        },
        {
          title: "Topical Minoxidil + Finasteride Solution",
          description: "Lasts for 4-6 hours | Effects start in 30 mins",
          buttonText: "Start Assessment",
          image: "/assets/blue-pills.png" // Placeholder for pill image
        },
      ]
    }
  ];

  // Initialize 2D array for card refs
  useEffect(() => {
    cardsRefs.current = tabsData.map(() => []);
  }, []);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Set up GSAP and ScrollTrigger
  useEffect(() => {
    // Register ScrollTrigger plugin

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Make sure all refs are available
    if (!containerRef.current || !sectionRef.current) return;
    
    // Skip GSAP setup for mobile devices

    // Create a timeline for the entire section
    const pinDuration = tabsData.length;
    const sectionHeight = window.innerHeight * pinDuration;
    
    // Set the container height to accommodate scrolling
    containerRef.current.style.height = `${sectionHeight}px`;
    
    // Pin the section
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${sectionHeight}`,
        pin: sectionRef.current,
        pinSpacing: true,
        scrub: true,
      }
    });

    // Create tab transitions
    tabsData.forEach((_, index) => {
      if (index < tabsData.length - 1) {
        const progress = index / (tabsData.length - 1);
        pinTl.to({}, { duration: 1 }, progress);
      }
    });
    
    // Create individual scroll triggers for each tab section
    tabsData.forEach((_, index) => {
      const sectionProgress = index / tabsData.length;
      const nextSectionProgress = (index + 1) / tabsData.length;
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `top+=${sectionHeight * sectionProgress} top`,
        end: index < tabsData.length - 1 
          ? `top+=${sectionHeight * nextSectionProgress} top` 
          : `bottom bottom`,
        onEnter: () => setActiveTab(index),
        onEnterBack: () => setActiveTab(index),
      });
    });

    return () => {
      // Clean up all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [tabsData.length]);

  // Handle manual tab clicks
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (containerRef.current) {
      const sectionHeight = window.innerHeight * tabsData.length;
      const scrollPosition = window.scrollY - (window.scrollY % window.innerHeight) + 
                            (sectionHeight / tabsData.length) * index;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Render card based on type
  const renderCard = (card: any, index: number) => {
    if (index === 0) {
      // Treatment card
      return (
        <Card className="shadow-none border-0 bg-primary-96 p-0 overflow-hidden h-60">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex flex-row relative">
              <div className="p-10 text-neutral-10 flex-grow z-10 overflow-y-visible">
              <h2 className="text-3xl font-semibold mb-2">{card.title}</h2>
              <p className="text-base whitespace-pre-line mb-4 leading-[20px]">
                {card.description}
              </p>
              <Button variant={"outline"} className="bg-transparent py-3 px-5">
                {card.buttonText}
              </Button>
              </div>
              <img
              className={cn(
                "absolute right-0 top-0 h-full object-contain z-0",
                card.title === "GLP-1 Medications" ? "mr-8 scale-150" : ""
              )}
              src={card.image}
              alt="image"
              />
            </div>
            {/* Image container - For medication */}
            {activeTab === 0 && (
              <div className="bg-blue-50 relative h-32 flex justify-end overflow-hidden">
                <img src="/api/placeholder/150/150" alt="Medication" className="absolute bottom-0 right-4 h-32 object-contain" />
              </div>
            )}
          </CardContent>
        </Card>
      );
    } else if (index === 2) {
      // Testimonial card
      return (
        <Card className="p-0 overflow-hidden h-full">
          <CardContent className="p-0 h-full flex flex-col bg-center" style={{ backgroundImage: `url(${card.image})`, backgroundSize:'230%', backgroundPositionX: 'center', backgroundPositionY: '60%' }}>
            <div className=" text-white p-6 flex-grow bg-gradient-to-t from-gray-900/80 align-bottom to-gray-900/30">
              <h2 className="text-5xl mt-11 leading-[48px] tracking-[-4%] font-semibold mb-4">{card.title}</h2>
              <div className="mt-10">
                <p className="text-2xl font-medium">{card.testimonial?.split(',')[0]}</p>
                <p className="text-base ">{card.testimonial?.split(',')[1]}, {card.testimonial?.split(',')[2]}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    } else if (index === 1) {
      // Options card
      return (
        <Card className="p-0 overflow-hidden bg-cover bg-center h-60" style={{ backgroundImage: `url(${card.image})`, backgroundSize: card.title === "Potential \nWeight Loss" ? '230%' : 'cover', backgroundPositionX: 'center', backgroundPositionY: card.title === "Potential \nWeight Loss" ? '60%' : '20%'}}>
            <CardContent className="p-10 bg-gradient-to-t from-gray-900/80 align-bottom to-transparent text-white h-full flex flex-col justify-end">
            <h2 className="text-[32px] font-semibold pr-24 mb-4 leading-[32px] whitespace-pre-line">{card.title}</h2>
            <div className="flex gap-4">
              {card.options?.map((option: any, idx: number) => (
          <button
            key={idx}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium border","bg-transparent text-white border-white"
            )}
          >
            {option.label}
          </button>
              ))}
              {card.title=="Potential \nWeight Loss" && (
                <div className="whitespace-pre-line text-xl font-medium text-white">
                 {card.description} 
                </div>
                )}
            </div>
          </CardContent>
        </Card>
      );
    } else if (index===3){
      return (
        <Card className="shadow-none border-0 bg-primary-96 p-0 overflow-hidden">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex flex-row relative">
              <div className="px-10 py-4 text-neutral-10 flex-grow z-10 overflow-y-visible">
              <h2 className="text-3xl font-semibold mb-2">{card.title}</h2>
              <p className="text-base whitespace-pre-line mb-2 leading-[20px]">
                {card.description}
              </p>
              <Button variant={"outline"} className="bg-transparent py-3 px-5">
                {card.buttonText}
              </Button>
              </div>
              <img
              className={cn(
                "absolute right-0 top-0 h-full object-contain z-0",
                card.title === "GLP-1 Medications" ? "mr-8 scale-150" : ""
              )}
              src={card.image}
              alt="image"
              />
            </div>
            {/* Image container - For medication */}
            {activeTab === 0 && (
              <div className="bg-blue-50 relative h-32 flex justify-end overflow-hidden">
                <img src="/api/placeholder/150/150" alt="Medication" className="absolute bottom-0 right-4 h-32 object-contain" />
              </div>
            )}
          </CardContent>
        </Card>
      );
    }
    return null;
  };

  return (
    <>
    {isMobile ? (<>
    <div className="flex flex-col h-fit gap-6 mx-4 mt-4">
      <Card className="shadow-none border-0 bg-primary-96 p-0 overflow-hidden h-60">
      <CardContent className="p-0 flex flex-col h-full justify-end">
        <div className="flex flex-row relative items-end">
          <div className="px-6 py-4 text-neutral-10 flex-grow z-10 overflow-y-visible">
        <h2 className="text-3xl font-semibold mb-2">Sildenafil (Viagra)</h2>
        <p className="text-base whitespace-pre-line mb-4 leading-[20px]">
          Lasts for 4-6 hours{"\n"}Effects start in 30 mins
        </p>
        <Button variant={"outline"} className="bg-transparent py-2 px-4">
          Start Assessment
        </Button>
          </div>
          <img
        className="absolute right-0 -top-24 h-full object-contain z-0"
        src="/assets/blue-pills.png"
        alt="image"
          />
        </div>
      </CardContent>
      </Card>

      <Card
      className="p-0 overflow-hidden bg-cover bg-center h-60"
      style={{
        backgroundImage: `url(/assets/fit-man-smiling.png)`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "20%",
      }}
      >
      <CardContent className="p-4 bg-gradient-to-t from-gray-900/80 align-bottom to-transparent text-white h-full flex flex-col justify-end">
        <h2 className="text-[32px] font-semibold pr-24 mb-2 leading-[32px] whitespace-pre-line">
        How do you want to improve your sex life?
        </h2>
        <div className="flex gap-2">
        <Button
          variant={"outline"}
          className="px-4 py-1 rounded-full text-sm font-medium border bg-transparent text-white border-white"
        >
          Last Longer
        </Button>
        <Button
          variant={"outline"}
          className="px-4 py-1 rounded-full text-sm font-medium border bg-transparent text-white border-white"
        >
          Stay Hard
        </Button>
        <Button
          variant={"outline"}
          className="px-4 py-1 rounded-full text-sm font-medium border bg-transparent text-white border-white"
        >
          Both
        </Button>
        </div>
      </CardContent>
      </Card>

      <Card className="p-0 overflow-hidden h-full">
      <CardContent
        className="p-0 h-full flex flex-col bg-center"
        style={{
        backgroundImage: `url(/assets/bg-bed-couple.jpg)`,
        backgroundSize: "300%",
        backgroundPositionX: "30%",
        backgroundPositionY: "65%",
        }}
      >
        <div className="text-white p-6 flex-grow bg-gradient-to-t from-gray-900/80 align-bottom to-gray-900/30">
        <h2 className="text-2xl mt-11 leading-[28px] tracking-[-4%] font-semibold mb-4">
          "I was hesitant to seek help, but Neuva made the process comfortable.
          The medication has made a significant difference."
        </h2>
        <div className="mt-10">
          <p className="text-2xl font-medium">Vikram S.</p>
          <p className="text-base">41, Mumbai</p>
        </div>
        </div>
      </CardContent>
      </Card>

      
    </div>
    </>) : (<>
    
    <div ref={containerRef} className={cn("relative", className)}>
      {/* This is the pinned section that stays fixed while scrolling */}
      <div 
        ref={sectionRef}
        className="w-full h-fit flex flex-col items-center justify-start overflow-hidden"
      >
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
            scale: 0.98
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1], // cubic-bezier curve for smooth acceleration/deceleration
              opacity: { duration: 0.4 },
              scale: { duration: 0.5 }
            },
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.7
            }
          }}
          className="flex flex-col items-center w-full"
        >
          {/* Tab navigation */}
          <div className="hidden md:flex md:flex-wrap gap-4 mt-10 mb-4 px-4 md:px-0">
            {tabsData.map((tab, index) => (
              <Button
                key={index} 
                variant={(activeTab === index) ? "default" : "outline"}
                onClick={() => handleTabClick(index)}
                className="text-sm md:text-base"
              >
                {tab.name}
              </Button>
            ))}
          </div>
          
          {/* Card content area with different layouts for different tabs */}
          <div 
            ref={cardContainerRef}
            className="mt-8 w-full px-4 md:px-36"
          >
            {/* Mobile view - simplified version with max 3 cards, no animations */}
            <div className="md:hidden">
              <div className="flex flex-col gap-4">
                {tabsData[activeTab]?.cards.slice(0, 3).map((card, idx) => (
                  <div key={idx}>
                    {renderCard(card, idx)}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop view with animations and scrolling */}
            <div className="hidden md:block">
              {tabsData.map((tab, tabIndex) => (
                <motion.div
                  key={tabIndex}
                  initial={false}
                  animate={{
                    opacity: activeTab === tabIndex ? 1 : 0,
                    y: activeTab === tabIndex ? 0 : 30,
                    display: activeTab === tabIndex ? 'grid' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  {/* Different layout based on tab index */}
                  {(tabIndex === 0) ? (
                    // First layout: Column 1 (card1, card2) Column 2 (card3)
                    <div className="grid grid-cols-2 gap-6 h-full">
                      <div className="flex flex-col gap-6">
                        {renderCard(tab.cards[0], 0)}
                        {renderCard(tab.cards[2], 1)}
                      </div>
                      <div>
                        {renderCard(tab.cards[1], 2)}
                      </div>
                    </div>
                  ) : (
                    <>
                    {(tabIndex === 3) ? (
                      <div className="grid grid-cols-2 gap-6 h-full">
                        <div className="flex flex-col gap-6">
                          {renderCard(tab.cards[0], 1)}
                          {renderCard(tab.cards[1], 1)}
                        </div>
                        <div className="flex flex-col gap-6">
                          {renderCard(tab.cards[2], 3)}
                          {renderCard(tab.cards[3], 3)}
                          {renderCard(tab.cards[4], 3)}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-6 h-full">
                        <div>
                          {renderCard(tab.cards[0], 0)}
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          {renderCard(tab.cards[2], 1)}
                          {renderCard(tab.cards[1], 1)}
                        </div>
                      </div>
                    )}
                   </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>)}
    </>
  );
};

export default JourneyBetterHealth;