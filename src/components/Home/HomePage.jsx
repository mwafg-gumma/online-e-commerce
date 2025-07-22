// call Image from assets
import background3 from '../../assets/image/background3.png';
// import background from '../../assets/image/background.png';
// import background4 from '../../assets/image/background4.png';

const HomePage = () => {
    return (
        <>
        <section className=" bgwhite">
            <div className="flex flex-col md:flex-row justify-between items-center px-3 mx-1 md:mt-14 ">
                {/* Description */}
                <div className="md:mt-0 mt-10 mx-14 ">
                    <h3 className='font-bold md:text-4xl text-lg md:py-2'>
                        Trending Accessories
                    </h3>
                    <h3 className='md:mb-2 text2xl my-2 font-semibold text-gray-800'>
                        MODERN STYLE FOR EVERYONE
                    </h3>
                    <div >
                        <p className="text-gray-500 font-light w-[400px]  text-sm mb-2">
                            Your online shop for quality Product Category Easy shopping, great finds
                        </p>
                        <h4 className='mb-4'>
                            starting at <span className='text-xl font-bold text-gray-800'>$10.00</span>
                        </h4>
                    </div>
                    <a href="/explore" className=' mt-3 hover:bg-gray-700 bg-gray-900 rounded-lg py-2 px-4 text-white text-gl'>
                        Shop Now
                    </a>
                    <span class="relative flex size-2 -mt-8">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
                    <span class="relative inline-flex size-2 rounded-full bg-gray-200"></span>
                    </span>
                </div>
                {/* image */}
                <div className="mt-10 mx-14 hidden md:block">
                    <div className='bg-gray-100 rounded-full md:w-[300px] md:h-[230px] '>
                        <img src={background3} alt="Home Image" className='w-full ml-10' />
                        </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default HomePage
