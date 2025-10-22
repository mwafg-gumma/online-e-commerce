import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaTag, FaGoogle, FaApple, FaPaperPlane } from "react-icons/fa";

    // Input field component
    const InputField = ({ name, type = 'text', placeholder, icon: Icon, required = false, value, onChange }) => (
    <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        <Icon className="w-5 h-5" />
        </div>
        <input
        type={type}
        name={name}
        placeholder={placeholder + (required ? ' (Required)' : ' (Optional)')}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition duration-150 text-gray-800 placeholder-gray-500"
        autoComplete="off"
        />
    </div>
    );

    // Social login button component
    const SocialLoginButton = ({ icon: Icon, platform, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-700 font-semibold transition duration-200 hover:bg-gray-100 hover:border-black shadow-sm"
        type="button"
    >
        <Icon className="w-5 h-5" />
        <span>Continue with {platform}</span>
    </button>
    );

    const UserProfilePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({
        loading: false,
        message: null,
        type: null,
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
        if (status.message) {
        setStatus({ ...status, message: null, type: null });
        }
    };

    const isValidEmail = (email) => {
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: null, type: null });

        const { name, email, message } = formData;

        if (!name || !email || !message) {
        setStatus({
            loading: false,
            message: 'Please fill out all required fields (Name, Email, Message).',
            type: 'error'
        });
        return;
        }

        if (!isValidEmail(email)) {
        setStatus({
            loading: false,
            message: 'Please enter a valid email address.',
            type: 'error'
        });
        return;
        }

        setTimeout(() => {
        setStatus({
            loading: false,
            message: 'Thank you for your message! We will get back to you shortly.',
            type: 'success',
        });
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        }, 1500);
    };

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-100 transition duration-500">
            {/* Header */}
            <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                Contact Us
            </h1>
            <p className="text-lg text-gray-500">
                We'd love to hear from you. Please fill out the form below.
            </p>
            </div>

            {/* Status Message Display */}
            {status.message && (
            <div className={`p-4 mb-6 rounded-lg font-medium ${
                status.type === 'success'
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-red-100 text-red-700 border border-red-300'
            }`}>
                {status.message}
            </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                name="name"
                placeholder="Please enter your full name here"
                icon={FaUser}
                required
                value={formData.name}
                onChange={handleChange}
            />
            <InputField
                name="email"
                type="email"
                placeholder="example@yourdomain.com"
                icon={FaEnvelope}
                required
                value={formData.email}
                onChange={handleChange}
            />
            <InputField
                name="subject"
                placeholder="What is the topic of your message or inquiry?"
                icon={FaTag}
                required={false}
                value={formData.subject}
                onChange={handleChange}
            />
            <div className="relative mb-5">
                <textarea
                name="message"
                placeholder="Write your detailed message here (Required)"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition duration-150 text-gray-800 placeholder-gray-500 resize-none"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status.loading}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-white font-bold text-lg transition duration-300 transform shadow-lg focus:outline-none ${
                status.loading
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-black hover:bg-gray-800 active:scale-[0.98] focus:ring-4 focus:ring-gray-300'
                }`}
            >
                {status.loading ? (
                <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    <span>Sending Message...</span>
                </>
                ) : (
                <>
                    <FaPaperPlane className="w-5 h-5 rotate-45 -mt-1 mr-1" />
                    <span>Send Message</span>
                </>
                )}
            </button>
            </form>

            {/* --- Social Login Section --- */}
            <div className="mt-8">
            <div className="relative flex items-center justify-center my-6">
                <div className="absolute w-full border-t border-gray-200"></div>
                <div className="relative px-4 bg-white text-sm text-gray-500">
                OR
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <SocialLoginButton
                icon={FaGoogle}
                platform="Google"
                onClick={() => console.log('Google Login clicked')}
                />
                <SocialLoginButton
                icon={FaApple}
                platform="Apple"
                onClick={() => console.log('Apple Login clicked')}
                />
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
                The 'Continue with' buttons are placeholders and do not connect to external services.
            </p>
            </div>
        </div>
        </section>
    );
    };

export default UserProfilePage;