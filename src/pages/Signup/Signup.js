import React from 'react'
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dangKyNguoiDung, dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions';
import { GROUPID } from '../../util/settings/config';
import * as Yup from 'yup'


export default function SignUp(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDT: '',
            maNhom: GROUPID,
            hoTen: ''

        },
        validationSchema: Yup.object().shape({
            hoTen: Yup.string().required("Nhập họ tên!"),
            soDT: Yup.number().typeError("Số điện thoại không đúng!").required("Nhập số điện thoại!"),
            email: Yup.string().required("Nhập email!").email('Email không hợp lệ!'),
            matKhau: Yup.string().min(6, 'Mật khẩu phải từ 6 đến 32 kí tự!').max(32, "Mật khẩu phải từ 6 đến 32 kí tự!").required("Nhập mật khẩu!")
        }),
        onSubmit: values => {
            dispatch(dangKyNguoiDung(values, navigate))
        }



    });

    return (
        <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                        .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                    " }} />
                            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                    <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">blockify</div>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
  xl:text-bold">Đăng ký</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                            <input name='taiKhoan' onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="mt-8">
                            {/* <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>

                            </div>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='matKhau' className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='password' />
                            {formik.touched.matKhau && formik.errors.matKhau ? <div className='text-red-500'>{formik.errors.matKhau}</div> : null} */}
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>

                            </div>
                            <input type='password' onBlur={formik.handleBlur} onChange={formik.handleChange} name='matKhau' className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-none" />
                            {formik.touched.hoTen && formik.errors.hoTen ? <div className='text-red-500'>{formik.errors.hoTen}</div> : null}


                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Họ Tên
                                </div>

                            </div>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='hoTen' className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                            {formik.touched.hoTen && formik.errors.hoTen ? <div className='text-red-500'>{formik.errors.hoTen}</div> : null}
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Email
                                </div>


                            </div>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />

                            {formik.touched.email && formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
                            {console.log('formik.touched.email', formik.touched.soDT)}
                            {console.log('formik.errors.email', formik.errors.soDT)}


                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Số Điện Thoại
                                </div>

                            </div>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='soDT' className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                            {formik.touched.soDT && formik.errors.soDT ? <div className='text-red-500'>{formik.errors.soDT}</div> : null}
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
              shadow-lg">
                                Đăng ký
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )
}
