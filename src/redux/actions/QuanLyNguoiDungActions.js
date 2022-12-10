import React from "react"
import { redirect, useNavigate } from "react-router-dom"
import { QuanLyNguoiDung, quanLyNguoiDungServices } from "../../services/QuanLyNguoiDungServices"
import { HIDE_LOADING, OPEN_LOADING } from "./types/LoadingTypes"
import { DANG_NHAP, LAY_DANH_SACH_NGUOI_DUNG, LAY_THONG_TIN_NGUOI_DUNG, TIM_KIEM_NGUOI_DUNG } from "./types/QuanLyNguoiDungTypes"


export const dangNhapAction = (thongTinDangNhap, navigate) => {



    return async (dispatch) => {

        try {



            const result = await quanLyNguoiDungServices.dangNhap(thongTinDangNhap)



            dispatch({
                type: DANG_NHAP,
                thongTinNguoiDung: result.data.content
            })
            alert('Đăng nhập thành công!')
            navigate(-1)



        } catch (err) {
            document.getElementById('errDangNhap').innerHTML = err.response.data.content

        }
    }

}

export const layThongTinNguoiDung = () => {
    return async (dispatch) => {
        dispatch({ type: OPEN_LOADING })
        try {
            const result = await quanLyNguoiDungServices.layThongTinNguoiDung()

            dispatch({
                type: LAY_THONG_TIN_NGUOI_DUNG,
                thongTinNguoiDung: result.data.content
            })



        } catch (err) {


            console.log(err)
            dispatch({ type: HIDE_LOADING })
        }
        dispatch({ type: HIDE_LOADING })
    }
}

export const dangKyNguoiDung = (thongTinDangKy, navigate) => {
    return async () => {
        try {
            const result = await quanLyNguoiDungServices.dangKy(thongTinDangKy)
            alert('Đăng ký thành công!')
            navigate(-1)

        } catch (err) {
            alert(err.response.data.content)
        }
    }
}
export const capNhatThongTinNguoiDungAction = (thongTinCapNhat) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.capNhatThongTinNguoiDung(thongTinCapNhat)

            alert("Cập nhật thông tin thành công")


        } catch (err) {
            alert(err.response.data.content)
        }
    }
}
export const layDanhSachNguoiDung = (tuKhoa) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungServices.layDanhSachNguoiDung(tuKhoa)
            dispatch({
                type: LAY_DANH_SACH_NGUOI_DUNG,
                danhSachNguoiDung: result.data.content
            })

        } catch (err) {

            console.log(err)
        }
    }
}
export const themNguoiDungAction = (thongTinThemNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungServices.themNguoiDung(thongTinThemNguoiDung)

            alert('Thêm người dùng thành công!')
            dispatch(layDanhSachNguoiDung())
        } catch (err) {
            alert(err.response.data.content)
            console.log(err.response.data.content)
        }
    }
}
export const xoaNguoiDungAction = (taiKhoanXoa) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungServices.xoaNguoiDung(taiKhoanXoa)
            alert('Xóa thành công!')
            dispatch(layDanhSachNguoiDung())

        } catch (err) {
            alert(err.response.data.content)
        }

    }
}