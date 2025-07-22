
import { FaSearch, FaBars, FaTimes , FaUser } from 'react-icons/fa'; // Import icons
import {NavLink} from "react-router-dom"
import { useState } from 'react';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-gray-50  ">
                <div className="flex flex-row justify-between items-center px-5 py-3">
                    {/* Logo Section */}
                    <div className="md:mx-2 ">
                        <h3 className="text-xl md:ml-2 font-bold ">SHOPY</h3>
                    </div>
                    {/* Search Bar */}    
                <div className="xl:hidden md:flex items-center">
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 " />
                    <input
                        type="text"
                        placeholder="Enter Your Products Name"
                        className="py-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none md:w-[700px]"
                    />
                </div>
                </div>
            {/* Card */}
                <NavLink to="/contact" className="" >
                <FaUser className='bg-gray-950 text-gray-200 text-3xl p-2 rounded-full hover:bg-gray-200 hover:text-gray-950' />
            </NavLink>
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
                    <div className="md:hidden  w-3/4 flex flex-wrap items-center  mx-20 py-3">
                            <NavLink to="/" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            About
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Men
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Women
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-3 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Jewelry
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-3 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Services
                        </NavLink> 
                        <NavLink to="/blog" className={({isActive}) => isActive ? " mx-2 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Blog
                        </NavLink>
                    </div>
                )}
            </div>
            {/* navbar */}
                   {/*  NavLinks */}
                    <nav className="hidden md:flex flex-row items-center justify-center  mt-5 ">
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            About
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Men
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Women
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Jewelry
                        </NavLink>
                        <NavLink to="/services" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Services
                        </NavLink>
                        <NavLink to="/blog" className={({isActive}) => isActive ? " mx-1 text-gray-950 hover:text-gray-600 px-3 py-1" : " hover:text-gray-800  rounded-tl-lg px-3 py-1"}>
                            Blog
                        </NavLink>
                    </nav> 
        </>
    );
};

export default NavBar;