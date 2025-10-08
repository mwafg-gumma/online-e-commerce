import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
// Ensure this path is correct based on where this component is located
// import productsData from "../../products.json"; 
import products from "../../products.json"; 
import Footer from "../../Footer";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetailPage = () => {
    // 1. Get the ID from the URL
    const { id } = useParams();

    // 2. Find the corresponding product
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="text-center py-20 px-4">
                <h1 className="text-3xl font-bold text-red-600">Product Not Found!</h1>
                <p className="mt-4 text-lg">
                    We couldn't find the item you were looking for.
                </p>
                <NavLink to="/" className="text-blue-500 hover:underline mt-6 inline-block text-xl">
                    ← Go back to all products
                </NavLink>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <section className='mx-auto max-w-7xl px-4 py-12'>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Side: Image */}
                    <div className="lg:w-1/2">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side: Details */}
                    <div className="lg:w-1/2 p-4">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                        
                        <div className="flex items-baseline space-x-3 mb-6">
                            <p className="text-3xl font-extrabold text-red-600">{product.price}</p>
                            <p className="text-lg text-gray-500 line-through">{product.originalPrice}</p>
                            {product.discount && (
                                <p className="text-base font-semibold text-blue-600">({product.discount} OFF)</p>
                            )}
                        </div>

                        <p className="text-gray-700 mb-6">{product.description || "No description provided."}</p>

                        {/* Product Details List - Assumes a 'details' array in products.json */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-1">Specifications</h3>
                        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
                            {(product.details || ["Features not specified."]).map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                        
                        {/* Primary Action Button */}
                        {/* This button should eventually use an onClick handler to add to cart */}
                        <button className="flex items-center justify-center w-full py-3 px-6 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition duration-300">
                            <FaShoppingCart className="mr-3" />
                            Add to Cart
                        </button>

                        <NavLink to="/" className="text-sm text-blue-500 hover:underline mt-4 block text-center">
                            Continue Shopping
                        </NavLink>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductDetailPage;