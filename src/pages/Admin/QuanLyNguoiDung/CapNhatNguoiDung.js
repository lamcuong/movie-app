import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { capNhatThongTinNguoiDungAction, layDanhSachNguoiDung } from '../../../redux/actions/QuanLyNguoiDungActions'
import { GROUPID } from '../../../util/settings/config'

export default function CapNhatNguoiDung() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const taiKhoanCapNhat = useParams()
    const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)

    useEffect(() => {
        dispatch(layDanhSachNguoiDung(''))
    }, [])

    const thongTinTaiKhoan = danhSachNguoiDung.find(user => user.taiKhoan === taiKhoanCapNhat.taiKhoan)

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(capNhatThongTinNguoiDungAction(values))

    }


    const [values, setValues] = useState({
        taiKhoan: thongTinTaiKhoan?.taiKhoan,
        email: thongTinTaiKhoan?.email,
        hoTen: thongTinTaiKhoan?.hoTen,
        soDt: thongTinTaiKhoan?.soDt,
        matKhau: thongTinTaiKhoan?.matKhau,
        maNhom: GROUPID,
        maLoaiNguoiDung: thongTinTaiKhoan?.maLoaiNguoiDung,

    })
    return (
        <form onSubmit={onSubmit} className='container m-auto'>
            <h1 className='text-center text-4xl'>Cập nhật người dùng</h1>
            <div className='grid grid-cols-4 gap-9'>
                <div className='col-span-2'>
                    <label>Tài khoản</label>
                    <input disabled placeholder='Tài khoản' onChange={onChange} value={values.taiKhoan} name='taiKhoan' className='border-gray-400 bg-transparent border-b cursor-no-drop focus:outline-none  w-full p-4 ' />
                </div>
                <div className='col-span-2'>
                    <label>Email</label>
                    <input placeholder='Email' onChange={onChange} name='email' value={values.email} className='border-gray-400 bg-transparent border-b focus:outline-none  w-full p-4 ' />
                </div>
                <div className='col-span-2'>
                    <label>Họ tên</label>
                    <input placeholder='Họ tên' onChange={onChange} name='hoTen' value={values.hoTen} className='border-gray-400 bg-transparent border-b focus:outline-none  w-full p-4 ' />
                </div>
                <select onChange={onChange} name='maLoaiNguoiDung' value={values.maLoaiNguoiDung} className='col-span-2 border-gray-200 bg-transparent border focus:outline-none  w-full p-4' >
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                </select>
            </div>
            <div className='text-center mt-10'>
                <button onClick={() => {
                    navigate('/admin/user')
                }} className='mx-3 border border-black py-1 px-3'>Trở lại</button>
                <button type='submit' className='mx-3 bg-blue-600 py-1 px-3 text-white '>Cập nhật</button>
            </div>
        </form>
    )
}

