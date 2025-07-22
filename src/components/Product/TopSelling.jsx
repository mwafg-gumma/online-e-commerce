// call images from assets images
import selling from '../../assets/image/selling.jpg';
import selling1 from '../../assets/image/selling1.jpg';
import selling2 from '../../assets/image/selling2.jpg';
import selling3 from '../../assets/image/selling3.jpg';

const TopSelling = () => {
    return (
    <>
    <section className="my-3 pt-1">
        <div className="py-7 text-center">
            <h2 className='text-center text-lg text-yellow-500 py-2'>
                Top Selling Products For You 
                </h2>
                <h3 className='text-4xl font-bold '>
                    Top Selling Products 
                </h3>
                <p className=' text-gray-400 py-4 px-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, porro.
                </p>
                {/* box */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-20 my-10 cursor-pointer">
                    {/* 1 */}
                    <div className="bg-white shadow-md rounded-md  my-2">
                        <img src={selling} alt="TopSelling" className='w-full md:w-300px]  h-[300px] object-cover transition duration-200 ease-in-out hover:-translate-y-1 ' loading='lazy' />
                        <h2 className='md:text-xl text-lg font-normal py-2 md:-ml-36 -ml-44'>
                            Perfumes
                        </h2>
                        <h3 className='md:-ml-44 -ml-56 md:-mx-0 -mx-10 text-gray-600'>
                            collection
                        </h3>
                    <div className="flex flex-row justify-between items-center mx-2">
                        <p className=' text-yellow-300 text-xl font-bold '>&#9733; <span className='text-gray-950 text-sm'>1000,00+</span> </p>
                        <a href="#" className='rounded-md bg-gray-900 hover:bg-gray-950 px-5 py-1 text-white font-light block mx-2 my-2'>
                            More
                        </a>
                    </div>
                    </div>
                        {/* 2 */}
                        <div className="bg-white shadow-md rounded-md  my-2">
                        <img src={selling1} alt="TopSelling" className='w-full md:w-300px]  h-[300px] object-cover transition duration-200 ease-in-out hover:-translate-y-1 ' loading='lazy' />
                        <h2 className='md:text-xl text-lg font-normal py-2 md:-ml-44 -ml-56 -mx-10 md:mx-0'>
                            Camera
                        </h2>
                        <h3 className='md:-ml-44 -ml-56 -mx-7 md:mx-7 text-gray-600'>
                            Black
                        </h3>
                    <div className="flex flex-row justify-between items-center mx-2">
                        <p className=' text-yellow-300 text-xl font-bold '>&#9733; <span className='text-gray-950 text-sm'>5000,00+</span> </p>
                        <a href="#" className='rounded-md bg-gray-900 hover:bg-gray-950 px-5 py-1 text-white font-light block mx-2 my-2'>
                            More
                        </a>
                    </div>
                    </div>
                            {/* 3 */}
                        <div className="bg-white shadow-md rounded-md my-2">
                    <img src={selling2} alt="TopSelling" className='w-full md:w-300px] h-[300px] object-cover transition duration-200 ease-in-out hover:-translate-y-1 ' loading='lazy' />
                        <h2 className='md:text-xl text-lg font-normal py-2 md:-ml-44 -ml-56 -mx-2 md:mx-0'>
                                Bags
                        </h2>
                        <h3 className='md:-ml-44 -ml-56 -mx-3 md:mx-0 text-gray-600'>
                            Brown
                        </h3>
                        <div className="flex flex-row justify-between items-center mx-2">
                        <p className=' text-yellow-300 text-xl font-bold '>&#9733; <span className='text-gray-950 text-sm'>6300,00+</span> </p>
                        <a href="#" className='rounded-md bg-gray-900 hover:bg-gray-950 px-5 py-1 text-white font-light block mx-2 my-2'>
                            More
                        </a>
                    </div>
                    </div>
                            {/* 4 */}
                        <div className="bg-white shadow-md rounded-md  my-2 ">
                    <img src={selling3} alt="TopSelling" className='w-full md:w-300px] h-[300px] object-cover transition duration-200 ease-in-out hover:-translate-y-1 ' loading='lazy' />   
                        <h2 className='md:text-xl text-lg font-normal py-2 md:-ml-44 -ml-56 -mx-6 md:mx-0'>
                            Iphone
                        </h2>
                        <h3 className='md:-ml-44 -ml-56 -mx-4 md:mx-0 text-gray-600'>
                            Phone
                        </h3>
                    <div className="flex flex-row justify-between items-center mx-2">
                        <p className=' text-yellow-300 text-xl font-bold '>&#9733; <span className='text-gray-950 text-sm'>9000,00+</span> </p>
                        <a href="#" className='rounded-md bg-gray-900 hover:bg-gray-950 px-5 py-1 text-white font-light block mx-2 my-2'>
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
