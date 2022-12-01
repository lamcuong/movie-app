import React from 'react'
import { QuanLyPhimReducer } from '../../redux/reducers/QuanLyPhimReducer'
import './FilmFlips.css'
import { PlayCircleOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom'
export default function FilmFlips(props) {
    const { phim } = props
    const navigate = useNavigate()
    return (
        <div className="flip-card my-5 ">
            <div className="flip-card-inner">
                <div className="flip-card-front">

                    <img src={phim.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                </div>
                <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0 }} >
                        <img src={phim.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                    </div>
                    <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                            <div className="text-2xl mt-2 font-bold">{phim.tenPhim}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div onClick={() => {
                navigate(`detail/${phim.maPhim}`)
            }} className="bg-orange-300 text-center cursor-pointer py-2 bg-indigo-300 my-5 text-success-50 font-bold">

                ĐẶT VÉ

            </div>
        </div>
    )
}
