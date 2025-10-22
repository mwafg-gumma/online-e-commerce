
import React from 'react';
import { Link } from 'react-router-dom'; 

// Data Of Categories
import Bgm10 from '../../assets/image/Bgm10.jpg';
import Bgb from '../../assets/image/Bgb.jpg';
import Bgj6 from '../../assets/image/Bgj6.jpg';
import BgK from '../../assets/image/BgK.jpg';
import BgShoes1 from '../../assets/image/BgShoes1.jpg';
import Bgsport from '../../assets/image/Bgsport.jpg';
import watch from "../../assets/image/watch.jpeg";
import women from '../../assets/image/women.jpeg';



const categoriesData = [
    { title: "Men", imgUrl: Bgm10, link: "/men" },
    { title: "women", imgUrl: women, link: "/women" },
    { title: "Kids", imgUrl: BgK, link: "/kids" },
    { title: "Bage", imgUrl: Bgb, link: "/bags" },
    { title: "Jewelry", imgUrl: Bgj6, link: "/jewelry" },
    { title: "shoes", imgUrl: BgShoes1, link: "/shoes" },
    { title: "sport", imgUrl: Bgsport, link: "/sport" },
    { title: "watch", imgUrl: watch, link: "/watch" },

]

const CategoryItem = ({ title, imgUrl, link }) => {
    return (
        <Link 
            to={link}
            className="flex flex-col items-center group transition duration-300 transform hover:scale-105"
        >
            <div className="w-20 h-20 md:w-36 md:h-36 overflow-hidden transition duration-300">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full md:w-[120px] md:h-[120px] object-cover rounded-full"
                    loading='lazy'
                />
            </div>
            <span className="lg:-mt-4 mt-3 text-black text-sm md:text-base font-semibold group-hover:underline lg:-ml-7 ">
                {title}
            </span>
        </Link>
    );
};


const CategoryCircles = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Shop By Category
        </h2>

        <div className="flex flex-wrap flex-row justify-center gap-x-6 gap-y-8 md:gap-x-12">
          {categoriesData.map((category, index) => (
            <CategoryItem 
              key={index} 
              title={category.title} 
              imgUrl={category.imgUrl} 
              link={category.link} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CategoryCircles;