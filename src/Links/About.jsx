
// export default About;
import React,{ useState, useEffect, useCallback } from 'react';
import Bgw6 from "../assets/image/Bgw6.jpg"
import Bgw3 from "../assets/image/Bgw3.jpg"
import Bgj from "../assets/image/Bgj.jpg"

    // Rocket Icon (for Speed/Fast) - Used in Features
    const RocketIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5h15m0 0l-5-5m5 5l-5 5"/><path d="M12 21.5V17M12 7V2.5"/></svg>
    );

    // Lock Icon (for Safe/Secure) - Used in Features
    const LockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    );

    // Heart Icon (for Reliability) - Used in Features
    const HeartIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    );

    // Gift Icon (for Offers)
    const GiftIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 12 20 4 12"/><line x1="12" y1="4" x2="12" y2="20"/><path d="M21 21v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/></svg>
    );

    // Smile Icon (for Welcome Banner)
    const SmileIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    );

    // MousePointerClick Icon (Step 1: Discover & Order)
    const MousePointerClickIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l7.07 19 2.51-7.39 7.39-2.51L3 3z"/></svg>
    );

    // PackageCheck Icon (Step 2: Quality Check & Pack)
    const PackageCheckIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/><path d="M15 15l2 2 4-4"/><path d="M16 3l2 3 2-3M21 10v4h-5v-4z"/></svg>
    );

    // Truck Icon (Step 3: Rapid Delivery)
    const TruckIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h15"/><path d="M18 18h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-8"/><circle cx="7" cy="13" r="1.5"/><circle cx="17" cy="13" r="1.5"/><path d="M14 18h4v-3h-4v3z"/></svg>
    );
    

    const SLIDE_DATA = [
        { 
            title: "Our Story: Built on Trust", 
            text: "Discover the values that guide every order we ship", 
            color: "bg-blue-600",
            img: Bgw3,
        },
        { 
            title: "Quality First Always", 
            text: "We hand pick every product to ensure lasting satisfaction", 
            color: "bg-green-600",
            img: Bgw6,
        },
        { 
            title: "Join Our HAbouty Community", 
            text: "Experience shopping where the customer truly comes first.", 
            color: "bg-purple-600",
            img: Bgj,
        },
    ];

    const FEATURE_DATA = [
        { 
            title: "We're Fast!", 
            description: "Express shipping and rapid fulfillment guarantee your goods arrive quickly", 
            icon: RocketIcon, 
            color: "bg-green-500",
            text: "text-green-800"
        },
        { 
            title: "We're Safe!", 
            description: "Your data and payments are secured with industry-leading encryption", 
            icon: LockIcon, 
            color: "bg-blue-500",
            text: "text-blue-800"
        },
        { 
            title: "We're Reliable!", 
            description: "24/7 support and a hassle-free return policy you can count on", 
            icon: HeartIcon, 
            color: "bg-red-500",
            text: "text-red-800"
        },
    ];

    const PROCESS_STEPS = [
        {
            step: 1,
            title: "Discover & Order",
            description: "Browse our collections, place your order securely, and receive instant confirmatio",
            icon: MousePointerClickIcon,
            color: "bg-indigo-600"
        },
        {
            step: 2,
            title: "Quality Check & Pack",
            description: "Your item is inspected by our team, carefully wrAbouted, and prepared for dispatch",
            icon: PackageCheckIcon,
            color: "bg-yellow-500"
        },
        {
            step: 3,
            title: "Rapid Delivery",
            description: "Shipped swiftly via our trusted partners to ensure it arrives safe and fast at your door",
            icon: TruckIcon,
            color: "bg-green-600"
        }
    ];
    

    // 1. Animated Slider Component
    const AnimatedSlider = () => {
        const [currentSlide, setCurrentSlide] = useState(0);

        // Function to move to the next slide
        const nextSlide = useCallback(() => {
            setCurrentSlide(prev => (prev + 1) % SLIDE_DATA.length);
        }, []);

        // Effect to handle the auto-slide interval
        useEffect(() => {
            const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
            return () => clearInterval(interval);
        }, [nextSlide]);

        return (
            <div className="relative h-[80vh] w-full overflow-hidden">
                {SLIDE_DATA.map((slide, index) => (
                    <div
                        key={index}
                        
                        className={`absolute inset-0 w-full h-[600px] bg-cover  bg-center transition-all duration-1000 ease-in-out transform`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.img})`,
                            // Logic for sliding animation 
                            opacity: index === currentSlide ? 1 : 0,
                            transform: index === currentSlide ? 'translateX(0)' : 'translateX(100%)',
                            zIndex: index === currentSlide ? 10 : 1,
                        }}
                    >
                        {/* Text Overlay */}
                        <div className="flex flex-col justify-center items-start h-full p-8 md:p-16 text-left max-w-4xl mx-auto">
                            <h2 
                                className={`text-6xl md:text-8xl font-black text-white mb-4 leading-tight transition-all duration-700 delay-300 ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            >
                                {slide.title}
                            </h2>
                            <p 
                                className={`text-2xl md:text-3xl font-light text-gray-200 transition-all duration-700 delay-500 ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            >
                                {slide.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    // 2. Feature Card Component
    const FeatureCard = ({ icon: Icon, title, description, color, text }) => (
        <div className="p-8 bg-white rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl">
            <div className={`p-4 rounded-full ${color} mb-4 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-2xl font-extrabold mb-2 ${text}`}>{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );

    const About = () => {
    // State for the main content animation
    const [isLoaded, setIsLoaded] = useState(false);

    // Trigger animation on component mount
    useEffect(() => {
        // Small delay to ensure CSS transitions are picked up after initial render
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // Process Step Component (for the new section)
    const ProcessStep = ({ step, title, description, icon: Icon, color }) => (
        <div className="relative flex flex-col items-center text-center">
            {/* Step Number Circle */}
            <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-4 z-10 shadow-lg`}>
                <span className="text-white font-bold text-xl">{step}</span>
            </div>
            
            {/* Step Icon */}
            <div className={`p-4 ${color}/20 rounded-xl mb-4`}>
                <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
            </div>
            
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">

        {/* 1. ANIMATED BACKGROUND SLIDER */}
        <AnimatedSlider />

        <main className="py-16 md:py-24">
            
            <div className={`
                transition-all duration-1000 ease-out 
                transform 
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
            
                {/* 2. VALUES / FEATURES CARDS SECTION (We're Fast, Safe, etc.) */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
                        Why Choose us?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {FEATURE_DATA.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </section>

                {/* 3. SPECIAL OFFER BLOCK */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 md:p-12 rounded-2xl shadow-3xl text-center border-4 border-white transform rotate-1 transition-transform hover:rotate-0 hover:scale-[1.01] duration-500">
                        <GiftIcon className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-md" />
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-3 drop-shadow-lg">
                            A Special Offer Just For You!
                        </h3>
                        <p className="text-xl text-yellow-50 mb-6 max-w-3xl mx-auto">
                            As a thank you for learning about us, enjoy **15% OFF** your first order! Use code: **ABOUTUS15** at checkout.
                        </p>
                        <button
                            onClick={() => console.log('Copied Code: ABOUTUS15')}
                            className="px-8 py-3 bg-white text-gray-900 font-bold text-lg rounded-full shadow-xl hover:bg-gray-100 active:scale-95 transition duration-300"
                        >
                            Copy Code & Shop Now
                        </button>
                    </div>
                </section>

                {/* 4. OUR WORK PROCESS SECTION (The new section) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 bg-white rounded-2xl  border border-gray-100">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
                        Our Simple Work Process
                    </h2>
                    <p className="text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
                        A guaranteed smooth journey from your screen to your door in just three simple steps.
                    </p>

                    {/* Timeline Layout */}
                    <div className="relative grid md:grid-cols-3 gap-12 px-6">
                        {/* Horizontal Line for Desktop */}
                        <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-200 z-0">
                            <div className="absolute left-0 w-full h-full flex justify-between">
                                <div className="h-full w-1/4 bg-gray-50 absolute left-0 top-0"></div> {/* Hides connecting line before first circle */}
                                <div className="h-full w-1/4 bg-gray-50 absolute right-0 top-0"></div> {/* Hides connecting line after last circle */}
                            </div>
                        </div>
                        
                        {PROCESS_STEPS.map((step, index) => (
                            <ProcessStep key={index} {...step} />
                        ))}
                    </div>
                </section>

            
            </div> 
        </main>
        
        </div>
    );
    };

export default About;
