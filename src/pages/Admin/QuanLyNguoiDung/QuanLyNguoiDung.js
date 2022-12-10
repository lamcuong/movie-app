import React, { useEffect, useState } from 'react'

import { Space, Table, Tag, Input, Modal, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDung, timKiemNguoiDung, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungActions';
import { quanLyNguoiDungServices } from '../../../services/QuanLyNguoiDungServices';
import ModalQuanLyNguoiDung from './ModalQuanLyNguoiDung';
import { NavLink } from 'react-router-dom';
import CapNhatNguoiDung from './CapNhatNguoiDung';
export default function QuanLyNguoiDung() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const { Search } = Input;
    const onSearch = (value) => {
        dispatch(layDanhSachNguoiDung(value))
    };
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachNguoiDung())
    }, [])

    const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)

    const columns = [
        {
            title: 'STT',
            dataIndex: 'taiKhoan',
            key: 'stt',
            render: (text, record, index) => <p key={index}>{index + 1}</p>,
        },
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',

        },
        {
            title: 'Loại người dùng',
            key: 'maLoaiNguoiDung',
            dataIndex: 'maLoaiNguoiDung',
            render: (text, record, index) => {
                return <p>
                    {record.maLoaiNguoiDung === "QuanTri" ? 'Quản trị' : 'Khách hàng'}
                </p>
            }

        },
        {
            title: 'Thao tác',
            key: 'thaoTac',
            render: (text, record, index) => {

                return <div>

                    <NavLink onClick={() => {

                    }} to={`/admin/user/edit/${record.taiKhoan}`} className=' text-black hover:text-white py-1 px-4 rounded-md bg-orange-300 mr-5 '>Chỉnh sửa </NavLink>
                    <button onClick={() => {
                        if (window.confirm('Xác nhận xóa tài khoản  ' + record.taiKhoan)) {
                            dispatch(xoaNguoiDungAction(record.taiKhoan))
                        }
                    }} className='text-white py-1 px-4 rounded-md bg-red-500'>Xóa</button>
                </div>


            }

        },
    ];

    return (
        <div className='container m-auto'>

            <h1 className='text-center text-4xl' >Quản lý người dùng</h1>
            <button onClick={showModal} className='my-10 p-3 rounded-md text-white bg-blue-600'>Thêm người dùng</button>
            {isModalOpen && <ModalQuanLyNguoiDung isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}

            <Search
                placeholder="Nhập vào tài khoản hoặc tên người dùng"

                enterButton="Tìm"
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={danhSachNguoiDung} rowKey={'quanLyNguoiDung'} />


        </div>
    )
}
