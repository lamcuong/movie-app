import React from "react"
import { redirect, useNavigate } from "react-router-dom"
import { QuanLyNguoiDung, quanLyNguoiDungServices } from "../../services/QuanLyNguoiDungServices"
import { DANG_NHAP, LAY_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungTypes"


export const dangNhapAction = (thongTinDangNhap, navigate) => {



    return async (dispatch) => {

        try {



            const result = await quanLyNguoiDungServices.dangNhap(thongTinDangNhap)
            console.log({ result })


            dispatch({
                type: DANG_NHAP,
                thongTinNguoiDung: result.data.content
            })
            navigate(-1)



        } catch (err) {
            document.getElementById('errDangNhap').innerHTML = err.response.data.content

        }
    }

}

export const layThongTinNguoiDung = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.layThongTinNguoiDung()

            dispatch({
                type: LAY_THONG_TIN_NGUOI_DUNG,
                thongTinNguoiDung: result.data.content
            })


        } catch (err) {
            console.log(err)
        }
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

            console.log({ result })
        } catch (err) {
            console.log(err.response.data)
        }
    }
}