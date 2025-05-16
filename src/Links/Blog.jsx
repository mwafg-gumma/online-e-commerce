
import { Link } from "react-router-dom"
import { FaFacebookF, FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaAmazon } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi" 
import B1 from "../assets/image/B1.avif"
import B2 from "../assets/image/B2.avif"
import B3 from "../assets/image/B3.avif"
import B5 from "../assets/image/B5.avif"
import profile1 from "../assets/image/profile1.avif"
import profile2 from "../assets/image/profile2.avif"
import profile3 from "../assets/image/profile3.avif"
import profile4 from "../assets/image/profile4.avif"




const Blog = () => {
    return (
    <>
        <section className="bg-gray-50">
            <div className="py-10">
                <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent text-center">
                        Explore our blog to learn more about our company and the latest news in the industry.
                    </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center items-center mt-10">
                    {/* 1 */}
                    <div className="bg-white rounded-md shadow mx-2 py-4  hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointe">
                        <div className="flex flex-col justify-center gap-3">
                            <img src={B2} className="w-full " alt="" />
                            <div className="-ml-80 py-4">
                                <h2 className="text-2xl font-bold md:-ml-24 ml-20 text-gray-800 py-2">
                                    Website One
                                </h2>
                                <h3 className="text-lg ml-80">
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                </h3>
                            </div>
                                <div className="flex flex-row gap-2 justify-between">
                                    <Link to="" className="text-white px-5 py-2 rounded-md bg-stone-800 hover:bg-stone-700 cursor-pointer mx-3">
                                        Source
                                    </Link>
                                    <Link to="" className=" mx-3 bg-stone-600 hover:bg-stone-600 text-white rounded-full p-2 transition" title="Explore">
                                        <FiExternalLink className="text-xl" />
                                    </Link>

                                </div>
                        </div>
                    </div>
                    {/* 2 */}
                            
                    <div className="bg-white rounded-md shadow mx-2 py-4  hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointe">
                        <div className="flex flex-col justify-center gap-3">
                            <img src={B3} className="w-full " alt="" />
                            <div className="-ml-80 py-4">
                                <h2 className="text-2xl font-bold md:-ml-24 ml-20 text-gray-800 py-2">
                                    Website One
                                </h2>
                                <h3 className="text-lg ml-80">
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                </h3>
                            </div>
                            <div className="flex flex-row gap-2 justify-between">
                                    <Link to="" className="text-white px-5 py-2 rounded-md bg-stone-800 hover:bg-stone-700 cursor-pointer mx-3">
                                        Source
                                    </Link>
                                    <Link to="" className=" mx-3 bg-stone-600 hover:bg-stone-600 text-white rounded-full p-2 transition" title="Explore">
                                        <FiExternalLink className="text-xl" />
                                    </Link>
                                </div>
                        </div>
                    </div>
                    {/* 3 */}
                        <div className="bg-white rounded-md shadow mx-2 py-4  hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointe">
                        <div className="flex flex-col justify-center gap-3">
                            <img src={B1} className="w-full " alt="" />
                            <div className="-ml-80 py-4">
                                <h2 className="text-2xl font-bold md:-ml-24 ml-20 text-gray-800 py-2">
                                    Website One
                                </h2>
                                <h3 className="text-lg ml-80">
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                </h3>
                            </div>
                                <div className="flex flex-row gap-2 justify-between">
                                    <Link to="" className="text-white px-5 py-2 rounded-md bg-stone-800 hover:bg-stone-700 cursor-pointer mx-3">
                                        Source
                                    </Link>
                                    <Link to="" className=" mx-3 bg-stone-600 hover:bg-stone-600 text-white rounded-full p-2 transition" title="Explore">
                                        <FiExternalLink className="text-xl" />
                                    </Link>

                                </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="bg-white rounded-md shadow mx-2 py-4  hover:transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointe">
                        <div className="flex flex-col justify-center gap-3">
                            <img src={B5} className="w-full " alt="" />
                            <div className="-ml-80 py-4">
                                <h2 className="text-2xl font-bold md:-ml-24 ml-20 text-gray-800 py-2">
                                    Website One
                                </h2>
                                <h3 className="text-lg ml-80">
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                    Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Magni, totam.
                                </h3>
                            </div>
                                <div className="flex flex-row gap-2 justify-between">
                                    <Link to="" className="text-white px-5 py-2 rounded-md bg-stone-800 hover:bg-stone-700 cursor-pointer mx-3">
                                        Source
                                    </Link>
                                    <Link to="" className=" mx-3 bg-stone-600 hover:bg-stone-600 text-white rounded-full p-2 transition" title="Explore">
                                        <FiExternalLink className="text-xl" />
                                    </Link>

                                </div>
                        </div>
                    </div>
                </div>
                {/* Customers */}
                <div className="mt-20 mx-10">
                    <h1 className=" text-center font-bold text-3xl text-gray-900 my-10">
                        Our Customers
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {/* profile1 */}
                        <div className="bg-gray-50 shadow rounded-md mx-3 my-2 w-80  ">
                            <img src={profile1} className="rounded-full w-24 h-24 object-cover ml-24  md:ml-20 my-5" alt="" />
                            <div className=" py-4 flex flex-col justify-center">
                                <h1 className="text-center font-bold text-2xl ">
                                    Isabella
                                </h1>
                                <h3 className="text-lg  text-center">
                                    Lorem ipsum dolor sit,  consectetur adipisicing elit. Nemo, aut aut!
                                </h3>
                                <Link to="" className="text-white px-5 py-2 text-center rounded-md bg-stone-600 hover:bg-stone-700 cursor-pointer mx-3">
                                    Message
                                </Link>
                            </div>
                        </div>
                        {/* profile2 */}
                        <div className="bg-gray-50 shadow rounded-md mx-3 my-2 w-80 ">
                            <img src={profile2} className="rounded-full w-24 h-24 object-cover ml-24 md:ml-20 my-5" alt="" />
                            <div className=" py-4 flex flex-col justify-center">
                                <h1 className="text-center font-bold text-2xl ">
                                    Yasmin
                                </h1>
                                <h3 className="text-lg  text-center">
                                    Lorem ipsum dolor sit,  consectetur adipisicing elit. Nemo, aut aut!
                                </h3>
                                <Link to="" className="text-white px-5 py-2 text-center rounded-md bg-stone-600 hover:bg-stone-700 cursor-pointer mx-3">
                                    Message
                                </Link>
                            </div>
                        </div>
                        {/* profile3 */}
                        <div className="bg-gray-50 shadow rounded-md mx-3 my-2 w-80 ">
                            <img src={profile3} className="rounded-full w-24 h-24 object-cover ml-24 md:ml-20 my-5" alt="" />
                            <div className=" py-4 flex flex-col justify-center">
                                <h1 className="text-center font-bold text-2xl ">
                                    John Doe
                                </h1>
                                <h3 className="text-lg  text-center">
                                    Lorem ipsum dolor sit,  consectetur adipisicing elit. Nemo, aut aut!
                                </h3>
                                <Link to="" className="text-white px-5 py-2 text-center rounded-md bg-stone-600 hover:bg-stone-700 cursor-pointer mx-3">
                                    Message
                                </Link>
                            </div>
                        </div>
                        {/* profile4 */}
                            <div className="bg-gray-50 shadow rounded-md mx-3 my-2 w-80 ">
                            <img src={profile4} className="rounded-full w-24 h-24 object-cover ml-24 md:ml20 my-5" alt="" />
                            <div className=" py-4 flex flex-col justify-center">
                                <h1 className="text-center font-bold text-2xl ">
                                    Olivia
                                </h1>
                                <h3 className="text-lg  text-center">
                                    Lorem ipsum dolor sit,  consectetur adipisicing elit. Nemo, aut aut!
                                </h3>
                                <Link to="" className="text-white px-5 py-2 text-center rounded-md bg-stone-600 hover:bg-stone-700 cursor-pointer mx-3">
                                    Message
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        {/* footer */}
            <footer className=" mt-10 bg-stone-700 pb-0 ">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-center ">
                        {/* 1 */}
                        <div className="mx-10 mt-8" >
                            <h1 className="font-bold text-white  md:text-3xl py-7 md:mx-10">ABOUT US</h1>
                            <div className="flex flex-col justify-center items-center gap-2">
                                    <Link to="" className="text-white hover:text-gray-900 text-xl md:-ml-16 -ml-14">
                                    Our Store
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900 md:text-lg md:-ml-5 -ml-6">
                                    Affiliate program
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  md:text-lg md:ml-0 -ml-2">
                                    Wholesale program
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900 md:text-lg md:-ml-10 -ml-10">
                                    Press inquiries
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900 text-lg md:-ml-24 -ml-20">
                                    Careers
                                    </Link>
                            </div>
                        </div>
                        {/* 2 */}
                            <div className="mx-8 mt-10" >
                            <h1 className="font-bold text-white  text-1xl py-7 md:mx-10">CUSTOMER SUPPORT</h1>
                            <div className="flex flex-col justify-center items-center gap-2">
                                    <Link to="" className="text-white hover:text-gray-900  md:text-xl md:ml-6 ">
                                    Returns&Exchanges
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  md:text-lg md:ml-4">
                                    Shipping information
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  md:text-lg md:-ml-5 -ml-7 ">
                                    Track Your Order
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  md:text-gl ">
                                    Promo Code Lookup
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  md:text-gl md:-ml-9 -ml-8">
                                    Git Card Lookup
                                    </Link>
                            </div>
                        </div> 
                            <div className="mx-1 md:my-20 my-10" >
                            <div className="flex flex-col justify-center items-center gap-2 mt-8">
                                    <Link to="" className="text-white hover:text-gray-900  text-xl  ">
                                    Earn Rewards
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  text-lg  ">
                                    Payment Plans
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  text-lg ml-7">
                                    Retail Store Locator
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900 text-xl md:-ml-7">
                                    help center
                                    </Link>
                                    <Link to="" className="text-white hover:text-gray-900  text-xl md:-ml-7">
                                    Contact US
                                    </Link>
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
                                <Link to="" className="text-white bg-red-600 px-6 py-3 rounded-md block my-3 md:-ml-20 hover:bg-red-500">
                                Git in The Loop !
                                </Link>
                            </div>
                        </div>
                        </div>
                        </footer>
    </>
    )
}

export default Blog

