
import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import products from "../../products.json";
import Footer from "../../Footer";
import {
  FaShoppingCart,
  FaTruck,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaStar,
  FaHeart
} from 'react-icons/fa';

const reviews = [
  { name: "Moffak", email: "mof*****@example.com", rating: 5, description: "Absolutely incredible sound quality and the ANC is a game-changer. Worth every penny!" },
  { name: "Jane D.", email: "jane*****@email.com", rating: 4, description: "Great battery life and comfortable fit. The sound is excellent, though slightly bass-heavy for my taste." },
  { name: "Suresh P.", email: "suresh*****@example.com", rating: 5, description: "Fast delivery and the headphones exceeded expectations. Excellent bass response." },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');

  // Find product by id (string or number)
  const product = Array.isArray(products)
    ? products.find(p => p && String(p.id) === String(id))
    : undefined;

  // Normalize image path so it works for public/image/...
  const normalizeImageSrc = (img) => {
    if (!img) return '/image/placeholder.png';
    if (/^(https?:)?\/\//.test(img)) return img; // absolute URL
    if (/^\//.test(img)) return img; // already absolute path
    return `/${String(img).replace(/^\.?\/+/, '')}`; // remove leading / and add leading /
  };

  const imgSrc = product ? normalizeImageSrc(product.image) : '/image/placeholder.png';

  const renderStars = (rating = 0) => {
    const full = Math.round(rating || 0);
    return (
      <div className="flex items-center space-x-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < full ? 'text-yellow-400' : 'text-gray-200'}
            size={14}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  // If products.json is invalid or product not found, show friendly message
  if (!product) {
    return (
      <div className="text-center py-20 px-4 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-red-600">Product Not Found!</h1>
        <p className="mt-4 text-lg">We couldn't find the item you were looking for.</p>
        <div className="mt-6">
          <img
            src={imgSrc}
            alt="placeholder"
            className="mx-auto w-48 h-48 object-contain rounded-md shadow-sm"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/image/placeholder.png'; }}
          />
        </div>
        <NavLink to="/" className="text-blue-500 hover:underline mt-6 inline-block text-xl">← Go back to all products</NavLink>
        <Footer />
      </div>
    );
  }

  const priceValue = parseFloat(String(product.price || '').replace(/[^0-9.]/g, '')) || 0;
  const freeDeliveryThreshold = 250;
  const isEligibleForFreeDelivery = priceValue > freeDeliveryThreshold;

  return (
    <div id="top" className="min-h-screen flex flex-col font-sans bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
        </div>
      </header>

      <main className="flex-grow mx-auto max-w-7xl px-4 py-8 lg:py-12 w-full">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side: Image */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src={imgSrc}
                alt={product.name || 'product image'}
                className="w-full max-w-[560px] h-auto max-h-[550px] object-contain rounded-lg border border-gray-100 transition-transform duration-300 hover:scale-[1.01]"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/image/placeholder.png'; }}
              />
            </div>

            {/* Right Side: Details & Actions */}
            <div className="lg:w-1/2 p-4">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                {renderStars(product.rating || 4)}
                <span>({Number(product.rating || 4).toFixed(1)} Average, {reviews.length} Reviews)</span>
              </div>

              <div className="flex items-baseline space-x-3 mb-6 border-b pb-4">
                <p className="text-4xl font-black text-red-600">{product.price}</p>
                {product.originalPrice && <p className="text-lg text-gray-500 line-through">{product.originalPrice}</p>}
                {product.discount && <span className="px-3 py-1 bg-red-100 text-red-600 font-bold rounded-full text-sm">{product.discount} OFF</span>}
              </div>

              <p className="text-gray-700 mb-6">{product.description || "No description provided."}</p>

              <div className={`flex items-center space-x-3 p-4 mb-6 rounded-lg shadow-inner ${isEligibleForFreeDelivery ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                <FaTruck className="text-2xl" />
                <p className="font-semibold text-base">
                  Free delivery for orders over ${freeDeliveryThreshold}.00
                </p>
              </div>

              <div className="flex space-x-4 mb-8">
                <button
                  className="flex-grow flex items-center justify-center py-3 px-6 bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-700 transition duration-300 uppercase transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaShoppingCart className="mr-3 text-xl" />
                  Add to Cart
                </button>

                <button className="p-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-red-50 hover:border-red-500 hover:text-red-500 transition duration-300">
                  <FaHeart size={20} />
                </button>
              </div>

              <NavLink to="/" className="text-sm text-blue-500 hover:underline mt-4 block text-center">Continue Shopping</NavLink>

              <div className="flex items-center justify-start space-x-4 pt-4 border-t border-gray-100 mt-4">
                <span className="text-gray-600 font-medium text-sm">Share Product:</span>
                <a href="#" aria-label="Share on Facebook" className="text-gray-400 hover:text-blue-600 transition duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" aria-label="Share on Twitter" className="text-gray-400 hover:text-sky-400 transition duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" aria-label="Share via Email" className="text-gray-400 hover:text-red-500 transition duration-300">
                  <FaEnvelope size={20} />
                </a>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pt-6 mt-6 pb-1">Specifications</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {(product.details || ["Features not specified."]).map((detail, i) => (
                  <li key={i} className="text-sm">{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12">
            <div className="flex justify-center border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-8 py-3 text-lg font-semibold transition duration-300 ${activeTab === 'description' ? 'text-gray-900 border-b-4 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('review')}
                className={`px-8 py-3 text-lg font-semibold transition duration-300 ${activeTab === 'review' ? 'text-gray-900 border-b-4 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Review ({reviews.length})
              </button>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-xl shadow-md">
              {activeTab === 'description' && (
                <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                  <p>{product.productsDescription ||'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus '}</p>
                  <p>{product.productsDescription ||'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus aadipisicing elit Soluta doloribus '}</p>
                  <p>{product.productsDescription ||'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus aadipisicing elit '}</p>
                  <p>{product.productsDescription ||'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus aadipisicing elit Soluta doloribus '}</p>
                </div>
              )}

              {activeTab === 'review' && (
                <div className="space-y-8">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 pt-2">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{review.name}</h4>
                          <div className="text-sm text-gray-500 mt-0.5">{review.email}</div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          {renderStars(review.rating)}
                          <span className="text-xs font-bold text-gray-700 block">({review.rating}.0 / 5)</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mt-2 italic">"{review.description}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
// ...existing code...