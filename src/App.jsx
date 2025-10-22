
import { 
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  } from "react-router-dom"
import ProductDetailPage  from './components/Product/ProductDetailPage'
import MainLayout from "./Layout/MainLayout"
import MainPage from "./Pages/MainPage"
import About from "./Links/About"
// import Blog from "./Links/Blog"
import FAQ from "./components/FAQ"
// import Services from "./Links/Services"
import UserProfilePage from "./components/UserProfilePage"
import Men from "./Links/Men"
import Women from "./Links/Women"
import Bags from "./Links/Bags"
import Kids from "./Links/Kids"
import Jewelry from "./Links/Jewelry"
import Shoes from "./Links/Shoes"
import Sports from "./Links/Sports"
import Watch from "./Links/Watch"
import LatestPostsPage from "./Links/LatestPostsPage"
import ArchivePage from "./Links/ArchivePage"
import TagPage from "./Links/TagPage"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={< Women/>} />
      <Route path="/bags" element={< Bags/>} />
      <Route path="/kids" element={< Kids/>} />
      <Route path="/jewelry" element={< Jewelry/>} />
      <Route path="/shoes" element={< Shoes/>} />
      <Route path="/sport" element={< Sports/>} />
      <Route path="/watch" element={< Watch/>} />
      <Route path="/post" element={< LatestPostsPage/>} />
      {/* <Route path="/post/:id" element={<PostCard />} />   // Here Create Page For Each PostPage */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/account" element={<UserProfilePage />} />
      <Route path="/card" element={<FAQ />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/tags" element={<TagPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Route>
  ),
  {
  basename: "/online-e-commerce",
  }

)

const App = () => {
return <RouterProvider router={router} />
}

export default App





