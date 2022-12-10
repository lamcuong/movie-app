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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction())
        dispatch(layDanhSachHeThongRap())
    }, [])

    return (
        <div>
            <HomeCarousel />

            <div className='container mx-auto'>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <MultipleRowSlick arrFilm={arrFilm} />
                    </div>
                    <div>
                        <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                        {/* Dropdown menu */}
                        <div id="dropdownInformation" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">name@flowbite.com</div>
                            </div>
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </div>
                        </div>
                    </div>


                </section>
                <div>
                    <HomeMenu heThongRapChieu={heThongRapChieu} />
                </div>
            </div>
        </div>
    )
}
