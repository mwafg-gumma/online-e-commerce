

import cart from '../assets/image/cart.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import {NavLink} from "react-router-dom"
import { useState } from 'react';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-slate-200  ">
                <div className="flex flex-row justify-between items-center px-4 py-3  ">
                    {/* Logo Section */}
                    <div className="flex flex-row items-center">
                        <img src={cart} alt="logo image" className="w-10 h-10" />
                        <h3 className="text-xl ml-2 hidden md:block">SHOPY</h3>
                    </div>

                    {/* Desktop NavLinks */}
                    <nav className="hidden md:flex flex-row items-center space-x-4">
                        <NavLink to="/" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" : "text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            SHOP
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" : "text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            ABOUT
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" : "text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            CONTACT
                        </NavLink>
                        <NavLink to="/blog" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" : "text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            BLOG
                        </NavLink>
                    </nav>

                    {/* Search Bar */}
                    <div className="relative xl:hidden md:flex items-center">
                        <FaSearch className="absolute left-3 text-gray-500 md:mt-0 mt-3" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-2 pl-8 pr-4 rounded-lg border border-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Hamburger Menu Icon */}
                    <div className="md:hidden">
                        {isMenuOpen ? (
                            <FaTimes
                                className="text-3xl text-gray-600 cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ) : (
                            <FaBars
                                className="text-3xl text-gray-600 cursor-pointer"
                                onClick={() => setIsMenuOpen(true)}
                            />
                        )}
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white w-full flex flex-col items-center space-y-4 py-4">
                        <NavLink to="/" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" :"text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            SHOP
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" :"text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            ABOUT
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" : "text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            CONTACT
                        </NavLink>
                        <NavLink to="/blog" className={({isActive}) => isActive ? "text-lg hover:text-orange-800 bg-orange-300 rounded-tl-lg px-4 py-2" : "text-lg hover:text-orange-800  rounded-tl-lg px-4 py-2"}>
                            BLOG
                        </NavLink>
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBar;