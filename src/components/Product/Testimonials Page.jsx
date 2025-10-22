

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import profile3 from "../../assets/image/profile3.avif";
import profile2 from "../../assets/image/profile2.avif";
import profile1 from "../../assets/image/profile1.avif";

const testimonials = [
  {
    quote:
      "The team delivered an outstanding minimalist design that perfectly captured our brand's ethos The execution was flawless and the final product is a huge step up for us.",
    name: "Alex Thompson",
    title: "CEO, Innovatech Solutions",
    image: profile3,
    rating: 5,
  },
  {
    quote:
      "I was looking for a sleek, modern, and effective solution, and they delivered exactly that. The attention to detail and responsiveness made the whole process seamless and enjoyable.",
    name: "Sarah Chen",
    title: "Lead Designer, Studio 23",
    image: profile2,
    rating: 5,
  },
  {
    quote:
      "Exceptional quality and incredible professionalism. They understood our vision instantly and translated it into a beautiful high performance web experience.",
    name: "Mark Davies",
    title: "Founder, Zenith Corp",
    image: profile1,
    rating: 5,
  },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400 w-3 h-3" />
    ))}
  </div>
);

const TestimonialsPage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-sm font-medium text-indigo-600">Trusted by hundreds</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            What our clients love about us
          </h2>
          <p className="mt-4 text-gray-600">
            Real feedback from real customers curated highlights that show our commitment to quality
            speed and design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <article className="relative lg:col-span-2 bg-white rounded-2xl shadow-2xl overflow-hidden p-8 sm:p-12 ring-1 ring-gray-100">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-indigo-50 opacity-60 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-pink-50 opacity-50 blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="shrink-0 flex items-start">
                <div className="bg-indigo-600 p-4 rounded-xl text-white shadow-lg">
                  <FaQuoteLeft className="w-6 h-6" />
                </div>
              </div>

              <div className="flex-1">
                <StarRow count={5} />
                <blockquote className="mt-4 text-xl sm:text-2xl leading-relaxed text-gray-800 font-medium">
                  “{testimonials[0].quote}”
                </blockquote>

                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[0].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[0].title}</p>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                    Read case study
                  </button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {testimonials.slice(1).map((t, idx) => (
              <article
                key={idx}
                className="relative bg-white rounded-2xl p-6 shadow-md ring-1 ring-gray-100 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover shadow-sm"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <StarRow count={t.rating} />
                    </div>
                    <p className="mt-3 text-gray-700 text-sm line-clamp-3">{t.quote}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-gray-500">{t.title}</p>
                      <button className="text-indigo-600 text-sm font-medium hover:underline">View profile</button>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-indigo-50 to-white p-4 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white shadow flex items-center justify-center">
              <img src={profile1} alt="logo" className="w-10 h-10 object-cover rounded" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Fast delivery</p>
              <p className="text-xs text-gray-500">Average 2-day shipping across major cities</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-white p-4 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white shadow flex items-center justify-center">
              <img src={profile2} alt="logo" className="w-10 h-10 object-cover rounded" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Design excellence</p>
              <p className="text-xs text-gray-500">Hand-picked collections with modern aesthetics</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white shadow flex items-center justify-center">
              <img src={profile3} alt="logo" className="w-10 h-10 object-cover rounded" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Trusted partners</p>
              <p className="text-xs text-gray-500">Enterprise-grade support and SLAs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;