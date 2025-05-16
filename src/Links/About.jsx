import Cash from "../assets/image/Cash.png"
import main1 from "../assets/image/main1.png"
import main2 from "../assets/image/main2.png"
import main3 from "../assets/image/main3.png"
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <>
        <section >
            <div className=" text-center ">
            <div className="bg-slate-100 ">
                <h1 className="text-3xl font-bold text-gray-800  pt-10 py-7">
                    WHAT DO YOU ABOUT OUSHOPY 🛍️ 
                </h1>
                <h2 className="text-lg pb-10 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur earum libero <br />  fuga. Sunt quam perspiciatis nam, sorem.
                </h2>
            </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 mx-7 my-10">
                    {/* description */}
                    <div className="mx-4  ">
                        <h1 className="text-4xl font-bold text-gray-800 " >How You Can Deal With Us</h1>
                        <div className="py-3 ">
                            <h3 className="my-2 text-4xl">Easy Ordering Process </h3>
                            <ul className=" mt-10">
                                <li className="text-lg pl-3 flex items-center pb-2">
                                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 "></span>
                                Browse Our Products and choose What suits You Best
                                </li>
                                <li className="text-lg pl-3 flex items-center py-2">
                                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                All Packages are carefully Package to ensure quality
                                </li>
                                <li className="text-lg pl-3 flex items-center py-2">
                                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                Our delivery partners bring your Order right to Your door
                                </li>
                                <li className="text-lg pl-3 flex items-center py-2">
                                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                You'll Receive updates and tracking info by SMS or Email
                                </li>
                                <li className="text-lg pl-3 flex items-center py-2">
                                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                IF anything goes wrong, We'll Fix it Quickly and Professionally 
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* image */}
                    <img src={Cash} className=" md:w-1/3 " alt="" />
                </div>

                <h1 className="text-4xl font-bold my-10">
                    Popular Oline
                </h1>
        </div>

        <div className="bg-gray-50">
            <div className="flex flex-col gap-3 justify-center mt-5 mx-2 md:mx-20 lg:mx-60">
            {/* 1 */}
            <div className="bg-white shadow-lg rounded-md my-3 flex flex-col md:flex-row items-center justify-center w-full transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={main1} className="w-32 md:w-40 mx-3 my-3" />
                <div className="flex flex-col gap-4 mx-3 items-center text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold my-2">Online SHOP</h1>
                    <p className="text-base md:text-lg my-1 text-gray-700 w-full">
                        Online shopping has revolutionized the way we buy products, offering unparalleled convenience, variety, and accessibility.
                        With just a few clicks, consumers can browse thousands of items,
                    </p>
                    <Link to="" className="bg-gray-700 text-white rounded-xl px-4 py-2 block my-2 hover:bg-gray-500">
                        Learn More
                    </Link>
                </div>
                <h3 className="bg-orange-600 rounded-full px-4 py-2 text-white mx-0 md:mx-7 mt-4 my-2 md:-mt-24">
                    15
                </h3>
            </div>
            {/* 2 */}
            <div className="bg-white shadow-lg rounded-md my-3 flex flex-col md:flex-row items-center justify-center w-full transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={main2} className="w-32 md:w-40 mx-3 my-3" />
                <div className="flex flex-col gap-4 mx-3 items-center text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold my-2">Store</h1>
                    <p className="text-base md:text-lg my-1 text-gray-700 w-full">
                        Stores have long been the cornerstone of commerce, offering customers a tangible way to browse, touch, and purchase products.
                        While online shopping has grown rapidly, 
                    </p>
                    <Link to="" className="bg-gray-700 text-white rounded-xl px-4 py-2 block my-2 hover:bg-gray-500">
                        Learn More
                    </Link>
                </div>
                <h3 className="bg-sky-500 rounded-full px-4 py-2 text-white mx-0 md:mx-7 mt-4 my-2 md:-mt-24">
                    20
                </h3>
            </div>
            {/* 3 */}
            <div className="bg-white shadow-lg rounded-md my-3 flex flex-col md:flex-row items-center justify-center w-full transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={main3} className="w-32 md:w-40 mx-3 my-3" />
                <div className="flex flex-col gap-4 mx-3 items-center text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold my-2">Order Now</h1>
                    <p className="text-base md:text-lg my-1 text-gray-700 w-full">
                        🚀 Why Wait? Order Today! Enjoy quick delivery, exclusive deals, and a seamless shopping experience.
                        Whether you need the latest gadgets, fashion, groceries, or home essentials, place your order now and get it delivered to your doorstep!
                    </p>
                    <Link to="" className="bg-gray-700 text-white rounded-xl px-4 py-2 block my-2 hover:bg-gray-500">
                        Learn More
                    </Link>
                </div>
                <h3 className="bg-teal-600 rounded-full px-4 py-2 text-white mx-0 md:mx-7 mt-4 my-3 md:-mt-24">
                    30
                </h3>
            </div>
        </div>
        </div>

        <div className="flex flex-row justify-center apg-5 mt-20 md:-ml-20 mb-7">
            <div className="mx-3">
                <h1 className="bg-slate-100 rounded-md px-4 text-xl py-2 mx-2 cursor-pointer">Pre</h1>
            </div>
            <div>
                <ul className="flex flex-row">
                <li className="bg-orange-400 rounded-xl py-2 px-4 text-xl text-gray-600">1</li>
                <li className="mx-4 text-2xl text-gray-500 pt-1 ">2</li>
                <li className="mx-4 text-2xl text-gray-500 pt-1 ">3</li>
                <li className="mx-4 text-2xl text-gray-500 pt-1 ">4</li>
            </ul>
            </div>
            <div className="mx-5 cursor-pointer">
                <h1 className="bg-slate-200 rounded-md px-4 text-xl py-2">Next</h1>
            </div>
        </div>

    </section>
        </>
    )
}

export default About
