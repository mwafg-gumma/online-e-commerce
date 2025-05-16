import one from '../../assets/image/one.png'
import two from '../../assets/image/two.png'
import three from '../../assets/image/three.png'


const HomeProduct = () => {
    return (
        <>
        <section className="py-2 mx-3">
            <div className="px-7 ">
                <h1 className='text-yellow-400 text-xl mx-7 md:mx-0'>
                    Trending Product
                </h1>
                <h2 className="md:text-4xl text-3xl font-bold py-3 mx-5 md:mx-0  ">
                    Top Rated Products
                </h2>
                <p className="text-gl text-gray-600 mx-5 md:mx-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing. Voluptates <br />
                    maxime  quae laborum neque.
                </p>
            </div>
            <div className="grid grid-cols md:grid-cols-3 justify-between items-center text-center gap-5 -mx-3 md:mx-5 mt-7">
                {/* 1 */}
                <div className="bg-white shadow-md rounded-xl mx-10 py-3 cursor-pointer hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={one} alt="Trend T-shirt" className='w-40 h-40 md:ml-20 ml-24' />
                <div className='text-yellow-300 text-xl mt-2'>
                {'★★★★'}
                </div>
                <h2 className='text-2xl font-bold py-2'>
                    Printed shirt
                </h2>
                <div className='text-center py-2 '>
                    <p className='text-gl w-90  mb-3'>
                        Lorem ipsum dolor sit amet  consectetur, adipisicing elit. Eaque, iusto.
                    </p>
                </div>
                <a href="#" className='bg-orange-400 rounded-md text-white px-4 py-2 hover:bg-orange-500 '>
                    Order Now
                </a>
                </div>

                {/* 2 */}
                <div className="bg-white shadow-md rounded-xl mx-10  py-3 cursor-pointer hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out hover:-translate-y-4">
                <img src={two} alt="Trend T-shirt" className='w-40 h-40 md:ml-20 ml-24' />
                <div className='text-yellow-300 text-xl mt-2' >
                {'★★★★'}
                </div>
                <h2 className='text-2xl font-bold py-2'>
                    Printed shirt
                </h2>
                <div className='text-center py-2 '>
                    <p className='text-gl w-90 mb-3  '>
                        Lorem ipsum dolor sit amet  consectetur, adipisicing elit. Eaque, iusto.
                    </p>
                </div>
                <a href="#" className='bg-orange-400 rounded-md text-white px-4 py-2 hover:bg-orange-500 '>
                    Order Now
                </a>
                </div>
                {/* 3 */}
                <div className="bg-white shadow-md rounded-xl mx-10 py-3 cursor-pointer hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={three} alt="Trend T-shirt" className='w-40 h-40 md:ml-20 ml-24' />
                <div className='text-yellow-300 text-xl mt-2'>
                {'★★★★'}
                </div>
                <h2 className='text-2xl font-bold py-2'>
                    Printed shirt
                </h2>
                <div className='text-center py-2 '>
                    <p className='text-gl w-90 mb-3  '>
                        Lorem ipsum dolor sit amet  consectetur, adipisicing elit. Eaque, iusto.
                    </p>
                </div>
                <a href="#" className='bg-orange-400 rounded-md text-white px-4 py-2 hover:bg-orange-500 '>
                    Order Now
                </a>
                </div>

            </div>
        </section>
        </>
    )
}

export default HomeProduct
