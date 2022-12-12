import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { GET_PHIM_DANG_CHIEU, GET_PHIM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimTypes";
import FilmFlips from "../Films/FilmFlips";
import Films from "../Films/Films";
import styleSlick from './MultipleRowSlick.module.css'



const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </div>

    );
}
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}

            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        >
        </div>
    );
}
const MultipleRowSlick = (props) => {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch()
    const { phimDangChieu, phimSapChieu } = useSelector(state => state.QuanLyPhimReducer)
    const renderFilms = () => {

        return arrFilm.slice(0, 20)?.map((item, index) => {

            return <div className='mt - 2' key={index}  >

                <FilmFlips phim={item} />

            </div>
        })
    }

    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let activeClassDC = phimDangChieu === true ? 'active-film' : 'none-active'
    let activeClassSC = phimSapChieu === true ? 'active-film' : 'none-active'

    return (
        <div>
            <button type="button" onClick={() => {

                dispatch({
                    type: GET_PHIM_DANG_CHIEU
                })

            }} className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}>PHIM ĐANG CHIẾU</button>
            <button type="button" onClick={() => {

                dispatch({
                    type: GET_PHIM_SAP_CHIEU
                })

            }} className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded  text-gray-800 bg-white border-gray-800`}>PHIM SẮP CHIẾU</button>
            <Slider {...settings}>

                {renderFilms()}


            </Slider>
        </div>
    );
}


export default MultipleRowSlick;