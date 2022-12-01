import React, { Fragment, useEffect } from 'react';
import { AudioOutlined, DeleteOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction, xoaPhim } from '../../../redux/actions/QuanLyPhimAction';
import { NavLink, useNavigate } from 'react-router-dom';






export default function Films() {
    const { Search } = Input;

    const columns = [
        {

            title: 'Mã phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: '15%'





        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <img src={film.hinhAnh} style={{ width: 50, height: 50 }} alt={film.hinhAnh} />

            },
            width: '15%'
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            width: '25%',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();

                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1

            },
            sortDirections: ['descend', 'ascend'],

        },


        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, film, index) => {
                return <div>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                </div>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'

        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: (text, film) => {

                return <Fragment>
                    <NavLink key={1} className="  text-2xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined style={{ color: 'blue' }} /> </NavLink>
                    <span onClick={() => {
                        if (window.confirm('Xác nhận xóa phim  ' + film.tenPhim)) {
                            dispatch(xoaPhim(film.maPhim))
                        }

                    }} key={2} className="text-2xl mx-2" ><DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} /> </span>
                    <NavLink key={3} className="   text-2xl" to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`} onClick={() => {
                        localStorage.setItem('filmParams', JSON.stringify(film))
                    }}><CalendarOutlined style={{ color: 'green' }} /> </NavLink>
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '20%'
        },
    ];

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer)
    useEffect(() => {
        dispatch(layDanhSachPhimAction())
    }, [])
    const onSearch = (value) => {
        dispatch(layDanhSachPhimAction(value))

    };
    return (
        <Fragment>
            <div >
                <h1 className='text-3xl font-bold'>Quản Lý Phim</h1>
                <Button onClick={() => {
                    navigate('/admin/films/addnew')
                }}>Thêm phim</Button>
                <Search className='mt-3' placeholder="input search text" onSearch={onSearch} enterButton />


            </div >
            <div className='mt-10'>
                <Table columns={columns} dataSource={arrFilmDefault} rowKey={'maPhim'} />
            </div>
        </Fragment>
    )
}
