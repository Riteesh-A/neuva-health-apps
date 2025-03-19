"use client";

import { hankenGrotesk } from "@/core/fonts";
import { cn } from "@/core/lib/utils";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

// filepath: c:\Users\punee\OneDrive\Documents\GitHub\neuva-health-apps\core\components\footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className={cn(hankenGrotesk.className, "bg-white py-16 px-12")}>
      <div className="container mx-auto flex justify-between items-start">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/icons/neuva_logo_small_transparent.png"
              alt="Neuva Health"
              className="h-10"
            />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold text-gray-800">Company</h4>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Careers
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Press
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Blog
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold text-gray-800">Support</h4>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            FAQs
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-gray-800">
            Subscribe to our Newsletter
          </h4>
          <p className="text-gray-600">
            Stay updated with our latest products and offers.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 bg-[#E0E1E2] border border-gray-300 rounded-full focus:outline-none"
            />
            <button className="bg-white text-gray-600 border border-gray-300 px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
