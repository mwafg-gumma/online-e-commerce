import React from 'react';
import Bg6 from '../../assets/image/Bg6.png';

const Hero = () => {
  return (
    
    <div className="relative w-full min-h-[400px] flex items-center justify-center  bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-8 z-10">
        
        {/* (Text Content) */}
        <div className="flex-1 md:text-center lg:text-left mb-8 lg:mb-0 lg:mr-40 max-w-lg">
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-2">Trend design!</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-4 leading-tight">
            FOR ALL
            <br />
            YOUR NEEDS
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-md">
            Discover our exclusive collections for men, women, and kids.
            Experience the perfect blend of style, quality, and comfort.
            Your ultimate shopping destination.
          </p>
          
          {/* bg-white*/}
          <div className="inline-block bg-white p-2 text-sm text-gray-700 border border-gray-300 rounded-sm mb-6">
            <span className="font-semibold">20% discount</span> Over $39 purchase use Code: <span className="font-bold">FASHION1930</span>
          </div>
          
          {/* button */}
          <div>
            <button className="bg-gray-900 text-white px-8 py-3 text-lg  font-semibold hover:bg-gray-800 transition duration-300 rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex-1  justify-center items-center lg:justify-end min-h-[500px] hidden md:block">
          <div className="absolute inset-0 bg-gray-200 rounded-lg transform rotate-[10deg] scale-104 z-0" style={{
            width: '40%', 
            height: '102%',
            left: '31%',
            top: '-10%'
          }}></div>
          
          {/* img*/}
          <img 
            src={Bg6} 
            alt="Fashion model" 
            className="relative w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg z-10"
            style={{ 
              borderRadius: '10px' 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;