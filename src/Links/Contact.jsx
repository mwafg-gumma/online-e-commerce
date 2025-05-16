
import {Link } from "react-router-dom"
import {FaGoogle,FaApple} from "react-icons/fa"

const Contact = () => {
    return (
        <>
            <section className=" bg-slate-200 md:min-h-[570px] min-h-[800px] md:-mt-0 -mt-24 flex items-center justify-center">
                <div className="text-center ">
                    <div className="flex flex-col justify-center gap-5 rounded-md ">
                        <div className="my-7 bg-white rounded-xl shadow-md w-96  ">
                            <h1 className="text-3xl font-bold text-gray-800 py-7">
                                Welcome Back
                            </h1>
                        <div className="grid grid-cols-1 mt-3">
                            {/* <div className="mx-10 flex  flex-row justify-center ">
                                <input type="text" placeholder="Your name" className="py-2 pl-8 pr-4 rounded-lg border border-gray-300 focus:outline-none my-3" />
                            </div> */}
                            <div className="mx-20 flex flex-row ">
                                <input type="text" placeholder="Your Email" className="py-2 pl-8 pr-4 rounded-lg border border-gray-300 focus:outline-none my-3" />
                            </div>
                                <div className=" mx-20 flex flex-row ">
                                <input type="text" placeholder="Password" className="py-2 pl-8 pr-4 rounded-lg border border-gray-300 focus:outline-none my-3" />
                            </div>
                                <div className=" mx-20 flex flex-row ">
                                <input type="text" placeholder="Confirm Password" className="py-2 pl-8 pr-4 rounded-lg border border-gray-300 focus:outline-none my-3" />
                            </div>
                        </div>
                        <Link to="" className="block bg-black hover:bg-gray-500  rounded-md px-10 py-1 mx-10 my-3 text-white text-2xl">
                        Sing in
                        </Link>
                        <div className="my-3">
                            <h2 className="text-lg" >Don't have an account?  <span className="text-blue-600 cursor-pointer hover:text-blue-800">Sign up now</span></h2>
                            <p className="mt-3 text-lg">Or With</p>
                        </div>
                        <div className="mt-3 mb-3 flex flex-row mx-24">
                                <button className="border rounded-full p-3 flex items-center justify-center mx-6 text-lg hover:bg-gray-100 transition">
                                    <FaGoogle className="text-red-500 text-2xl" />
                                </button>
                            <button className="border rounded-full p-3 flex items-center justify-center mx-6 text-lg hover:bg-gray-100 transition">
                                    <FaApple className="text-gray-800 text-2xl" />
                                </button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact