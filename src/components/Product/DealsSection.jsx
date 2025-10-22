import React from 'react';
import ProductCard from './ProductCard'; 
import Backpacks from '../../assets/image/Backpacks.png';
import Dresses from '../../assets/image/Dresses.png';
import Belts from '../../assets/image/Belts.png';
import Handbags from '../../assets/image/Handbags.png';
import Backwatch from '../../assets/image/Backwatch.jpg';


// Data for Products
const dealsData = [
  { 
    id: 1, 
    name: "Tan Solid Laptop Backpack", 
    category: "Backpacks", 
    rating: 4, 
    reviews: 2, 
    price: 149.00, 
    oldPrice: 185.00, 
    discount: 19, 
    featured: true,
    hasOptions: true,
    imgUrl: Backpacks 
  },
  { 
    id: 2, 
    name: "Brown Q Explorist HR ", 
    category: "Smart Analog, Smart watch", 
    rating: 5, 
    reviews: 1, 
    price: 1699.00, 
    oldPrice: 2000.00, 
    discount: 15, 
    featured: false,
    hasOptions: true,
    imgUrl: Backwatch
  },
  { 
    id: 3, 
    name: "Brown Solid Laptop Bag", 
    category: "Handbags, Messenger Bag", 
    rating: 4, 
    reviews: 1, 
    price: 99.00, 
    oldPrice: 120.00, 
    discount: 15, 
    featured: true,
    hasOptions: false,
    imgUrl: Handbags
  },
  { 
    id: 4, 
    name: "Brown Solid Leather Belt", 
    category: "Belts", 
    rating: 5, 
    reviews: 1, 
    price: 15.00, 
    oldPrice: 18.00, 
    discount: 17, 
    featured: false,
    hasOptions: false,
    imgUrl: Belts
  },
  { 
    id: 5, 
    name: "Burgundy Solid Wrap Dress", 
    category: "Dresses & Tops, Shorts & Skirts", 
    rating: 0, 
    reviews: 0, 
    price: 95.00, 
    oldPrice: 100.00, 
    discount: 5, 
    featured: false,
    hasOptions: true,
    imgUrl: Dresses
  },
];


const DealsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10">
          Deals of The Day
        </h2>
        <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap justify-start gap-6 pb-4">
          {dealsData.map(product => (
            <div 
              key={product.id} 
              className="
                flex-shrink-0  
                w-64         
                lg:w-[calc(20%-20px)]
              "
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default DealsSection;