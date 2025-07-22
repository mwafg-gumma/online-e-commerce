// call images from assets image
import trend from '../../assets/image/trend.png';
import trend1 from '../../assets/image/trend1.png';
import trend3 from '../../assets/image/trend3.png';
import trend5 from '../../assets/image/trend5.jpg';

const HomeProduct = () => {
    return (
        <>
        <section className="py-2 mx-3">
            <div className="px-7 ">
                <h1 className='text-yellow-500 text-xl mx-7 font-light md:mx-0'>
                    Trending Product
                </h1>
                <h2 className="md:text-3xl text-3xl font-normal py-3 mx-5 md:mx-0  ">
                    Top Rated Products
                </h2>
                <p className="text-sm text-gray-500 mx-5 md:mx-0">
                    Here are The best selling Products With Quality and  <br />
                    value in One Products
                </p>
            </div>
            <div className="grid grid-cols md:grid-cols-4 justify-between items-center  md:mx-15 mt-7">
                {/* 1 */}
                <div className="bg-white md:w-[250px] shadow-md rounded-xl mx-10 py-3 cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={trend} alt="Trend T-shirt" className='md:w-[250px] ' />
                <div className='text-yellow-300 text-xl  p-2 '>
                {'★★★★★'}
                </div>
                <div className=' flex flex-row justify-between items-center mb-2 '>
                    <h2 className='text-lg font-light px-2 '>
                    Autumn Dress
                </h2>
                <p className='text-sm px-2 '>
                    $85
                </p>
                </div>
                <div className="flex flex-row justify-between items-center  ">
                <p className="text-gray-400 px-2 text-sm">
                    2 Colors
                </p>
                <p className="text-gray-400 px-2 text-sm">
                    $125
                </p>
                </div>
                </div>

                {/* 2 */}
                <div className="bg-white md:w-[250px] shadow-md rounded-xl mx-10 py-3 cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={trend1} alt="Trend T-shirt" className='md:w-[250px] ' />
                <div className='text-yellow-300 text-xl  p-2 '>
                {'★★★★★'}
                </div>
                <div className=' flex flex-row justify-between items-center mb-2 '>
                    <h2 className='text-lg font-light px-2 '>
                    Turtleneck
                </h2>
                <p className='text-sm px-2 '>
                    $28
                </p>
                </div>
                <div className="flex flex-row justify-between items-center  ">
                <p className="text-gray-400 px-2 text-sm">
                    4 Colors
                </p>
                <p className="text-gray-400 px-2 text-sm">
                    $35
                </p>
                </div>
                </div>
                {/* 3 */}
                <div className="bg-white md:w-[240px] shadow-md rounded-xl mx-10 py-3 cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={trend3} alt="Trend T-shirt" className='md:w-[240px] ' />
                <div className='text-yellow-300 text-xl  p-2 '>
                {'★★★★★'}
                </div>
                <div className=' flex flex-row justify-between items-center mb-2 '>
                    <h2 className='text-lg font-light px-2 '>
                    Flanel Shirt
                </h2>
                <p className='text-sm px-2 '>
                    $42
                </p>
                </div>
                <div className="flex flex-row justify-between items-center  ">
                <p className="text-gray-400 px-2 text-sm">
                    3 Colors
                </p>
                <p className="text-gray-400 px-2 text-sm">
                    $60
                </p>
                </div>
                </div>
                {/* 4 */}
                <div className="bg-white md:w-[220px] shadow-md rounded-xl mx-10 py-3 cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-2">
                <img src={trend5} alt="Trend T-shirt" className='md:w-[220px] ' />
                <div className='text-yellow-300 text-xl  p-2 '>
                {'★★★★★'}
                </div>
                <div className=' flex flex-row justify-between items-center mb-2 '>
                    <h2 className='text-lg font-light px-2 '>
                    Wardrobe
                </h2>
                <p className='text-sm px-2 '>
                    $85
                </p>
                </div>
                <div className="flex flex-row justify-between items-center  ">
                <p className="text-gray-400 px-2 text-sm">
                    2 Colors
                </p>
                <p className="text-gray-400 px-2 text-sm">
                    $125
                </p>
                </div>
                </div>
                </div>
        </section>
        </>
    )
}

export default HomeProduct
