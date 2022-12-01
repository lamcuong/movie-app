import React, { useEffect, useState } from 'react';
import {

    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,

    Switch,

} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { GROUPID } from '../../../../util/settings/config';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhim, layThongTinPhim, themPhimUploadHinh } from '../../../../redux/actions/QuanLyPhimAction';
import { useNavigate, useParams } from 'react-router-dom';


const EditFilm = () => {
    const { thongTinPhimEdit } = useSelector(state => state.QuanLyPhimReducer)
    const [imgSrc, setImgSrc] = useState('')
    const [componentSize, setComponentSize] = useState('default');
    const { id } = useParams()
    useEffect(() => {

        dispatch(layThongTinPhim(id))

    }, [])
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhimEdit.maPhim,
            tenPhim: thongTinPhimEdit.tenPhim,
            trailer: thongTinPhimEdit.trailer,
            moTa: thongTinPhimEdit.moTa,
            ngayKhoiChieu: thongTinPhimEdit.ngayKhoiChieu,
            dangChieu: thongTinPhimEdit.dangChieu,
            sapChieu: thongTinPhimEdit.sapChieu,
            hot: thongTinPhimEdit.hot,

            danhGia: thongTinPhimEdit.danhGia,
            hinhAnh: null,

        },
        onSubmit: values => {
            // console.log({ values })
            values.maNhom = GROUPID
            let formData = new FormData()

            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append("File", values.hinhAnh, values.hinhAnh.name)
                    }

                }

            }

            dispatch(capNhatPhim(formData, navigate))
        },
    });


    const handleChangeDatePicker = (value) => {

        formik.setFieldValue('ngayKhoiChieu', moment(value))

    }
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeFile = async (e) => {

        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            await formik.setFieldValue('hinhAnh', file)

            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                console.log('e.target.result', e.target.result)
                setImgSrc(e.target.result)
            }

        }

    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };


    console.log({ thongTinPhimEdit })
    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >
            <h3>Thêm mới phim</h3>
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Tên phim">
                <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
            </Form.Item>
            <Form.Item label="Mô tả">
                <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker onChange={handleChangeDatePicker} format='DD/MM/YYYY' value={moment(formik.values.ngayKhoiChieu)} />
            </Form.Item>
            <Form.Item label="Đang chiếu" valuePropName="checked">
                <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
            </Form.Item>
            <Form.Item label="Sắp chiếu" valuePropName="checked">
                <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
            </Form.Item>
            <Form.Item label="Hot" valuePropName="checked">
                <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
            </Form.Item>


            <Form.Item label="Số sao">
                <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia} />
            </Form.Item>
            <Form.Item label="Hình ảnh">
                <input accept="image/png, image/jpeg,image/gif,image/png" type='file' onChange={handleChangeFile} />
                <br />
                <img style={{ width: 150, height: 150, border: '1px solid black' }} src={imgSrc === '' ? thongTinPhimEdit.hinhAnh : imgSrc} alt='..' />
            </Form.Item>

            <Form.Item label="Tác vụ">
                <button type='submit' className='bg-blue-500 text-white p-2'>Cập nhật</button>
            </Form.Item>
        </Form>
    );
};
export default EditFilm;