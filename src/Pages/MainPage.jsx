import React from 'react'
import HomePage from '../components/Home/HomePage'
import TopSelling from '../components/Product/TopSelling'
import HomeProduct from '../components/Product/HomeProduct'
import AllProduct from '../components/Product/AllProduct'


const MainPage = () => {
    return (
    <>
        <HomePage />
        <TopSelling />
        <HomeProduct />
        <AllProduct />
        
    </>
    )
}

export default MainPage
