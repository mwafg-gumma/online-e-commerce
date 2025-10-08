import React, { useState } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    console.log(`Product ${product.id} added to cart.`);
    setIsAdded(true);
    
    // hidden the message after 3 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          // star color based on rating
          className={i <= rating ? 'text-yellow-400' : 'text-gray-300'} 
          size={12} 
        />
      );
    }
    return <div className="flex space-x-0.5">{stars}</div>;
  };

  return (
  
    <div className="flex flex-col w-full max-w-xs p-4 bg-white border border-gray-200 hover:shadow-lg transition duration-300 relative">
      
      {/* (Discount Badge) */}
      {product.discount > 0 && (
        <span className="absolute top-0 left-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-br-lg">
          {product.discount}% OFF
        </span>
      )}

      {/*  Featured */}
      {product.featured && (
        <span className="absolute top-8 left-0 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
          FEATURED 
        </span>
      )}
      
      {/* Images */}
      <div className="relative h-48 mb-4 overflow-hidden flex items-center justify-center">
        <img 
          src={product.imgUrl} 
          alt={product.name} 
          className="max-h-full object-contain transition-transform duration-300 hover:scale-105" 
          loading="lazy"
        />
      </div>

      {/* Products Details*/}
      <div className="flex-grow">
        <p className="text-xs text-gray-500">{product.category}</p>
        <h3 className="text-sm font-semibold text-black mt-1 mb-2 hover:text-gray-700">
          {product.name}
        </h3>
        
        {/* Rate */}
        <div className="flex items-center mb-2">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price*/}
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-black mr-2">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>

      {/* Add Card*/}
      <div className="relative mt-auto">
        <button
          onClick={handleAddToCart}
          className="w-full bg-white border border-black text-black py-2 text-sm font-medium hover:bg-black hover:text-white transition duration-200 flex items-center justify-center"
        >
          {/* Select options Add to cart */}
          {product.hasOptions ? 'Select' : <><FaShoppingCart className="mr-2" /> Add to cart</>}
        </button>

        {/* Message For Completed Add To Card*/}
        {isAdded && (
          <div className="absolute w-full mt-1 px-3 py-1 bg-gray-800 text-white text-xs text-center rounded-sm animate-fade-in-down">
            ✅ Added to Cart!
          </div>
        )}
      </div>

    </div>
  )
};

export default ProductCard;
