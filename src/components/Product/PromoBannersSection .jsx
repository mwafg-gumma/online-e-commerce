import React from 'react';

import bannerShoes from '../../assets/image/bannerShoes.png';
import bannerSunglasses from '../../assets/image/bannerSunglasses.png';
import bannerMenFashion from '../../assets/image/bannerMenFashion.png';

const PromoBannersSection = () => {
    return (
        <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="
            flex flex-nowrap overflow-x-auto gap-6 pb-4
            lg:grid lg:grid-cols-3
            ">
            
            {/*  Box 1*/}
            <div className="
                flex-shrink-0 w-[300px] sm:w-[350px] lg:w-auto
                relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden
                flex items-center justify-between p-3 text-left 
            " style={{ backgroundColor: '#F0E5D7' }}>

                {/* Text side*/}
                <div className="relative z-10 text-black max-w-[50%]"> 
                <p className="text-xs font-semibold uppercase mb-1">Special Products</p>
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">Keep Your Feet <br /> Cool And Comfy</h3>
                <a href="#" className="text-sm font-semibold underline hover:no-underline">Shop Now</a>
                </div>

                {/* img*/}
                <img 
                src={bannerShoes} 
                alt="Keep Your Feet Cool And Comfy" 
                className="absolute right-0 top-1/2 -translate-y-1/2 object-contain z-0" 
                style={{ height: '100%', width: '50%' }} // تأخذ نصف عرض البنر
                />
            </div>

            {/* Box 2*/}
            <div className="
                flex-shrink-0 w-[300px] sm:w-[350px] lg:w-auto
                relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden
                flex items-center justify-between p-6 text-left
            " style={{ backgroundColor: '#FADEE2' }}>
                <div className="relative z-10 text-black max-w-[50%]">
                <p className="text-xs font-semibold uppercase mb-1">30% OFF This Week</p>
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">Sunglasses <br /> New Collection</h3>
                <a href="#" className="text-sm font-semibold underline hover:no-underline">Shop Now</a>
                </div>
                <img 
                src={bannerSunglasses} 
                alt="Sunglasses New Collection" 
                className="absolute right-0 top-1/2 -translate-y-1/2 object-contain z-0"
                style={{ height: '100%', width: '50%' }}
                />
            </div>

            {/* Box 3*/}
            <div className="
                flex-shrink-0 w-[300px] sm:w-[350px] lg:w-auto
                relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden
                flex items-center justify-between p-3 text-left
            " style={{ backgroundColor: '#CCE3F3' }}>
                <div className="relative z-10 text-black max-w-[50%]">
                <p className="text-xs font-semibold uppercase mb-1">Special Products</p>
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">Prepare For Your  Latest Season</h3>
                <a href="#" className="text-sm font-semibold underline hover:no-underline">Shop Now</a>
                </div>
                <img 
                src={bannerMenFashion} 
                alt="Prepare For Your Latest Season" 
                className="absolute right-0 top-1/2 -translate-y-1/2 object-contain z-0"
                style={{ height: '100%', width: '50%' }}
                />
            </div>

            </div>
        </div>
        </section>
    );
    };

    export default PromoBannersSection;