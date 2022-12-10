import { Radio, Space, Tabs } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeMenu(props) {


    return (

        <Tabs
            tabPosition='left'
            items={props.heThongRapChieu.map((heThongRap, index) => {

                return {
                    label: <img key={index} style={{ width: '50px', height: "50px" }} src={heThongRap.logo} className='rounded-full' />,
                    key: index,
                    children:
                        <Tabs
                            tabPosition='left'
                            items={heThongRap.lstCumRap?.map((cumRap, index) => {

                                return {
                                    label: <div className='flex' key={index} style={{ width: '350px' }}>
                                        <img style={{ width: '50px' }} src={cumRap.hinhAnh} />
                                        <div className='text-left ml-2 font-bold'>
                                            {cumRap.tenCumRap}
                                            <p className='text-red-200'>Chi tiết</p>
                                        </div>
                                    </div>,
                                    key: index,
                                    children: <div key={index}>
                                        {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                                            return <div key={index}>
                                                <div key={index} className='flex my-7'>
                                                    <div>
                                                        <img src={phim.hinhAnh} style={{ width: '75px', height: '75px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                                    </div>
                                                    <div className='ml-3'>
                                                        <h1 className='text-2xl text-green-700'>{phim.tenPhim}</h1>

                                                        <p>{cumRap.diaChi}</p>
                                                        <div className='grid grid-cols-4 gap-4'>
                                                            {phim.lstLichChieuTheoPhim.slice(0, 4).map((lichChieu, index) => {

                                                                return <NavLink className='text-xl text-green-400' to={`checkout/${lichChieu.maLichChieu}`} key={index}>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                                            })}
                                                        </div>

                                                    </div>

                                                </div>
                                                <hr className='' />
                                            </div>
                                        })}
                                    </div>




                                };
                            })} />
                };
            })}
        />
    )
}
