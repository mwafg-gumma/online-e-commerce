
// import {a} from "react-router-dom"
import { FaFacebookF, FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaAmazon } from "react-icons/fa"
import back3 from '../../assets/image/back3.png'
import HeadPhone7 from "../../assets/image/HeadPhone7.png"
import glasses2 from "../../assets/image/glasses2.png"
import Playstation from "../../assets/image/Playstation.png"
import Laptop2 from "../../assets/image/Laptop2.png"
import iphone from "../../assets/image/iphone.png"
import shoes1 from "../../assets/image/shoes1.jpg"
import shoes2 from "../../assets/image/shoes2.jpg"
import Jacket1 from "../../assets/image/Jacket1.png"
import Jacket2 from "../../assets/image/Jacket2.png"
import Pants1 from "../../assets/image/Pants1.png"
import Pants2 from "../../assets/image/Pants2.png"
import shirt1 from "../../assets/image/shirt1.png"
import shirt2 from "../../assets/image/shirt2.png"
import shirt from "../../assets/image/shirt.png"
import shirt3 from "../../assets/image/shirt3.png"
import shirt4 from "../../assets/image/shirt4.png"
import shirt5 from "../../assets/image/shirt5.png"
import shirt7 from "../../assets/image/shirt7.png"
import kids1 from "../../assets/image/kids1.png"
import kids2 from "../../assets/image/kids2.png"
import kids3 from "../../assets/image/kids3.png"
import black1 from "../../assets/image/black1.png"
import black3 from "../../assets/image/black3.png"
import iphone1 from "../../assets/image/Iphone1.png"
import iphone2 from "../../assets/image/Iphone2.png"
import LaptopFan from "../../assets/image/LaptopFan.png"
import appleWatch from "../../assets/image/appleWatch.png"

const AllProduct = () => {
    return (
        <>
        <section className="mt-20 md:mx-8 mx-2">
            <div className=" my-9">
                <div className="flex flex-row md:justify-between justify-center gap-5 rounded-md bg-white shadow-md items-center">
                    <h1 className="text-xl p-5 text-gray-600 px-3 md:px-10" >
                        All Products
                    </h1>
                    <div className="md:px-20 ">
                        <a href="#" className="bg-orange-500 hover:bg-orange-300 rounded-tl-lg  px-4 py-2 text-white mx-1 md:mx-4 ">
                        ALL
                        </a>
                        <a href="#" className="bg-orange-300 hover:bg-orange-500 rounded-tl-lg  px-4 py-2 text-white  md:mx-4 ">
                        Discount
                        </a>
                        <a href="#" className="bg-orange-300 hover:bg-orange-500 rounded-tl-lg  px-4 py-2 text-white mx-1 md:mx-4 ">
                        Smart
                        </a>
                    </div>
                </div>
                {/* Products */}
                <div className="mx-8 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10  ">
                        {/* 1 */}
                        <div className="bg-white shadow-xl rounded-xl block  my-2">
                            <img src={HeadPhone7} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Headphone
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    100$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        🎶
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="bg-white shadow-xl rounded-xl mx-10 my-2 md:w-60 ">
                            <img src={Playstation} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer  ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    PlayStation (PS5)
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    500$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        ®️
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={iphone} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Earbuds
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    140$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-1">
                                    <h4 className='text-red-600 text-xl'>
                                        Not available
                                    </h4>
                                    <p className='text-white bg-red-600 rounded-lg mx-3 px-2 py-1 ' >
                                        SALE
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={Laptop2} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    MacBook <span className='text-sky-400'>Pro</span>
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    600$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        💻
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 5 */}
                            <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={back3} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Backpack
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    80$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        🎒
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 6 */}
                            <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={shoes1} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Sneakers
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    75$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        👟
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 mt-6 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 7   */}
                            <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={shoes2} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer  ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Sneakers <span className='text-sky-500'> NILE</span>
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    100$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        👟
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 8 */}
                            <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={glasses2} className='w-full hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer px-1 ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Glasses <span className='text-sky-500'>Sun</span>
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    20$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        🕶️
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 9 */}
                            <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={LaptopFan} className='w-full h-60 object-contain hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer px-1 ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Laptop <span className='text-sky-600'>Fan</span>
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    40$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        🪭                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 10 */}
                        <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={iphone1} className='w-full h-60 object-contain hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer px-1 ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Iphone <span className='text-sky-500'>(16)</span>
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    1500$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-red-600 mx-3 font-bold' >
                                        <del>2000$</del>
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 11 */}
                            <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={iphone2} className='w-full h-60 object-contain hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer px-1 ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    APPLE <span className='text-sky-500'>(TABLE)</span>
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    450$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='mx-3 font-bold bg-red-500  rounded-md text-white py-1 px-3' >
                                        SEAL
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 12 */}
                                <div className="bg-white shadow-xl rounded-xl mx-3 my-2">
                            <img src={appleWatch} className='w-full h-60 object-contain hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer px-1 ' />
                            <div className="px-2">
                                <h2 className="font-bold text-2xl py-2">
                                    Apple <span className='text-sky-500'>Watch </span>
                                </h2>
                                <h3 className='text-red-500 text-1xl'>
                                    350$
                                </h3>
                                <div className="flex flex-row justify-between gap-4 mb-2">
                                    <h4 className='text-yellow-400 text-2xl mx-1'>
                                        {'★★★★★'}
                                    </h4>
                                    <p className='text-gray-600 mx-3 font-bold' >
                                        ⌚
                                    </p>
                                </div>
                                <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-4 py-2 my-2 '>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* 13 */}
                    </div>
                            {/* Fashion */}
                            <div className="mt-10 text-center py-10">
                                <h1 className="text-4xl font-bold text-gray-600 mb-20">
                                    Fashion 
                                </h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 -mx-1">
                                    {/* Fashion Card Example */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            10% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={Pants1} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Pants </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">30</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">110$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            30% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={Pants2} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Pants (Jeans)</h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">38</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">95$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 3 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            22% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={shirt1} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Casual Half </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">M</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">80$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 4 */}
                                        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            10% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={Jacket1} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jacket (B)</h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">XL</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">110$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 5 */}
                                        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            15% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={Jacket2} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jacket(M)</h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">XXL</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">130$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 6 */}
                                        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            20% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={shirt2} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Women TShirt </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">sm</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">100$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 7 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            20% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={shirt3} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Real Madrid Shirt (Origin) </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">sm</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">135$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 8 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            20% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={shirt4} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">(UNITED) TShirt </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">L</span>
                                                <span className="text-white bg-red-500  block rounded-md px-3 py-1 text-sm font-medium ml-10">SALE</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">100$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 9 */}
                                        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            10% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={shirt} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Graphic T-Shirt </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">L</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">130$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 10 */}
                                        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            20% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={kids1} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">White T-Shirt </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">M</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">100$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 11 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            39% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={kids2} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Party Dress (Kids) </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">sm</span>
                                                <span className="text-white bg-red-500  block rounded-md px-3 py-1 text-sm font-medium ml-10">SALE</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">220$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 12 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            35% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={kids3} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Striped Dress (Kids) </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">sm</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">200$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 13 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            42% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={shirt5} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Chicago Bulls (Jersey) </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">L</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">130$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 14 */}
                                        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            25% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={shirt7} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Barcelona Shirt (Origin) </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">sm</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">80$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 15 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            33% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={black1} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Black Casual Dress </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">sm</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">180$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 16 */}
                                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                                            20% OFF
                                        </div>
                                        {/* Image */}
                                        <img src={black3} alt="Pants" className="w-full h-56 object-cover" />
                                        {/* Description */}
                                        <div className="p-4 w-full flex flex-col items-start">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Green Wrap Dress </h2>
                                            <div className="flex items-center mb-2">
                                                <span className="text-yellow-500 text-lg mr-2">★★★★★</span>
                                                <span className="text-gray-500 text-sm font-medium ml-2">M</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full mb-4">
                                                <span className="text-red-500 text-lg font-bold">210$</span>
                                            </div>
                                            <button className="mt-auto w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* 17 */}
                                </div>
                                </div>
                                </div>   
                            </div>
                        </section>
                    <footer className=" mt-10 bg-stone-700 pb-0 ">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-center ">
                        {/* 1 */}
                        <div className="mx-10 mt-8" >
                            <h1 className="font-bold text-white  text-3xl py-7 md:mx-10">ABOUT US</h1>
                            <div className="flex flex-col justify-center items-center gap-2">
                                    <a href="" className="text-white hover:text-gray-900 text-xl md:-ml-16 -ml-14">
                                    Our Store
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900 md:text-lg md:-ml-5 -ml-6">
                                    Affiliate program
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  md:text-lg md:ml-0 -ml-2">
                                    Wholesale program
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900 md:text-lg md:-ml-10 -ml-10">
                                    Press inquiries
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900 text-lg md:-ml-24 -ml-20">
                                    Careers
                                    </a>
                            </div>
                        </div>
                        {/* 2 */}
                            <div className="mx-8 mt-10" >
                            <h1 className="font-bold text-white  text-1xl py-7 md:mx-10">CUSTOMER SUPPORT</h1>
                            <div className="flex flex-col justify-center items-center gap-2">
                                    <a href="" className="text-white hover:text-gray-900  md:text-xl md:ml-6 ">
                                    Returns&Exchanges
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  md:text-lg md:ml-4">
                                    Shipping information
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  md:text-lg md:-ml-5 -ml-7 ">
                                    Track Your Order
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  md:text-gl ">
                                    Promo Code Lookup
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  md:text-gl md:-ml-9 -ml-8">
                                    Git Card Lookup
                                    </a>
                            </div>
                        </div> 
                            <div className="mx-1 md:my-20 my-10" >
                            <div className="flex flex-col justify-center items-center gap-2 mt-8">
                                    <a href="" className="text-white hover:text-gray-900  text-xl  ">
                                    Earn Rewards
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  text-lg  ">
                                    Payment Plans
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  text-lg ml-7">
                                    Retail Store Locator
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900 text-xl md:-ml-7">
                                    help center
                                    </a>
                                    <a href="" className="text-white hover:text-gray-900  text-xl md:-ml-7">
                                    Contact US
                                    </a>
                            </div>
                        </div>
                        <div className="mx-3 mt-6">
                            <h1 className="md:text-3xl text-2xl text-white font-bold md:py-5 mt-10">Contact With US </h1>
                            <div className="flex flex-col justify-center items-center mx-3 my-2">
                                <div className="flex flex-row justify-center">
                                    <FaYoutube className="text-red-500 md:text-3xl text-xl mx-2 cursor-pointer" />
                                    <FaAmazon className="text-stone-500 md:text-3xl text-xl mx-2 cursor-pointer" />
                                    <FaTwitter className="text-sky-600 md:text-3xl text-xl mx-2 cursor-pointer" />
                                    <FaTiktok className="text-black md:text-3xl text-xl mx-2 cursor-pointer" />
                                    <FaInstagram className="text-rose-600 md:text-3xl text-xl mx-3 cursor-pointer" />
                                    <FaFacebookF className=" text-blue-700md:text-3xl text-xl mx-3 cursor-pointer" />
                                </div>
                                <p className="text-white md:text-lg py-3 ">
                                    Want $20 OFF? Sign up for our NewsLetters                   
                                </p>
                                <p className="text-white md:text-lg ">
                                    Sing up for SMS alerts and be the First to Know !
                                </p>
                                <a href="" className="text-white bg-red-600 px-6 py-3 rounded-md block my-3 md:-ml-20 hover:bg-red-500">
                                Git in The Loop !
                                </a>
                            </div>
                        </div>
                        </div>
                        </footer>
                            {/*  */}
                        </>
    )
}

export default AllProduct
