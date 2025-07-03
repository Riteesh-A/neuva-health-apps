'use client';

import { Button } from '@/core/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Appointments from './appointments';
import MyProfile from './myprofile';
import OrderHistory from './orderHistory';
import SubscriptionsManagement from './subscriptions';
const sections = [
    'Order History',
    'Subscriptions Management',
    'Appointments',
    'My Profile',
];

export default function AccountPage({ user }: { user: any }) {
    const [activeSection, setActiveSection] = useState('Order History');

    const renderContent = () => {
        switch (activeSection) {
            case 'Order History':
                return <OrderHistory user={user} />;
            case 'Subscriptions Management':
                return <SubscriptionsManagement user={user} />;
            case 'Appointments':
                return <Appointments user={user} />;
            case 'My Profile':
                return <MyProfile user={user}  />;
            default:
                return null;
        }
    };
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Mobile dropdown */}
            <div className="md:hidden px-4 py-2 flex justify-center">
                <button
                    className="flex gap-2 items-center font-bold text-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {activeSection}
                    {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                    ) : (
                        <ChevronDown className="w-5 h-5" />
                    )}
                </button>

                {isOpen && (
                    <div className="absolute top-36 z-10 left-4 right-4 bg-white border rounded-md shadow-md mt-2">
                        {sections.map((section) => (
                            <button
                                key={section}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${section === activeSection ? 'bg-gray-100 font-medium' : ''
                                    }`}
                                onClick={() => {
                                    setActiveSection(section);
                                    setIsOpen(false);
                                }}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Sidebar for Desktop */}
            <div className="hidden md:block md:w-64 p-4 bg-white">
                <nav className="space-y-2">
                    {sections.map((section) => (
                        <Button
                            key={section}
                            variant={activeSection === section ? "default" : "outline"}
                            onClick={() => setActiveSection(section)}
                            className={`w-full text-left text-sm justify-start px-4 py-2 font-bold active:bg-white transition-colors shadow-none
                 ${activeSection === section
                                    ? "border-1 border-[#C2C7D0] bg-white text-black"
                                    : "border-0 "
                                }
              `}
                        >
                            {section}
                        </Button>
                    ))}
                </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-y-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

// --- Dummy Content Components (Replace with real components) ---







