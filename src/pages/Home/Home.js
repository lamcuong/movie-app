import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import Films from '../../components/Films/Films'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachHeThongRap } from '../../redux/actions/QuanLyRapActions'
import HomeCarousel from '../../templates/HomeTemplate/Layout/Carousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Films key={index} />
    //     })
    // }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction())
        dispatch(layDanhSachHeThongRap())
    }, [])
    console.log('heThongRapChieu', heThongRapChieu)
    return (
        <div>
            <HomeCarousel />

            <div className='container mx-auto'>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <MultipleRowSlick arrFilm={arrFilm} />
                    </div>
                </section>
                <div>
                    <HomeMenu heThongRapChieu={heThongRapChieu} />
                </div>
            </div>
        </div>
    )
}
