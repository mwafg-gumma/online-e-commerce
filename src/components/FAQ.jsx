import React, { useState } from 'react';

// --- Data (Questions and Answers) ---
const FAQ_DATA = [
    {
        question: "What core services do you provide?",
        answer: "We offer a comprehensive suite of services including technical consulting, web and mobile FAQlication development, database management, and cybersecurity solutions. Our goal is to enable your business to grow."
    },
    {
        question: "How long does a new FAQlication development project take?",
        answer: "The timeline depends on the project's size and complexity. Our smaller projects start from 4 weeks, while large and complex projects can take 3 to 6 months. We accurately determine the timeline after the initial analysis phase."
    },
    {
        question: "How can I request a quote for my project?",
        answer: "You can contact us via the website's contact form or send a detailed email. Please include a brief project description, key requirements, and any estimated budget to help speed up the process."
    },
    {
        question: "Do you provide support and maintenance services after project launch?",
        answer: "Absolutely. We offer flexible support and maintenance packages, including security updates, bug fixes, and feature additions upon request, to ensure your FAQlication continues to operate at peak efficiency."
    },
    {
        question: "What payment methods are available?",
        answer: "We accept a wide range of payment methods such as local bank transfers, major credit cards, and popular electronic payment services. Payment details are agreed upon in the initial contract."
    }
];

// --- Accordion Item Component ---
const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-5 text-left font-bold text-lg text-gray-800 hover:text-primary transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {/* Question */}
                <span className="flex-1 text-left pl-4">{question}</span>
                
                {/* Toggle Icon */}
                <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'rotate-0 text-gray-500'}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            
            {/* Answer with smooth transition */}
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                // Dynamic style to ensure the height transition works smoothly
                style={{ maxHeight: isOpen ? '400px' : '0' }} 
            >
                <p className="pb-4 text-gray-600 leading-relaxed text-left">
                    {answer}
                </p>
            </div>
        </div>
    );
};

// --- Main Page Component (FAQ.jsx content) ---
const FAQ = () => {
    // Define the primary and secondary colors for the theme
    const primaryColor = 'indigo-600'; 
    // const secondaryColor = 'indigo-700';

    return (
        <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8 md:p-12" dir="ltr">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 sm:p-10 md:p-12">

                {/* Header */}
                <header className="text-center mb-10">
                    <h1 
                        className={`text-5xl font-extrabold text-gray-900 mb-3 border-b-4 border-${primaryColor} inline-block pb-1`}
                        style={{ borderBottomColor: '#999' }} // Explicit style for primary color border
                    >
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                        Get clear, direct answers to everything you need to know about our services and operations.
                    </p>
                </header>

                {/* Questions and Answers Container */}
                <div className="mt-8 space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <AccordionItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>

                {/* Contact Section */}
                <div 
                    className={`mt-12 text-center p-8 bg-indigo-50 rounded-xl border border-indigo-200`}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Still have a question? We're ready!
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Contact us directly if you couldn't find the answer you were looking for.
                    </p>
                    <button
                        onClick={() => console.log('Contact Us Button Clicked')}
                        className={`px-8 py-3 bg-gray-600 text-white font-bold rounded-full shadow-lg shadow-gray-600/30 hover:bg-gray-700 transition duration-300 transform active:scale-95`}
                    >
                        Contact Us Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
