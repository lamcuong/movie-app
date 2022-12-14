import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { actionDatVe, layDanhSachPhongVe } from '../../redux/actions/QuanLyDatVeActions'
import { QuanLyNguoiDungReducer } from '../../redux/reducers/QuanLyNguoiDungReducer'
import { CloseOutlined, UserOutlined, CheckOutlined, HomeOutlined } from '@ant-design/icons'
import style from './Checkout.module.css'
import './Checkout.css'
import { CHUYEN_TAB, DAT_GHE } from '../../redux/actions/types/QuanLyDatVeTypes'
import _ from 'lodash'
import { Tabs } from 'antd';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { layThongTinNguoiDung } from '../../redux/actions/QuanLyNguoiDungActions'
import moment from 'moment'
import { render } from 'react-dom'
import { MA_NGUOI_DUNG, TOKEN, USER_LOGIN } from '../../util/settings/config'
import Avatar from '../../components/Avatar/Avatar'
function Checkout() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { userLogin, thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { thongTinPhim } = chiTietPhongVe
    useEffect(() => {
        dispatch(layDanhSachPhongVe(id))
        dispatch(layThongTinNguoiDung())
    }, [])


    const renderGhe = () => {
        return chiTietPhongVe.danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : ''
            let classGheDangDat = ''
            let classGheMinhDat = ''
            if (ghe.taiKhoanNguoiDat === userLogin.taiKhoan) {
                classGheMinhDat = 'gheMinhDat'
            }

            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.tenGhe === ghe.tenGhe)
            if (indexGheDangDat !== -1) {
                classGheDaDat = 'gheDangDat'
            }

            return <Fragment key={index} >
                <button onClick={() => {
                    dispatch({
                        type: DAT_GHE,
                        gheDangDat: ghe
                    })
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDangDat} ${classGheDaDat} ${classGheMinhDat}`}>
                    {ghe.daDat ? classGheMinhDat !== '' ? <UserOutlined style={{ marginBottom: '7px', fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: '7px', fontWeight: 'bold' }} /> : ghe.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>


        })
    }
    const renderTinhTienTable = () => {
        return danhSachGheDangDat.map((gheDangDat, index) => {

            return <Fragment>
                <span className='text-lg font-bold mx-2 text-orange-500' key={index}>
                    {gheDangDat.stt}

                </span>
                {(index + 1) % 6 === 0 ? <br /> : ''}
            </Fragment>

        })
    }
    return (
        <div className='min-h-screen mt-5'>
            <div className=' grid grid-cols-12 '>
                <div className='col-span-9 ml-10'>
                    <div className='flex flex-col items-center'>
                        <div className='bg-black' style={{ width: '80%', height: '20px' }}>

                        </div>

                        <div className={`${style['hinh_thang']}`}>
                            <h1 className='text-center  mt-3 text-bold'> M??n h??nh</h1>
                        </div>
                        <div >
                            {renderGhe()}
                        </div>
                        <div className='w-4/5 justify-center flex'>
                            <table className='divide-y w-2/3 divide-gray-200 text-center'>
                                <thead className='bg-gray p-5'>
                                    <tr>
                                        <th>Gh??? ch??a ?????t</th>
                                        <th>Gh??? ??ang ?????t</th>
                                        <th>Gh??? ???? ?????t</th>
                                        <th>Gh??? b???n ?????t</th>
                                        <th>Gh??? vip</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200'>
                                    <tr>

                                        <td> <button className='ghe '><CheckOutlined style={{ marginBottom: '7px', fontWeight: 'bold' }} /></button> </td>
                                        <td> <button className='ghe gheDangDat text-center'><CheckOutlined style={{ marginBottom: '7px', fontWeight: 'bold' }} /></button> </td>
                                        <td> <button className='ghe gheDaDat text-center'><CheckOutlined style={{ marginBottom: '7px', fontWeight: 'bold' }} /></button> </td>
                                        <td> <button className='ghe gheMinhDat text-center'><CheckOutlined style={{ marginBottom: '7px', fontWeight: 'bold' }} /></button> </td>
                                        <td> <button className='ghe gheVip text-center'><CheckOutlined style={{ marginBottom: '7px', fontWeight: 'bold' }} /></button> </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 ' >

                    <h3 className='text-green-400 text-center text-2xl'>0 ??</h3>
                    <hr />
                    <h3 className='text-xl mt-2'>{thongTinPhim.tenPhim}</h3>
                    <p>{thongTinPhim.diaChi}</p>
                    <p>{thongTinPhim.ngayChieu}</p>
                    <hr />
                    <div className=''>
                        <h1 className='text-center text-2xl font-bold p-3 border-b  border-gray-400'>Gi??? h??ng c???a b???n</h1>
                        <div className='flex flex-row border-b  border-gray-400 p-3'>
                            <h1 className='text-xl basis-1/2'>Gh??? ???? ch???n</h1>
                            <div className='basis-1/2' >

                                {renderTinhTienTable()}
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className='flex border-b  border-gray-400 p-3'>
                            <h1 className='basis-1/2 text-xl '> T???ng c???ng</h1>
                            <span className='basis-1/2 text-lg font-semibold ml-4'>
                                {danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.giaVe
                                }, 0).toLocaleString()} VN??
                            </span>
                        </div>

                    </div>



                    <hr />
                    <div className='my-5'>
                        <p><i>Email</i></p>
                        <p>{userLogin.email}</p>
                    </div>
                    <hr />


                    <div className='flex flex-col mb-0  h-full items-center ' >
                        <div onClick={() => {
                            let thongTinDatVe = new ThongTinDatVe()
                            thongTinDatVe.maLichChieu = id
                            thongTinDatVe.danhSachVe = danhSachGheDangDat


                            dispatch(actionDatVe(thongTinDatVe))

                        }} className='bg-green-500 py-3 w-full cursor-pointer text-center text-white font-bold text-2xl'>
                            ?????t v??
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const { activeTab } = useSelector(state => state.QuanLyDatVeReducer)
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const operations =


        <div className='' style={{ minWidth: '500px' }}>
            <div className=''>
                <Avatar />
            </div>


        </div>







    useEffect(() => {
        return () => {
            dispatch({
                type: CHUYEN_TAB,
                activeTab: '1'
            })
        }
    }, [])
    return (
        <div className='p-5 bg-yellow-50'>


            <Tabs
                tabBarExtraContent={operations}
                onChange={(key) => {
                    dispatch({
                        type: CHUYEN_TAB,
                        activeTab: key
                    })
                }}
                defaultActiveKey="2"
                activeKey={activeTab}
                items={[
                    {
                        label: <NavLink to='/' className='flex justify-center items-center  '>
                            <HomeOutlined className='text-2xl p-4' />
                        </NavLink>,
                        key: '3',

                    },
                    {
                        label: `01 CH???N GH??? & THANH TO??N `,
                        key: '1',
                        children: <Checkout />,
                    },
                    {
                        label: `02 K???T QU??? ?????T V??`,
                        key: '2',
                        children: <KetQuaDatVe />,
                    },

                ]}
            />
        </div>

    )

}

function KetQuaDatVe() {
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layThongTinNguoiDung())

    }, [])
    const renderThongTinDatVe = () => {
        return thongTinNguoiDung.thongTinDatVe.map((thongTin, index) => {
            const renderGhe = () => {
                return thongTin.danhSachGhe.map((ghe, index) => {
                    return <span className='text-green-600 text-lg font-semibold mx-1' key={index}>
                        [{ghe.tenGhe}]
                    </span>
                })
            }
            const seat = thongTin.danhSachGhe[0]
            return <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={thongTin.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-xl text-pink-600 font-medium">{thongTin.tenPhim}</h2>
                        <p className="text-gray-500"><span className='font-bold'>Gi??? chi???u:</span> {moment(thongTin.ngayDat).format('hh:mm A')} - <span className='font-bold'>Ng??y chi???u: </span>{moment(thongTin.ngayDat).format('DD-MM-YYYY')}</p>
                        <p><span className='font-bold'> ?????a ??i???m: </span> {seat.tenHeThongRap} </p>
                        <p><span className='font-bold'>T??n r???p: </span> {seat.tenRap} - Gh??? : {renderGhe()}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600">L???ch s??? ?????t v?? kh??ch h??ng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">H??y xem th??ng tin ?????a ch??? v?? th???i gian ????? xem phim vui v??? b???n nh?? ! </p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderThongTinDatVe()}


                </div>
            </div>
        </section>

    )
}