import React, { useState } from 'react';
import { Button, Input, Modal, Select } from 'antd';
import { GROUPID } from '../../../util/settings/config';
import { useDispatch } from 'react-redux';
import { themNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungActions';
const App = ({ isModalOpen, setIsModalOpen, userInfo }) => {
    const [values, setValues] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        hoTen: '',
        maLoaiNguoiDung: 'KhachHang',
        maNhom: GROUPID


    })
    const dispatch = useDispatch()


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })

    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(themNguoiDungAction(values))
        handleOk()

        console.log(values)
    }
    console.log({ userInfo })

    return (<>

        <Modal destroyOnClose footer={null} title="Thêm người dùng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <form onSubmit={onSubmit}>

                <div>
                    <label className='text-gray-700'>Tài khoản</label>
                    <input required onChange={onChange} name='taiKhoan' className='block w-full my-3 p-5 border border-gray-500 rounded-lg   focus:outline-blue-300' placeholder='Tài khoản' />

                </div>
                <div>
                    <label className='text-gray-700'>Mật khẩu</label>
                    <input required onChange={onChange} name='matKhau' className='block w-full my-3 p-5 border border-gray-500 rounded-lg   focus:outline-blue-300' placeholder='Mật khẩu' />

                </div>
                <div>
                    <label className='text-gray-700'>Email</label>
                    <input required onChange={onChange} name='email' className='block w-full my-3 p-5 border border-gray-500 rounded-lg   focus:outline-blue-300' placeholder='Email' />

                </div>
                <div>
                    <label className='text-gray-700'>Số điện thoại</label>
                    <input required type='number' onChange={onChange} name='soDt' className='block w-full my-3 p-5 border border-gray-500 rounded-lg   focus:outline-blue-300' placeholder='Số điện thoại' />

                </div>
                <div>
                    <label className='text-gray-700'>Họ tên</label>
                    <input required onChange={onChange} name='hoTen' className='block w-full my-3 p-5 border border-gray-500 rounded-lg   focus:outline-blue-300' placeholder='Họ tên' />

                </div>
                <div>

                    <label className='text-gray-700 block'>Loại người dùng</label>
                    <select onChange={onChange} name='maLoaiNguoiDung' className='w-full p-5 my-3  border border-gray-500 rounded-lg   focus:outline-blue-300' >
                        <option className='p-3' value="KhachHang">Khách hàng</option>
                        <option className='p-3' value="QuanTri">Quản trị</option>


                    </select>
                </div>
                <div className='text-right'>
                    <button onClick={handleCancel} className='py-1 px-3 mr-3 border border-gray-300'>Hủy bỏ</button>
                    <button type='submit' className='py-1 px-3 bg-blue-500 text-white'>Thêm </button>
                </div>


            </form>
        </Modal>
    </>

    );
};
export default App;