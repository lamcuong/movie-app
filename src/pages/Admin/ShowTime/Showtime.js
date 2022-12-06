import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import { useFormik } from 'formik';
import moment from 'moment';
import { quanLyDatVeServices } from '../../../services/QuanLyDatVeServices';

export default function Showtime() {
    const navigate = useNavigate()
    const params = useParams();
    const formik = useFormik({
        initialValues: {
            maPhim: params.maphim,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: '',

        },
        onSubmit: async (values) => {
            console.log({ values })
            try {
                const result = await quanLyDatVeServices.taoLichChieu(values)
                console.log({ result })
                alert('Tạo lịch chiếu thành công!')
                navigate('/admin/films')
            } catch (err) {
                console.log(err)
            }
        }
    })

    console.log({ params })
    const [state, setState] = useState({
        heThongRap: [],
        cumRap: []

    })

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await quanLyRapService.layThongTinHeThongRap();
                setState({
                    ...state,
                    heThongRap: result.data.content
                })
            } catch (err) {
                console.log(err)
            }

        }
        fetchData();
    }, []);

    let film = {}
    if (localStorage.getItem('filmParams')) {
        film = JSON.parse(localStorage.getItem('filmParams'))
    }

    const onOk = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
    };
    const handleChangeGiaVe = (value) => {
        formik.setFieldValue('giaVe', value)
    }
    const handleChangeHeThongRap = async (value) => {
        try {
            const result = await quanLyRapService.layThongTinCumRap(value)
            setState({
                ...state,
                cumRap: result.data.content
            })
            console.log(result)
        } catch (err) {
            console.log(err.response.data)
        }


    }
    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap', value)
    }
    return (
        <div className='container'>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onSubmitCapture={formik.handleSubmit}
            >
                <div className='text-center mb-16'>
                    <h3 className='text-2xl'> Tạo lịch chiếu - {film.tenPhim}</h3>
                    <img className='text-center m-auto' src={film.hinhAnh} alt='...' style={{ width: 300, height: 200 }} />
                </div>
                <Form.Item
                    label="Hệ thống rạp"

                >
                    <Select onChange={handleChangeHeThongRap} options={state.heThongRap?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.maHeThongRap }))} placeholder='Chọn hệ thống rạp'>

                    </Select>
                </Form.Item>

                <Form.Item
                    label="Cụm rạp"

                >
                    <Select onChange={handleChangeCumRap} options={state.cumRap?.map((cumRap, index) => ({ label: cumRap.tenCumRap, value: cumRap.maCumRap }))} placeholder='Chọn cụm rạp'></Select>
                </Form.Item>

                <Form.Item
                    label='Ngày chiếu giờ chiếu'

                >
                    <DatePicker format={'DD/MM/YYYY hh:mm:ss'} showTime onOk={onOk} />
                </Form.Item>

                <Form.Item
                    label='Giá vé'
                >
                    <InputNumber onChange={handleChangeGiaVe} min={75000} max={150000} />
                </Form.Item>
                <Form.Item
                    label='Chức năng'
                >
                    <Button htmlType='submit'  >Tạo lịch chiếu</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
