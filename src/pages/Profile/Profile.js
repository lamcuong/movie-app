import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinNguoiDungAction, layThongTinNguoiDung } from '../../redux/actions/QuanLyNguoiDungActions';
import { useFormik } from 'formik';

export default function Profile() {
    const dispatch = useDispatch()
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    useEffect(() => {
        dispatch(layThongTinNguoiDung())


    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinNguoiDung.taiKhoan,
            matKhau: thongTinNguoiDung.matKhau,
            email: thongTinNguoiDung.email,
            hoTen: thongTinNguoiDung.hoTen,
            maNhom: thongTinNguoiDung.maNhom,
            maLoainguoiDung: 'KhachHang',
            soDt: thongTinNguoiDung.soDT

        },
        onSubmit: values => {
            dispatch(capNhatThongTinNguoiDungAction(values))
        }
    })

    console.log({ thongTinNguoiDung })

    return (
        <div className='container m-auto mt-32'>
            <h1 className='text-3xl mb-16 text-center'>Thông tin cá nhân </h1>
            <Form
                onSubmitCapture={formik.handleSubmit}
                className='grid grid-cols-2'
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item

                    label="Email"


                >
                    <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
                </Form.Item>

                <Form.Item
                    label="Tài khoản"

                >
                    <Input name="taiKhoan" disabled onChange={formik.handleChange} value={formik.values.taiKhoan} />
                </Form.Item>

                <Form.Item
                    label="Họ tên"

                >
                    <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} />
                </Form.Item>



                <Form.Item
                    label="Mật khẩu"


                >
                    <Input.Password name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} />
                </Form.Item>




                <Form.Item
                    className=''
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button className='' type="primary" htmlType="submit">
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>


        </div >
    )
}
