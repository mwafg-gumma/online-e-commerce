import React from 'react'
// import HomePage from '../components/Home/HomePage'
import CategoryCircles from '../components/Product/CategoryCircles '
import Hero from '../components/Product/Hero'
import AllProduct from '../components/Product/AllProduct'
import DealsSection from '../components/Product/DealsSection'
import PromoBannersSection from '../components/Product/PromoBannersSection '
import TestimonialsPage from "../components/Product/Testimonials Page"
import Footer from '../Footer'


const MainPage = () => {
    return (
    <>
        <Hero />
        <CategoryCircles />
        <DealsSection  />
        <PromoBannersSection />
        <AllProduct />
        <TestimonialsPage />
        <Footer />
        
    </>
    )
}

export default MainPage
