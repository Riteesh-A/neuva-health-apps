"use client"
import Footer from '@/core/components/footer';
import CommonQuestions from '@/core/components/home/CommonQuestions';
import ExpertMedicalTeam from '@/core/components/home/ExpertMedicalTeam';
import HeroCards from '@/core/components/home/HeroCards';
import HeroText from '@/core/components/home/HeroText';
import JourneyBetterHealth from '@/core/components/home/JourneyBetterHealth';
import PrivacyMatters from '@/core/components/home/PrivacyMatters';
import QualityTreatment from '@/core/components/home/QualityTreatment';
import SolutionsEveryNeed from '@/core/components/home/SolutionsEveryNeed';
import TakeFirstStep from '@/core/components/home/TakeFirstStep';
import TrustedByMen from '@/core/components/home/TrustedByMen';
import Navbar from '@/core/components/navbar';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-30  flex flex-col space-y-20'>
                <HeroText/>
                <HeroCards/>
                <JourneyBetterHealth/>
                <SolutionsEveryNeed/>
                <ExpertMedicalTeam/>
                <QualityTreatment/>
                <PrivacyMatters/>
                <TrustedByMen/>
                <CommonQuestions/>
                <TakeFirstStep/>
            </div>
            <Footer/>
            {/* Add your content here */}
        </div>
    );
};

export default HomePage;