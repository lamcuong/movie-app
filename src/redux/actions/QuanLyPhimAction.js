import { quanLyPhimServices } from "../../services/QuanLyPhimServices"
import { GET_DANH_SACH_PHIM, LAY_THONG_TIN_CHI_TIET_PHIM, LAY_THONG_TIN_EDIT_PHIM } from "./types/QuanLyPhimTypes"

export const layDanhSachPhimAction = (tenPhim = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimServices.layDanhSachPhim(tenPhim)

            dispatch({
                type: GET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })

        } catch (err) {

            console.log(err)
        }
    }
}


export const themPhimUploadHinh = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimServices.themPhimUploadHinh(formData)

            alert("Thêm phim thành công ")
            navigate('/admin/films')


        } catch (err) {
            alert(err.response.data.content)
            console.log(err)
        }
    }
}

export const layThongTinPhim = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimServices.layThongTinPhim(maPhim)


            dispatch({
                type: LAY_THONG_TIN_EDIT_PHIM,
                thongTinPhimEdit: result.data.content
            })

        } catch (err) {
            console.log(err)
        }
    }
}

export const capNhatPhim = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimServices.capNhatPhim(formData)
            alert('Cập nhật phim thành công')
            navigate('/admin/films')

            dispatch(layDanhSachPhimAction())

        } catch (err) {
            alert(err.response.data.content)
            console.log(err.response.data)
        }
    }
}

export const xoaPhim = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimServices.xoaPhim(maPhim)

            dispatch(layDanhSachPhimAction())
        } catch (err) {
            alert(err.response.data.content)
        }
    }
}