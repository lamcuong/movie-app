import { quanLyDatVeServices } from "../../services/QuanLyDatVeServices"
import { HIDE_LOADING, OPEN_LOADING } from "./types/LoadingTypes"
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, LAY_DANH_SACH_PHONG_VE } from "./types/QuanLyDatVeTypes"

export const layDanhSachPhongVe = (maLichChieu) => {

    return async (dispatch) => {
        dispatch({ type: OPEN_LOADING })
        try {
            const result = await quanLyDatVeServices.layDanhSachPhongVe(maLichChieu)

            dispatch({ type: HIDE_LOADING })
            dispatch({
                type: LAY_DANH_SACH_PHONG_VE,
                chiTietPhongVe: result.data.content
            })

        } catch (err) {
            dispatch({ type: HIDE_LOADING })
            console.log(err)
        }

    }
}
export const actionDatVe = (thongTinDatVe) => {

    return async (dispatch) => {
        dispatch({ type: OPEN_LOADING })
        try {

            const result = await quanLyDatVeServices.actionDatVe(thongTinDatVe)

            await dispatch(layDanhSachPhongVe(thongTinDatVe.maLichChieu))
            dispatch({ type: DAT_VE_HOAN_TAT })
            dispatch({ type: HIDE_LOADING })
            dispatch({
                type: CHUYEN_TAB,
                activeTab: '2'
            })



        }
        catch (err) {
            alert(err.response.data.content)
            console.log(err)
            dispatch({ type: HIDE_LOADING })
        }

    }
}
