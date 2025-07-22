import { NavLink } from "react-router-dom"
import products from "../../products.json"
import { FaShoppingCart,FaArrowRight } from "react-icons/fa"
import Footer from "../../Footer"

const AllProduct = () => {
    console.log(products)
    return (
    <>
        <section className=' mx-auto max-w-7xl px-1 py-8'>
            <div className='flex flex-row items-center mb-12 mx-5'>
                <NavLink to="/" className="text-gray-500 hover:text-gray-800 px-1">
                    Men's /
                </NavLink>
                <NavLink to="/" className="text-gray-500 hover:text-gray-800 px-1">
                    Women /
                </NavLink>
                <NavLink to="/" className="text-gray-500 hover:text-gray-800 px-1">
                    Jewelry /
                </NavLink>
            </div>
            {/* for products sadie */}
            {/* mx-5 */}
            {/* flex flex-col md:flex-row justify-between gap-11 mx-5 */}
            <aside className=" mx-5">
                    <div className="flex flex-col md:flex-row justify-between gap-11 mx-5 ">
                        {/* details of product */}
                        {/* size  */}
                        <div className="sticky"> 
                            <h1 className="text-gray-800 font-bold ">
                                Size
                                </h1>
                                <div className="py-2">
                                        <div className="flex flex-row md:justify-between md:-ml-2 items-center">
                                        <p className="text-gray-600 font-light px-3 text-sm">SM</p>
                                        <p className="text-gray-600 font-light text-sm ">XL</p>
                                    </div>
                                    <div className="flex flex-row md:justify-between md:-ml-2 items-center">
                                        <p className="text-gray-600 font-light px-3 text-sm">XL</p>
                                        <p className="text-gray-600 font-light text-sm ">XXL</p>
                                    </div>
                                    <div className="flex flex-row md:justify-between md:-ml-2 items-center">
                                        <p className="text-gray-600 font-light px-3 text-sm">M</p>
                                        <p className="text-gray-600 font-light text-sm ">4XXL</p>
                                    </div>
                                </div>
                        {/* colors */}
                            <div className="space-y-1">
                            <h1 className="text-gray-800 font-bold py-2">
                                Colors
                                </h1>
                                <div className="py-2">
                                    <div className="flex flex-row gap-3 md:justify-between px-2 items-center cursor-pointer">
                                        <p className="bg-red-400 rounded-full p-2 "></p>
                                        <p className="bg-gray-200 rounded-full p-2"></p>
                                        <p className="bg-gray-900 rounded-full p-2"></p>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <div className="flex flex-row gap-3 md:justify-between px-2 items-center cursor-pointer">
                                        <p className="bg-green-600 rounded-full p-2 "></p>
                                        <p className="bg-blue-500 rounded-full p-2"></p>
                                        <p className="bg-red-500 rounded-full p-2"></p>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <div className="flex flex-row gap-3 md:justify-between px-2 items-center cursor-pointer">
                                        <p className="bg-orange-400 rounded-full p-2 "></p>
                                        <p className="bg-pink-400 rounded-full p-2"></p>
                                        <p className="bg-gray-500 rounded-full p-2"></p>
                                    </div>
                                </div>
                        </div>
                        {/*Details  */}
                            <div className="space-y-1">
                            <h1 className="text-gray-800 font-bold py-2">
                                Details
                                </h1>
                                <div className="flex flex-col  ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Raw Wash</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Fringe</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Contrast Mesh</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Contrast Sequin</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Split</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Contrast Lace</label>
                                </div>
                                </div>
                        </div>
                        {/* type */}
                            <div className="space-y-1">
                            <h1 className="text-gray-800 font-bold py-2">
                                Type
                                </h1>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Hollow Out</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Metal</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Flowers</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Geometric</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Lock & Key</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Twist </label>
                                </div>
                                </div>
                        </div>
                        {/*  style*/}
                            <div className="space-y-1">
                            <h1 className="text-gray-800 font-bold py-2">
                                Style
                                </h1>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Boho</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Simple</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Naturalistic</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Western</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Party</label>
                                </div>
                                </div>
                                <div className="flex flex-col ">
                                <div>
                                    <input type="checkbox" className="cursor-pointer mx-1" id="Raw"  />
                                    <label htmlFor="Raw" className="text-gray-600 text-sm font-light">Gothic</label>
                                </div>
                                </div>
                        </div>
                        {/*  */}
                    </div>
                    {/* cloth side */}
                    
                    <section className=" grid grid-cols-2 md:grid-cols-4 items-center gap-3  ">
                        {/* 1 */}
                        {products.map((product) => (
                        <div className=" rounded-md m-2 md:w-[200px] hover:shadow-lg  transition-shadow duration-300 ease-in-out">
                        <img src={product.image}  alt="products img" className="md:w-[200px] h-[200px] object-cover" />
                        <div className="px-1 py-2">
                        <div className="flex flex-rwo items-center ">
                        <button className="text-red-400 border border-red-400 rounded-md px-1 text-sm font-light">
                            {product.discount}
                        </button>
                        <h2 className="text-gray-800 font-bold text-sm py-2 mx-1">
                            {product.name}
                        </h2>
                        </div>
                        <p className="text-amber-700 text-sm px-1 font-light hover:underline cursor-pointer">
                        {product.description}
                        </p>
                        <div className="flex flex-row items-center ">
                            <p className="text-sm text-red-500">{product.price} <span className="text-gray-500 font-sm">{product.category}</span></p>
                            <NavLink to="/">
                                <FaShoppingCart className="border border-gray-900 text-2xl  py-1 px-1 text-gray-800  rounded-md ml-5 " />
                            </NavLink>
                        </div>
                        </div>
                        </div>
                        ))}
                        <div className=" flex flex-row items-center md:p-3 p-2 text-center border border-rose-500 rounded-md  cursor-pointer hover:border-red-400 ">
                            <h1 className="text-sm md:text-lg font-light text-rose-600 mx-3 hover:text-rose-500">
                                View More
                            </h1>
                            <FaArrowRight className="mx-2 text-lg text-rose-600 " />
                        </div>
                        {/* */}
                    </section>
                    </div>
            </aside>
        </section>
        {/* footer */}
        <Footer />
    </>
    )
}

export default AllProduct
