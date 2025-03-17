"use client"
import Footer from '@/core/components/footer';
import CommonQuestions from '@/core/components/home/CommonQuestions';
import TakeFirstStep from '@/core/components/home/TakeFirstStep';
import Navbar from '@/core/components/navbar';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-30  flex flex-col space-y-20'>
                
                <CommonQuestions/>
                <TakeFirstStep/>
            </div>
            <Footer/>
            {/* Add your content here */}
        </div>
    );
};

export default HomePage;