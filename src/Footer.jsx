
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcPaypal, FaStripe } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; 

// links
const footerLinks = [
    {
        title: "Explore",
        links: ["Men's", "Women's", "New Arrivals", "Sale Items", "Lookbook"]
    },
    {
        title: "Customer Care",
        links: ["Contact Us", "Shipping Info", "Returns & Exchanges", "FAQs", "Size Guide"]
    },
    {
        title: "Company",
        links: ["Our Story", "Sustainability", "Careers", "Investors", "Blog"]
    },
];

const Footer = () => {
    return (
        
        <footer className="bg-gray-900 text-gray-300 pt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 border-b border-gray-700/50 pb-12">
                    
                    {/* */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-4xl font-black text-white tracking-widest">
                            SHOW
                        </h3>
                        
                        <p className="text-sm text-gray-400 max-w-xs">
                            Timeless style and superior craftsmanship, curated for the modern individual.
                        </p>

                        {/* */}
                        <div className="space-y-3">
                            <p className="text-white font-semibold">Join Our Newsletter</p>
                            <div className="flex bg-gray-700/50 rounded-lg overflow-hidden">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="flex-grow p-3 text-sm bg-transparent border-none focus:ring-0 placeholder-gray-400"
                                />
                                <button className="p-3 bg-gray-700 hover:bg-gray-600 transition duration-200 text-white">
                                    <HiOutlineMail className="text-xl" />
                                </button>
                            </div>
                        </div>

                    </div>

                    
                    {footerLinks.map((column) => (
                        <div key={column.title} className="space-y-5">
                            <h4 className="text-xl font-bold text-white mb-4">
                                {column.title}
                            </h4>
                            <ul className="space-y-3">
                                {column.links.map((link, index) => (
                                    <li key={index}>
                                        {/* */}
                                        <NavLink 
                                            to="#" 
                                            className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6">
                    
                    {/* */}
                    <p className="text-sm order-3 md:order-1 mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} SHOPY All rights reserved By Mwafg-dev
                    </p>

                    
                    <div className="flex space-x-5 text-2xl order-2">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                            <FaLinkedinIn />
                        </a>
                    </div>

                    {/* */}
                    <div className="flex space-x-3 text-2xl order-1 md:order-3">
                        {/* */}
                        <FaCcVisa className="text-blue-500" title="Visa" />
                        <FaCcPaypal className="text-blue-700" title="PayPal" />
                        <FaStripe className="text-purple-500" title="Stripe" />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;