import React, { useEffect } from 'react'


import '@tsamantanis/react-glassmorphism/dist/index.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '../../assets/styles/circle.css'
import { Rate, Tabs } from 'antd'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapActions'
import moment from 'moment'
export default function Detail(props) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { filmDetail } = useSelector(state => state.QuanLyPhimReducer)
    useEffect(() => {

        dispatch(layThongTinChiTietPhim(id))

    }, [])
    console.log('filmDetail', filmDetail)
    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, minHeight: '100vh' }}>
            <CustomCard
                style={{ paddingTop: '150px', minHeight: '100vh' }}
                effectColor="#black" // required
                color="black" // default color is white
                blur={20} // default blur value is 10px
                borderRadius='0px' // default border radius value is 10px
            >
                <div className='grid grid-cols-12'>
                    <div className='col-span-5 col-start-3 '>
                        <div className='grid grid-cols-4 '>
                            <img className='col-span-1' style={{ width: '100%', }} src={filmDetail.hinhAnh} alt="e" />
                            <div className='col-span-3 ml-5 my-auto text-white'>
                                <p>Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                <p className='text-3xl mb-1 '>{filmDetail.tenPhim}</p>
                                <div className='mb-5' >
                                    <span className=" mr-10"><Rate allowHalf className='text-2xl' value={filmDetail.danhGia / 2} /></span>
                                    <span className=' text-xl'> ( {filmDetail.danhGia} / 10 )</span>
                                </div>
                                <p className='my-2'>{filmDetail.moTa}</p>
                            </div>
                        </div>

                    </div>
                    {/* <div className="col-span-4">
                        <h1 style={{ marginLeft: '10%', color: 'yellow', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
                        <h1 style={{ marginLeft: '3%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span className="text-white">

                                {filmDetail.danhGia * 10}%
                            </span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>

                            </div>

                        </div>
                        <br />

                    </div> */}
                </div>
                <div className=' mt-20 grid grid-cols-12 '>
                    <Tabs
                        className='bg-white col-start-3 col-span-7'

                        centered
                        items={[
                            {
                                label: <span className='text-xl'> Lịch Chiếu</span>,
                                key: '1',
                                children: <Tabs className=''
                                    tabPosition={'left'}

                                    items={filmDetail.heThongRapChieu?.map((htr, index) => {

                                        return {
                                            label: <div className='flex items-center mx-5'>
                                                <img src={htr.logo} alt={htr.logo} className='w-14 mr-2' />
                                                <span>{htr.tenHeThongRap}</span>
                                            </div>,
                                            key: index,
                                            children: <div>
                                                {htr.cumRapChieu.map((cumRap, index) => {
                                                    return <div>
                                                        <div className='flex items-center my-7' key={index}>
                                                            <img src={cumRap.hinhAnh} alt={cumRap.hinhAnh} className='w-16 h-16' />
                                                            <div className='flex flex-col ml-3' >
                                                                <span className='text-xl font-bold mb-3 '>
                                                                    {cumRap.tenCumRap}
                                                                </span>
                                                                <span className='text-gray-400 '>
                                                                    {cumRap.diaChi}
                                                                </span>
                                                            </div>
                                                        </div>


                                                        <div className='grid grid-cols-4 gap-1'>
                                                            {cumRap.lichChieuPhim.slice(0, 12).map((lichChieu, index) => {
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className='col-span-1 text-xl text-green-800 mb-4 font-semibold ' key={index}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh-mm A')}
                                                                </NavLink>
                                                            })}


                                                        </div>
                                                        {index < htr.cumRapChieu.length - 1 ? <hr /> : ''}
                                                    </div>
                                                })}
                                            </div>,

                                        };
                                    })}
                                />,
                            },

                        ]}


                    />


                </div>
            </CustomCard >
        </div >

    )
}
