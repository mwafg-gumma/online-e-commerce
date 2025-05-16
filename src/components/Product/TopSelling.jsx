
import Top from '../../assets/image/Top.jpg'
import Top1 from '../../assets/image/Top1.jpg'
import Top3 from '../../assets/image/Top3.jpg'
import Top4 from '../../assets/image/Top4.jpg'

const TopSelling = () => {
    return (
    <>
    <section className="my-10 mx-auto pt-7">
        <div className="py-7 text-center">
            <h2 className='text-center text-gl text-yellow-500 py-2'>
                Top Selling Products For You 🛍️
                </h2>
                <h3 className='text-4xl font-bold '>
                    Top Selling Products 
                </h3>
                <p className='text-gl  text-gray-400 py-4 px-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, porro.
                </p>
                {/* box */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-20 my-10 cursor-pointer">
                    {/* 1 */}
                    <div className="bg-white shadow-md rounded-md mx-2 my-2">
                        <img src={Top} alt="TopSelling" className='w-full transition duration-300 ease-in-out hover:-translate-y-2 ' />
                        <h2 className='text-2xl font-bold py-2 px-3'>
                            WOMEN ETHNIC
                        </h2>
                        <h3 className='Text-xl -ml-40 text-gray-500'>
                            WHITE
                        </h3>
                    <div className="flex flex-row justify-between items-center">
                        <p className='text-xl text-gray-600'>⭐ 5.8</p>
                        <a href="#" className='rounded-md bg-red-500 hover:bg-red-400 px-6 py-2 text-white font-bold block mx-2 my-2'>
                            More
                        </a>
                    </div>
                    </div>
                        {/* 2 */}
                        <div className="bg-white shadow-md rounded-md mx-2 my-2">
                        <img src={Top1} alt="TopSelling" className='w-full transition duration-300 ease-in-out hover:-translate-y-2 ' />
                        <h2 className='text-2xl font-bold py-2 px-3'>
                            WOMEN WESTERN
                        </h2>
                        <h3 className='Text-xl -ml-40 text-gray-500'>
                            RED
                        </h3>
                        <div className="flex flex-row justify-between items-center">
                        <p className='text-xl text-gray-600'>⭐ 10.1</p>
                        <a href="#" className='rounded-md bg-red-500 hover:bg-red-400 px-6 py-2 text-white font-bold block mx-2 my-2'>
                            More
                        </a>
                    </div>
                    </div>
                            {/* 3 */}
                        <div className="bg-white shadow-md rounded-md mx-2 my-2">
                        <img src={Top3} alt="TopSelling" className='w-full transition duration-300 ease-in-out hover:-translate-y-2 ' />
                        <h2 className='text-2xl font-bold py-2 px-3 -ml-20'>
                                GOGGLES
                        </h2>
                        <h3 className='Text-xl -ml-40 text-gray-500'>
                            BROWN
                        </h3>
                        <div className="flex flex-row justify-between items-center">
                        <p className='text-xl text-gray-600'>⭐ 7.4</p>
                        <a href="#" className='rounded-md bg-red-500 hover:bg-red-400 px-6 py-2 text-white font-bold block mx-2 my-2'>
                            More
                        </a>
                    </div>
                    </div>
                            {/* 4 */}
                        <div className="bg-white shadow-md rounded-md mx-2 my-2 hidden md:block">
                        <img src={Top4} alt="TopSelling" className='w-full transition duration-300 ease-in-out hover:-translate-y-2 ' />
                        <h2 className='text-2xl font-bold py-2 px-3'>
                            FASHIN T-SHIRT
                        </h2>
                        <h3 className='Text-xl -ml-40 text-gray-500'>
                            BLACK
                        </h3>
                        <div className="flex flex-row justify-between items-center">
                        <p className='text-xl text-gray-600'>⭐ 5.8</p>
                        <a href="#" className='rounded-md bg-red-500 hover:bg-red-400 px-6 py-2 text-white font-bold block mx-2 my-2'>
                            More
                        </a>
                    </div>
                    </div>
                </div>
        </div>
    </section>
    </>
    )
}

export default TopSelling
