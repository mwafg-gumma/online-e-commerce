import { NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter, FaSnapchat,FaTiktok,FaLinkedin,FaAppStore } from "react-icons/fa"

const Footer = () => {
    return (
    <>
    <section className="mt-5">
        <div className="grid md:grid-cols-4 grid-cols-2  mx-5">
            {/*  1 */}
            <div className="flex flex-col gap-1 ">
                <h1 className="font-bold  text-xl">COMPANY INFO</h1>
                {/* links */}
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    About SHOPY
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Sustainability
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Fashion Blogger
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                Supply Chain
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Careers
                </NavLink>
            </div>
            {/*  2 */}
                    <div className="flex flex-col gap-1 md:-ml-12 ">
                <h1 className="font-bold  text-xl">HELP & SUPPORT</h1>
                {/* links */}
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Shipping Info
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Returns
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    How to Order
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                How to Track
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Size Guide
                </NavLink>
            </div>
            {/*  3 */}
                    <div className="flex flex-col gap-1 md:-ml-12">
                <h1 className="font-bold  text-xl">CUSTOMER CARE</h1>
                {/* links */}
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Contact Us
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Payment & Tax
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Bonus Point
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                Recalls
                </NavLink>
                <NavLink to="/" className="font-light text-gray-400 hover:text-gray-600 cursor-pointer text-sm ">
                    Coupon
                </NavLink>
            </div>
            {/*  4*/}
            <div >
                <div className="flex flex-col md:flex-row justify-between md:-ml-24 -ml-1">
                    <div className="mx-1">
                        <h3 className="text-lg font-normal">
                            FIND US ON
                        </h3>
                        <div className="grid grid-cols-3 gap-2 md:py-1 py-5">
                        <FaFacebook className="text-blue-500 mx-2 text-2xl" />
                        <FaTiktok className="text-gray-800 mx-2 text-2xl" />
                        <FaAppStore className="text-sky-600 mx-2 text-2xl" />
                        <FaSnapchat className="text-amber-400 mx-2 text-2xl" />
                        <FaTwitter className="text-sky-600 mx-2 text-2xl" />
                        <FaInstagram className="text-pink-600 mx-2 text-2xl" />
                        {/* <FaLinkedin className="text-sky-600 mx-2 text-2xl" /> */}
                        </div>
                    </div>
                <div className="hidden md:block mx-1">
                    <p className="text-gray-800 -ml-3 font-normal text-sm">
                        DOWNLOAD SHOPY APP TO SAVE MORE!
                    </p>
                </div>
                </div>
                <div className="md:-ml-20 -ml-44 md:my-2 my-10">
                    <h3 className="font-normal text-lg">
                        Sign up for SheIn style news
                    </h3>
                    <div className="flex mt-2">
                <input
                type="email"
                placeholder="Enter your Email Address"
                className="px-11 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-rose-500 text-white px-4 py-2 rounded-r-md hover:bg-rose-600 transition">
            Subscribe
            </button>
            </div>
                </div>
                {/*  */}
                <div className="flex items-center mt-4 md:-ml-20 -ml-44">
                <input
                    type="number"
                    placeholder="+1"
                    className="w-16 px-2 py-2 rounded-l-md border border-gray-300 focus:outline-none"
                />
                <input
                    type="tel"
                    placeholder="Enter number"
                    className="px-3 py-2 border-t border-b border-gray-300 focus:outline-none"
                    style={{ borderLeft: "none", borderRight: "none" }}
                />
            <button className="bg-rose-500 text-white px-4 py-2 rounded-r-md hover:bg-rose-600 transition">
                Subscribe
            </button>   
            </div>
            {/*  */}
            {/* note */}
            <div className="py-5 -ml-20">
                <p className="text-gray-500 text-sm">
                    By clicking the SUBSCRIBE button, you are agreeing to our Privacy & Cookie Policy  <br /> If you want to unsubsribe 
                    the marketing email,  please proceed to our privacy center.
                </p>
            </div>
            </div>
            <div className="mx-3">
                <h2 className="text-gray-600 text-sm">
                    ©2025 SHOPY All Rights Reserved
                </h2>
                <p className="py-2 text-gray-500 text-sm md:w-[400px] w-[350px]">
                    Privacy CenterPrivacy & Cookie PolicyDo Not Sell or Share My Personal InformationTerms & ConditionsMarketplace IP RulesIP NoticeAccessibilityImprint
                </p>
            </div>
        </div>
    </section>
    </>
)
}

export default Footer
