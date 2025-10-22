
import React from "react";
import { NavLink } from "react-router-dom";
import products from "../products.json";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Bgb1 from "../assets/image/Bgb1.jpg";
import Footer from "../Footer";

// Using Slice for Display Less Products
const recentProduct = products.slice(72, 92);

const IMAGE_COLORS = [
  "bg-green-00",
  "bg-teal-500",
  "bg-gray-600",
];

// Hero Section
const HeroSection = () => (
  <div className="relative w-full h-[520px] md:h-[6 00px] overflow-hidden mb-40">
    {/* Full-bleed image (absolute, covers container) */}
    <img
      src={Bgb1}
      alt="Bags's Collection"
      className="absolute inset-0 w-full h-full object-cover object-center"
      loading="eager"
    />

    {/* Semi-transparent overlay for readable text */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Centered text content (on top of image + overlay) */}
    <div className="relative z-10 inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 max-w-4xl mx-auto mt-16 md:mt-24">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
        Light Nylon Outerwear
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-200 font-medium max-w-xl">
        Discover our newest collection of essential Bagsswear  designed for style and comfort
      </p>
      <button className="mt-8 px-8 py-3 bg-white text-gray-900 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
        SHOP NOW
      </button>
    </div>
  </div>
);

// Helper function to render star rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`text-lg ${i < rating ? "text-amber-500" : "text-gray-200"}`}>
        ★
      </span>
    );
  }
  return stars;
};

const Bags = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl">
        <HeroSection />

        <aside>
          {/* Responsive Grid Layout */}
          <section className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {recentProduct.map((product, index) => (
              <div key={index} className="relative w-full bg-gray-50 transition-shadow duration-300 ease-in-out rounded-md overflow-hidden">
                <NavLink to={`/product/${product.id}`}>
                  <div className="relative w-full md:w-[280px] aspect-square md:aspect-auto h-56 md:h-[340px]">
                    <img
                      src={`/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg p-1"
                      loading="lazy"
                    />

                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
                        {product.discount}
                      </div>
                    )}
                  </div>
                </NavLink>

                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <NavLink to={`/product/${product.id}`} className="hover:text-gray-700">
                      <h2 className="text-gray-700 font-normal text-base sm:text-lg leading-tight">{product.name}</h2>
                    </NavLink>

                    <button className="text-red-400 hover:text-red-600 transition-colors duration-200 p-1 -mt-1 -mr-1">
                      <FaHeart className="text-xl sm:text-2xl" />
                    </button>
                  </div>

                  <div className="flex flex-col mb-2">
                    <p className="text-lg sm:text-lg text-gray-600 hover:underline">{product.price || "$0.00"}</p>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-400 line-through -mt-1">{product.originalPrice}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-0.5 mb-3">{renderStars(product.rating || 4)}</div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-2">
                      {IMAGE_COLORS.map((colorClass, colorIndex) => (
                        <div key={colorIndex} className={`w-4 h-4 rounded-full border border-gray-300 cursor-pointer ${colorClass}`}></div>
                      ))}
                    </div>

                    <NavLink to={`/product/${product.id}`} title={`View details for ${product.name}`}>
                      <button className="bg-gray-100 text-gray-900 p-3 rounded-full hover:bg-gray-700 hover:text-gray-50 transition-colors duration-200">
                        <FaShoppingCart className="text-sm" />
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </aside>
      </section>
      <Footer />
    </>
  );
};

export default Bags;

