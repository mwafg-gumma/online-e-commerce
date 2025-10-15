
import React from 'react';
import profile3 from "../../assets/image/profile3.avif"
import profile2 from "../../assets/image/profile2.avif"
import profile1 from "../../assets/image/profile1.avif"


// Data for Testimonials
const testimonials = [
  {
    quote: "The team delivered an outstanding minimalist design that perfectly captured our brand's ethos The execution was flawless and the final product is a huge step up for us",
    name: "Alex Thompson",
    title: "CEO, Innovatech Solutions",
    image: profile3,
  },
  {
    quote: "I was looking for a sleek, modern, and effective solution, and they delivered exactly that The attention to detail and responsiveness made the whole process seamless and enjoyable",
    name: "Sarah Chen",
    title: "Lead Designer, Studio 23",
    image: profile2, 
  },
  {
    quote: "Exceptional quality and incredible professionalism They understood our vision instantly and translated it into a beautiful high performance web experience",
    name: "Mark Davies",
    title: "Founder, Zenith Corp",
    image: profile1
  },
];

const TestimonialsPage  = () => {
  return (
    <section id="animated-testimonials" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-tight text-gray-700">
            Hear from Our Partners
          </p>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight text-gray-800 sm:text-6xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Grid with Effects */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {testimonials.map((testimonial, index) => (
            
            <div 
              key={index} 
              className="flex flex-col bg-white border border-gray-200 p-8 rounded-lg 
                        shadow-xl transition-all duration-500 ease-in-out
                        transform hover:-translate-y-2 hover:shadow-2xl hover:border-black"
            >
              
              {/* Quote Text */}
              <blockquote className="text-xl leading-8 text-gray-800 flex-grow">
                <p className="font-serif italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              
              {/* Client Info with Circle Image */}
              <div className="mt-8 flex items-center pt-6 border-t border-gray-100">
                <img
                  className="h-16 w-16 rounded-full object-cover  transition-all duration-500 group-hover:grayscale-0"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <p className="font-bold text-black text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage ;