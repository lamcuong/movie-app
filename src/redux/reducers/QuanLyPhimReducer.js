import { template } from "lodash"
import { GET_DANH_SACH_PHIM, GET_PHIM_DANG_CHIEU, GET_PHIM_SAP_CHIEU, LAY_THONG_TIN_CHI_TIET_PHIM, LAY_THONG_TIN_EDIT_PHIM } from "../actions/types/QuanLyPhimTypes"

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 10900,
            "tenPhim": "Minions: Sự Trỗi Dậy Của Gru",
            "biDanh": "minions-su-troi-day-cua-gru",
            "trailer": "",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/minions-su-troi-day-cua-gru_gp00.jpg",
            "moTa": "Là một fanboy của nhóm siêu ác nhân được biết đến với cái tên Vicious 6, Gru ấp ủ một kế hoạch trở thành kẻ siêu xấu xa để tham gia cùng họ. Với sự giúp sức của các Minion, hành trình này trở nên khá là \"xấu xa\" và gây cười cực mạnh.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-06-30T00:00:00",
            "danhGia": 9,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        },
        {
            "maPhim": 10900,
            "tenPhim": "Minions: Sự Trỗi Dậy Của Gru",
            "biDanh": "minions-su-troi-day-cua-gru",
            "trailer": "",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/minions-su-troi-day-cua-gru_gp00.jpg",
            "moTa": "Là một fanboy của nhóm siêu ác nhân được biết đến với cái tên Vicious 6, Gru ấp ủ một kế hoạch trở thành kẻ siêu xấu xa để tham gia cùng họ. Với sự giúp sức của các Minion, hành trình này trở nên khá là \"xấu xa\" và gây cười cực mạnh.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-06-30T00:00:00",
            "danhGia": 9,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        },

    ],
    arrFilmDefault: [

    ],
    phimDangChieu: false,
    phimSapChieu: false,
    filmDetail: {

    },
    thongTinPhimEdit: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_DANH_SACH_PHIM: {

            return { ...state, arrFilm: action.arrFilm, arrFilmDefault: action.arrFilm }
        }
        case GET_PHIM_DANG_CHIEU: {

            state.phimDangChieu = !state.phimDangChieu
            state.phimSapChieu = false
            state.arrFilm = state.arrFilmDefault.filter(phim => phim.dangChieu === state.phimDangChieu)

            return { ...state }
        }
        case GET_PHIM_SAP_CHIEU: {
            state.phimSapChieu = !state.phimSapChieu
            state.phimDangChieu = false
            state.arrFilm = state.arrFilmDefault.filter(phim => phim.sapChieu === state.phimSapChieu)

            return { ...state }
        }
        case LAY_THONG_TIN_CHI_TIET_PHIM: {

            state.filmDetail = action.dataFilm
            console.log('state.arrFilm', state.filmDetail)
            return { ...state }
        }
        case LAY_THONG_TIN_EDIT_PHIM: {
            state.thongTinPhimEdit = action.thongTinPhimEdit
            return { ...state }
        }
        default: return { ...state }
    }
}