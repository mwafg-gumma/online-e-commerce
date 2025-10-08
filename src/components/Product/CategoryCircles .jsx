
import React from 'react';
import { Link } from 'react-router-dom'; 

// Data Of Categories
import men from '../../assets/image/men.jpeg';
import Bage from '../../assets/image/Bage.jpeg';
import Jewelry from '../../assets/image/Jewelry.jpeg';
import Kids from '../../assets/image/Kids.jpeg';
import shoes from '../../assets/image/shoes.jpeg';
import sport from '../../assets/image/sport.jpeg';
import watch from '../../assets/image/watch.jpeg';
import women from '../../assets/image/women.jpeg';



const categoriesData = [
  // استخدم متغيرات الصور المستوردة
    { title: "Men", imgUrl: men, link: "/shop/men" },
    { title: "women", imgUrl: women, link: "/shop/men" },
    { title: "Kids", imgUrl: Kids, link: "/shop/men" },
    { title: "Bage", imgUrl: Bage, link: "/shop/men" },
    { title: "Jewelry", imgUrl: Jewelry, link: "/shop/men" },
    { title: "shoes", imgUrl: shoes, link: "/shop/men" },
    { title: "sport", imgUrl: sport, link: "/shop/men" },
    { title: "watch", imgUrl: watch, link: "/shop/men" },
];

// مكون يمثل الدائرة الواحدة (الصورة + الرابط)
const CategoryItem = ({ title, imgUrl, link }) => {
    // استخدم <Link to={link}> إذا كنت تستخدم React Router
    // إذا لم تستخدمه، خليها <a href={link}>
    const LinkComponent = 'a'; // لو كنت بتستخدم <Link> بدلها بـ 'Link'

    return (
        <LinkComponent 
            href={link} // إذا كان LinkComponent هو 'a'، استخدم href. لو 'Link'، استخدم to
            className="flex flex-col items-center  group transition duration-300 transform hover:scale-105"
        >
            {/* Div img*/}
            <div className="w-20 h-20 md:w-36 md:h-36 overflow-hidden  transition duration-300">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full md:w-[120px] md:h-[120px] object-cover rounded-full"
                />
            </div>
            
            {/* link of img*/}
            <span className="lg:-mt-4 mt-3 text-black text-sm md:text-base font-semibold group-hover:underline lg:-ml-7 ">
                {title}
            </span>
        </LinkComponent>
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