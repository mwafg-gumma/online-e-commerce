// src/components/ProductCard.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
    // التأكد من أن المنتج موجود
    if (!product) return null;

    return (
        
        <NavLink to={`/product/${product.id}`} className="group block h-full">
            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square">
                    {/* عرض علامة "Sale" إذا كان في خصم */}
                    {product.discount && (
                        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">
                            Sale
                        </span>
                    )}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading='lazy'
                    />
                </div>

                {/* Product Details */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                        {product.name}
                    </h3>
                    
                    {/* Price and Discount */}
                    <div className="mt-2">
                        <p className="text-lg font-bold text-gray-900">
                            {product.price}
                        </p>
                        {product.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">
                                {product.originalPrice}
                            </p>
                        )}
                    </div>
                    
                    {/* Simple Rating Placeholder */}
                    <div className="flex items-center mt-2 text-yellow-500 text-sm">
                        {'★'.repeat(4)}{'☆'.repeat(1)} (120)
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;