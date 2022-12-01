import { TOKEN, USER_LOGIN } from "../../util/settings/config"
import { DANG_NHAP, LAY_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungTypes"

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: []
}


export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            state.userLogin = action.thongTinNguoiDung

            localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinNguoiDung))
            localStorage.setItem(TOKEN, action.thongTinNguoiDung.accessToken)
            return { ...state }
        }
        case LAY_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung

            return { ...state }
        }
        default: return { ...state }
    }
}