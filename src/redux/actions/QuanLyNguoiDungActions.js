import React from "react"
import { redirect, useNavigate } from "react-router-dom"
import { QuanLyNguoiDung, quanLyNguoiDungServices } from "../../services/QuanLyNguoiDungServices"
import { DANG_NHAP, LAY_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungTypes"


export const dangNhapAction = (thongTinDangNhap, navigate) => {



    return async (dispatch) => {

        try {



            const result = await quanLyNguoiDungServices.dangNhap(thongTinDangNhap)
            console.log({ result })
            if (result.status === 200) {

                dispatch({
                    type: DANG_NHAP,
                    thongTinNguoiDung: result.data.content
                })
                navigate(-1, '/')

            }

        } catch (err) {
            document.getElementById("err").innerHTML = err.response.data.content

        }
    }

}

export const layThongTinNguoiDung = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.layThongTinNguoiDung()
            if (result.status === 200) {
                dispatch({
                    type: LAY_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
            }

        } catch (err) {
            console.log(err)
        }
    }
}