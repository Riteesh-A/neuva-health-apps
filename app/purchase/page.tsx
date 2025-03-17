"use client"
import Footer from '@/core/components/footer';
import Navbar from '@/core/components/navbar';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-30  flex flex-col space-y-20'>
                
            </div>
            <Footer/>
            {/* Add your content here */}
        </div>
    );
};

export default HomePage;