import React, { useState } from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { GROUPID } from '../../../../util/settings/config';
import { useDispatch } from 'react-redux';
import { themPhimUploadHinh } from '../../../../redux/actions/QuanLyPhimAction';
import { useNavigate } from 'react-router-dom';
const AddNew = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: '',
            sapChieu: '',
            hot: '',
            danhGia: '',
            hinhAnh: {},

        },
        onSubmit: values => {
            // console.log({ values })
            values.maNhom = GROUPID
            let formData = new FormData()

            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    formData.append("File", values.hinhAnh, values.hinhAnh.name)
                }

            }
            dispatch(themPhimUploadHinh(formData, navigate))
        },
    });
    const [imgSrc, setImgSrc] = useState('')
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const handleChangeDatePicker = (value) => {

        formik.setFieldValue('ngayKhoiChieu', moment(value).format('DD/MM/YYYY'))
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
    const handleChangeFile = (e) => {
        // Lấy file ra từ e 
        let file = e.target.files[0]
        if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/gif" || file.type === "image/jpg") {
            // Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {

                setImgSrc(e.target.result)
            }
            formik.setFieldValue('hinhAnh', file)
        }

    }
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
                <Input name='tenPhim' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mô tả">
                <Input name='moTa' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
            </Form.Item>
            <Form.Item label="Đang chiếu" valuePropName="checked">
                <Switch onChange={handleChangeSwitch('dangChieu')} />
            </Form.Item>
            <Form.Item label="Sắp chiếu" valuePropName="checked">
                <Switch onChange={handleChangeSwitch('sapChieu')} />
            </Form.Item>
            <Form.Item label="Hot" valuePropName="checked">
                <Switch onChange={handleChangeSwitch('hot')} />
            </Form.Item>


            <Form.Item label="Số sao">
                <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
            </Form.Item>
            <Form.Item label="Hình ảnh">
                <input accept="image/png, image/jpeg,image/gif,image/jpg" type='file' onChange={handleChangeFile} />
                <br />
                <img style={{ width: 150, height: 150, border: '1px solid black' }} src={imgSrc} alt='..' />
            </Form.Item>

            <Form.Item label="Tác vụ">
                <button type='submit' className='bg-blue-500 text-white p-2'>Thêm phim</button>
            </Form.Item>
        </Form>
    );
};
export default AddNew;