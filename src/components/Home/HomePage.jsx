// import Home from '../../assets/image/Home.png';
import Home2 from '../../assets/image/Home2.png';

const HomePage = () => {
    return (
        <>
        <section className="px-10 my-7 bg-white">
            <div className="flex flex-col md:flex-row justify-between px-10 items-center">
                {/* Description */}
                <div className="mt-7 mx- px-3 text-center">
                    <h2 className='font-bold md:text-5xl text-orange-500 text-xl md:py-4'>
                        ONLINE FASHION SAIL 🛍️
                    </h2>
                    <h3 className='text-orange-700 md:my-4 text-3xl mb-2 '>
                        Let's Explore UNIQUE Clothes.
                    </h3>
                    <div className="text-center ">
                        <p className="text-gray-700  md:text-xl ">
                        Discover the latest fashion for men,women, and kids–where style meets comfort for the whole family.
                        Would you like it to be shorter, more playful, or more premium in tone?
                        </p>
                    </div>
                    <a href="/explore" className='block mt-3 hover:bg-orange-500 bg-orange-400 rounded-tl-lg py-2 px-4 text-white text-gl'>
                        Explore Now 
                    </a>
                    <span class="relative flex size-3 -mt-12">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                    <span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
                    </span>
                </div>
                {/* image */}
                <div className="mt-7  ">
                    <img src={Home2} alt="Home Image" className='w-2/3 md:ml-60' />
                </div>
            </div>
        </section>

        </>
    )
}

export default HomePage
