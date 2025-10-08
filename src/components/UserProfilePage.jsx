

import React from 'react';
import { FaUserPlus, FaEnvelope, FaLock, FaGoogle, FaApple, FaChevronDown } from 'react-icons/fa';

const UserProfilePage = () => {

    // Simple component to hold the dynamic message text
    const InputMessage = ({ text }) => (
        <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-md text-sm text-gray-800 transition-opacity duration-300">
            {text}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            
            {/* Main Registration Card */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out border border-gray-100 p-8 sm:p-10">
                
                <div className="flex flex-col items-center mb-8">
                    <FaUserPlus className="text-6xl text-gray-800 mb-3" />
                    <h1 className="text-3xl font-extrabold text-gray-900">Create Your Account</h1>
                </div>

                {/* --- Input Fields --- */}

                {/* Email Field with Focus Message */}
                <div className="mb-6 group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Strong Email Address
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-gray-900 transition-all duration-300">
                        <FaEnvelope className="text-gray-400 mr-3" />
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your unique email"
                            className="w-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                            required
                        />
                    </div>
                    {/* Message for Email - Hidden by default, shown on group focus-within */}
                    <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                         <InputMessage text="Your email is crucial! Use a primary, secure address to avoid lockout." />
                    </div>
                </div>

                {/* Password Field with Focus Message */}
                <div className="mb-8 group">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Strong Password
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-gray-900 transition-all duration-300">
                        <FaLock className="text-gray-400 mr-3" />
                        <input
                            type="password"
                            id="password"
                            placeholder="Min 8 characters, with symbols"
                            className="w-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                            required
                        />
                    </div>
                    {/* Message for Password - Hidden by default, shown on group focus-within */}
                    <div className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                         <InputMessage text="For maximum security, use a long, unique combination of upper/lower case letters, numbers, and symbols." />
                    </div>
                </div>

                {/* Main Submit Button */}
                <button 
                    type="submit"
                    className="flex items-center justify-center w-full py-3 px-4 bg-gray-900 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
                >
                    Register
                </button>

                {/* --- OR Separator and Social Options --- */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm font-medium">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Continue with Google/Apple */}
                <div className="space-y-3">
                    <button className="flex items-center justify-center w-full py-2.5 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-200">
                        <FaGoogle className="mr-3 text-lg" />
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center w-full py-2.5 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-200">
                        <FaApple className="mr-3 text-lg" />
                        Continue with Apple
                    </button>
                </div>

                {/* Sign-in Link */}
                <div className="text-center mt-8 text-sm">
                    <p className="text-gray-600">
                        Already have an account? 
                        <a href="" className="text-gray-900 font-semibold hover:underline ml-1">
                            Sign In
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default UserProfilePage;