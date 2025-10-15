
import { 
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  } from "react-router-dom"
// import HomePage from './components/Home/HomePage'
// import NavBar from './components/NavBar'
// import Top from './components/Product/TopSelling'
// import Hero from "./components/Product/Hero"
// import AllProduct from './components/Product/AllProduct'
import ProductDetailPage  from './components/Product/ProductDetailPage'
import MainLayout from "./Layout/MainLayout"
import MainPage from "./Pages/MainPage"
import About from "./Links/About"
import Contact from "./Links/Contact"
import Blog from "./Links/Blog"
import Card from "./components/Card"
import Services from "./Links/Services"
import UserProfilePage from "./components/UserProfilePage"





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<MainPage />} />
      <Route path="contact" element={<UserProfilePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/card" element={<Card />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Route>
  ),
  {
  
}
)

const App = () => {
return <RouterProvider router={router} />
}

export default App





