import React from 'react';
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

const services = [
{
    icon: <FaShippingFast className="text-3xl text-white" />,
    title: "Fast Delivery",
    desc: "Get your products delivered quickly and safely to your doorstep.",
    bg: "bg-rose-500"
},
{
    icon: <FaHeadset className="text-3xl text-white" />,
    title: "24/7 Support",
    desc: "Our support team is available around the clock to help you.",
    bg: "bg-rose-500"
},
{
    icon: <FaUndo className="text-3xl text-white" />,
    title: "Easy Returns",
    desc: "Not satisfied? Enjoy hassle-free returns within 30 days.",
    bg: "bg-rose-500"
},
{
    icon: <FaLock className="text-3xl text-white" />,
    title: "Secure Payment",
    desc: "Your payment information is processed securely.",
    bg: "bg-rose-500"
},
];

const Services = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4 bg-gradient-to-br from-rose-50 to-white rounded-2xl shadow-inner">
        <h2 className="text-4xl font-extrabold text-center mb-2 text-gray-800">Our Services</h2>
        <p className="text-center text-gray-500 mb-10 text-lg">We make your shopping experience easy, safe, and enjoyable.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
            <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-lg ${service.bg} group-hover:scale-110 transition`}>
                {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-center">{service.desc}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Services;