import { quanLyPhimServices } from "../../services/QuanLyPhimServices"
import { quanLyRapService } from "../../services/QuanLyRapService"
import { LAY_THONG_TIN_CHI_TIET_PHIM } from "./types/QuanLyPhimTypes"
import { LAY_DANH_SACH_HE_THONG_RAP } from "./types/QuanLyRapTypes"


export const layDanhSachHeThongRap = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.layDanhSachHeThongRap()
            if (result.status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_HE_THONG_RAP,
                    heThongRapChieu: result.data.content
                })
            }
        } catch (err) {
            console.log(err)
        }

    }
}
export const layThongTinChiTietPhim = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.layThongTinLichChieuPhim(maPhim)

            if (result.status === 200) {
                dispatch({
                    type: LAY_THONG_TIN_CHI_TIET_PHIM,
                    dataFilm: result.data.content
                })
            }
        } catch (err) {

        }
    }
}