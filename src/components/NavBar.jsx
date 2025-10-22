
import { useState } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const menuData = [
  { 
    title: 'Home', 
  },
  { 
    title: 'Shop', 
    submenu: ['All Products', 'Categories', 'Deals'] 
  },
  { 
    title: 'Pages', 
    submenu: ['About Us', 'Contact', 'FAQ'] 
  },
  { 
    title: 'Blog', 
    submenu: ['Latest Posts', 'Archive', 'Tags'] 
  },
];

// Map submenu titles to their routes
const submenuRoutes = {
  "About Us": "/about",
  "Contact": "/account",
  "FAQ": "/card",
  "Latest Posts":"/post",
  "Archive" : "/archive",
  "Tags" : "/tags"
};

const categories = [
  { name: 'All Categories', value: '' },
  { name: 'Electronics', value: '/category/electronics' },
  { name: 'Fashion', value: '/category/fashion' },
  { name: 'Home Goods', value: '/Home/Goods' },
];



const NavLink = ({ title, submenu }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* main Link */}
      {title === "Home" ? (
        <Link to="/" className="py-2 px-3 block font-bold hover:bg-gray-800 transition duration-150">
          {title}
        </Link>
      ) : (
        <a href="#" className="py-2 px-3 block font-bold hover:bg-gray-800 transition duration-150">
          {title}
        </a>
      )}
      
      {/* onHover */}
      {isHovered && submenu && (
        <div className="absolute top-full left-0 mt-0 w-48 bg-gray-900 border border-gray-900 shadow-lg z-20">
          {submenu.map((item, index) => (
            submenuRoutes[item] ? (
              <Link 
                key={index} 
                to={submenuRoutes[item]} 
                className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-700 transition duration-150"
                onClick={() => setIsHovered(false)}
              >
                {item}
              </Link>
            ) : (
              <a 
                key={index} 
                href="#" 
                className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-700 transition duration-150"
              >
                {item}
              </a>
            )
          ))}
        </div>
      )}
    </div>
  );
};




const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  return (
    <nav className="bg-white text-black border-b border-gray-300">
      
      {/* (Top Bar)*/}
      <div className="hidden md:flex justify-between items-center py-1 px-4 border-b border-gray-200 text-xs bg-gray-50">
        <div className="flex space-x-4">
          <span>support@pressmart.com</span>
          <span>+(123) 4567 890</span>
        </div>
        <div className="flex space-x-4">
          <span className="text-gray-600">Welcome to Our Store!</span>
          <Link to="#" className="hover:underline">English</Link>
          <Link to="#" className="hover:underline">$ Dollar (us)</Link>
        </div>
      </div>
      
      {/* (Main Bar) */}
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        
        {/* logo */}
        <h1 className="text-2xl font-extrabold flex-shrink-0 mr-4">
          SHOPY
        </h1>
        
        {/*search hidden in mobile*/}
        <div className="hidden lg:flex flex-grow max-w-xl border border-black h-10 rounded-lg overflow-hidden">
          <input 
            type="text" 
            placeholder="Search for products, categories, sku..." 
            className="flex-grow p-2 text-sm focus:outline-none bg-white "
          />
          <select className="border-l border-black p-2 text-sm bg-gray-50 focus:outline-none">
            {categories.map((cat, index) => (
              <option key={index} value={cat.value}>
                {cat.name}
              </option>
            ))}
          </select>
          <button className="bg-gray-900 text-white px-4 hover:bg-gray-800 transition duration-150">
            <FaSearch />
          </button>
        </div>

        {/* icon user*/}
        <div className="flex items-center space-x-6 ml-4 flex-shrink-0">
          <Link to="/account" className="text-center cursor-pointer hover:opacity-70 transition inline-block">
            <FaUser className="mx-auto" size={18} />
            <span className="text-xs">My Account</span>
          </Link>
          <div className="text-center cursor-pointer hover:opacity-70 transition">
            <FaHeart className="mx-auto" size={18} />
            <span className="text-xs">Wishlist</span>
          </div>
          <div className="text-center cursor-pointer hover:opacity-70 transition relative">
            <FaShoppingCart className="mx-auto" size={18} />
            <span className="text-xs">Cart</span>
            {/* */}
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
          
          {/* */}
          <button 
            className="lg:hidden text-black ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>
      
      {/* (Bottom Bar) */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto flex justify-start items-center h-12 px-4">
          
          {/* */}
          <div className="hidden lg:flex items-center bg-gray-800 h-full px-4 mr-8">
            <FaBars className="mr-3" />
            <span className="font-bold whitespace-nowrap">Shopping By Categories</span>
          </div>

          {/* Links*/}
          <div className="hidden lg:flex space-x-2">
            {menuData.map((link, index) => (
              <NavLink key={index} title={link.title} submenu={link.submenu} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Icon on mobile*/}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-4 overflow-y-auto transition-transform duration-300">
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <h3 className="font-bold mb-4">Shopping By Categories</h3>
            {menuData.map((link, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <a href="#" className="block py-2 text-black font-semibold hover:bg-gray-200">
                  {link.title}
                </a>
                {/* Only show submenu if it exists */}
                {link.submenu && (
                  <div className="pl-4 pb-2">
                    {link.submenu.map((sub, subIndex) => (
                      submenuRoutes[sub] ? (
                        <Link
                          key={subIndex}
                          to={submenuRoutes[sub]}
                          className="block text-sm text-gray-600 hover:text-black py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      ) : (
                        <a
                          key={subIndex}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-black py-1"
                        >
                          {sub}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;