
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import HomeCarousel from './Layout/Carousel/HomeCarousel'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'

export default function HomeTemplate() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div >
            <div>
                <Header />

            </div>

            <div>
                <Outlet />
            </div>
            <hr />
            <div >
                <Footer />
            </div>

        </div>
    )
}
