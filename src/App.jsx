
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router
  } from "react-router-dom"
import HomePage from './components/Home/HomePage'
import NavBar from './components/NavBar'
import Top from './components/Product/TopSelling'
import HomeProduct from "./components/Product/HomeProduct"
import AllProduct from './components/Product/AllProduct'
import MainLayout from "./Layout/MainLayout"
import MainPage from "./Pages/MainPage"
import About from "./Links/About"
import Contact from "./Links/Contact"
import Blog from "./Links/Blog"
import Card from "./components/Card"




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/card" element={<Card />} />
    </Route>
  ),
  {
  basename:"/E-commerce-web"
}
)

const App = () => {
return <RouterProvider router={router} />
}

export default App





