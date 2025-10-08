

// import { NavLink } from "react-router-dom"
// import products from "../../products.json"
// // Import both the Shopping Cart and the Heart Icon
// import { FaShoppingCart, FaRegHeart } from "react-icons/fa"
// import Footer from "../../Footer"

// const AllProduct = () => {
    
//     // Define the specific colors seen in the image for the swatches
//     const IMAGE_COLORS = [
//         'bg-green-700', // Olive/Dark Green
//         'bg-red-600',   // Red
//         'bg-gray-800'   // Dark Grey/Black
//     ];

//     // Helper function to render star rating
//     const renderStars = (rating) => {
//         const stars = [];
//         // Assuming rating is a number from 0 to 5
//         for (let i = 0; i < 5; i++) {
//             stars.push(
//                 // Use a filled star (★) for the rating value
//                 <span key={i} className={`text-sm ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}>
//                     ★
//                 </span>
//             );
//         }
//         return stars;
//     };

//     return (
//     <>
//         <section className='mx-auto max-w-7xl px-4 py-8'>
//             <div className="my-20 mx-2">
//                 <h1 className="text-3xl sm:text-4xl md:text-4xl font-normal text-gray-900">
//                     Our Collection
//                 </h1>
//                 <span className="text-sm text-gray-500 uppercase">
//                     Get The Late news & Updates
//                 </span>
//             </div>
//             <aside>
//                 {/* Product Grid: Now uses a more aggressive grid for small screens (3 columns on small) */}
//                 <section className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                     {products.map((product, index) => (
//                         // Start of the Product Card 
//                         <div key={index} className="relative w-full bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden">
                            
//                             {/* Product Image Container */}
//                             <div className="relative w-full aspect-square md:aspect-auto h-56 md:h-72">
//                                 <img 
//                                     src={product.image} 
//                                     alt={product.name} 
//                                     className="w-full h-full object-cover" 
//                                 />

//                                 {/* Discount Badge - Top Right Overlay (Z-index ensures it's always on top) */}
//                                 {product.discount && (
//                                     <div className="absolute top-2 right-2 bg-blue-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
//                                         {product.discount}
//                                     </div>
//                                 )}
//                             </div>


//                             {/* Main Content Area */}
//                             <div className="p-3 sm:p-4">
                                
//                                 {/* Product Name and Heart Icon */}
//                                 <div className="flex justify-between items-start mb-2">
//                                     <h2 className="text-gray-900 font-normal text-base sm:text-lg leading-tight">
//                                         {product.name}
//                                     </h2>
//                                     {/* Heart Icon (Wishlist) */}
//                                     <button className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 -mt-1 -mr-1">
//                                         <FaRegHeart className="text-xl sm:text-2xl" />
//                                     </button>
//                                 </div>
                                
//                                 {/* Price and Original Price */}
//                                 <div className="flex flex-col mb-2">
//                                     {/* Current Price (Bold) */}
//                                     <p className="text-lg sm:text-xl font-bold text-gray-800">
//                                         {product.price || '$0.00'} 
//                                     </p>
//                                     {/* Original Price (Strikethrough) */}
//                                     {product.originalPrice && (
//                                         <p className="text-xs text-gray-400 line-through -mt-1">
//                                             {product.originalPrice} 
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Star Rating - Uses the smaller text size (text-sm) as seen in the image */}
//                                 <div className="flex items-center space-x-0.5 mb-3">
//                                     {renderStars(product.rating || 5)} 
//                                 </div>

//                                 {/* Color Options and Shopping Cart Button */}
//                                 <div className="flex justify-between items-center mt-4">
//                                     {/* Color Options - Use the defined IMAGE_COLORS */}
//                                     <div className="flex space-x-2">
//                                         {IMAGE_COLORS.map((colorClass, colorIndex) => (
//                                             <div 
//                                                 key={colorIndex} 
//                                                 className={`w-4 h-4 rounded-full border border-gray-300 cursor-pointer ${colorClass}`}
//                                                 title={`Color option ${colorIndex + 1}`}
//                                             ></div>
//                                         ))}
//                                     </div>

//                                     {/* Shopping Cart Icon (Add to Cart button) - Moved away from the bottom corner for better design */}
//                                     <NavLink to="/">
//                                         <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
//                                             <FaShoppingCart className="text-sm" />
//                                         </button>
//                                     </NavLink>
//                                 </div>
                                
//                             </div>
//                         </div>
//                     ))}
//                 </section>
//             </aside>
//         </section>
//         <Footer />
//     </>
//     )
// }

// export default AllProduct
import { NavLink } from "react-router-dom"
import products from "../../products.json"
import { FaShoppingCart, FaRegHeart } from "react-icons/fa"
import Footer from "../../Footer"

const AllProduct = () => {
    
    // Specific colors from the image swatches
    const IMAGE_COLORS = [
        'bg-green-700', 
        'bg-red-600',   
        'bg-gray-800'   
    ];

    // Helper function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`text-sm ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
    <>
        <section className='mx-auto max-w-7xl px-4 py-8'>
            <div className="my-20 mx-2">
                <h1 className="text-3xl sm:text-4xl md:text-4xl font-normal text-gray-900">
                    Our Collection
                </h1>
                    <span className="text-sm text-gray-500 uppercase">
                        Get The Late news & Updates
                    </span>
            </div>
            <aside>
                {/* Responsive Grid Layout */}
                <section className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product, index) => (
                        // Product Card Container
                        <div key={index} className="relative w-full bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden">
                            
                            {/* Link wrapped around image for good UX */}
                            <NavLink to={`/product/${product.id}`}>
                                <div className="relative w-full aspect-square md:aspect-auto h-56 md:h-72">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover" 
                                    />

                                    {/* Discount Badge Overlay */}
                                    {product.discount && (
                                        <div className="absolute top-2 right-2 bg-blue-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
                                            {product.discount}
                                        </div>
                                    )}
                                </div>
                            </NavLink>

                            {/* Main Content Area */}
                            <div className="p-3 sm:p-4">
                                
                                <div className="flex justify-between items-start mb-2">
                                    {/* Product Name (Linked) */}
                                    <NavLink to={`/product/${product.id}`} className="hover:text-gray-700">
                                        <h2 className="text-gray-900 font-normal text-base sm:text-lg leading-tight">
                                            {product.name}
                                        </h2>
                                    </NavLink>
                                    
                                    {/* Heart Icon */}
                                    <button className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 -mt-1 -mr-1">
                                        <FaRegHeart className="text-xl sm:text-2xl" />
                                    </button>
                                </div>
                                
                                {/* Price and Strikethrough Original Price */}
                                <div className="flex flex-col mb-2">
                                    <p className="text-lg sm:text-xl font-bold text-gray-800">
                                        {product.price || '$0.00'} 
                                    </p>
                                    {product.originalPrice && (
                                        <p className="text-xs text-gray-400 line-through -mt-1">
                                            {product.originalPrice} 
                                        </p>
                                    )}
                                </div>

                                {/* Star Rating */}
                                <div className="flex items-center space-x-0.5 mb-3">
                                    {renderStars(product.rating || 5)} 
                                </div>

                                {/* Color Options and Shopping Cart Button */}
                                <div className="flex justify-between items-center mt-4">
                                    {/* Color Options */}
                                    <div className="flex space-x-2">
                                        {IMAGE_COLORS.map((colorClass, colorIndex) => (
                                            <div 
                                                key={colorIndex} 
                                                className={`w-4 h-4 rounded-full border border-gray-300 cursor-pointer ${colorClass}`}
                                            ></div>
                                        ))}
                                    </div>

                                    {/* Shopping Cart Button links to the detail page */}
                                    <NavLink to={`/product/${product.id}`} title={`View details for ${product.name}`}>
                                        <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                                            <FaShoppingCart className="text-sm" />
                                        </button>
                                    </NavLink>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </section>
            </aside>
        </section>
        <Footer />
    </>
    )
}

export default AllProduct