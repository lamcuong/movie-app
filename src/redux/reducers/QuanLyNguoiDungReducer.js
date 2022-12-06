import { MA_NGUOI_DUNG, TOKEN, USER_LOGIN } from "../../util/settings/config"
import { DANG_NHAP, LAY_DANH_SACH_NGUOI_DUNG, LAY_THONG_TIN_NGUOI_DUNG, TIM_KIEM_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungTypes"

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: [],
  danhSachNguoiDung: [],
}


export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      state.userLogin = action.thongTinNguoiDung

      localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinNguoiDung))

      localStorage.setItem(TOKEN, action.thongTinNguoiDung.accessToken)
      if (action.thongTinNguoiDung.maLoaiNguoiDung === 'QuanTri') {
        localStorage.setItem(MA_NGUOI_DUNG, JSON.stringify(action.thongTinNguoiDung.maLoaiNguoiDung))
      }
      return { ...state }
    }
    case LAY_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung

      return { ...state }
    }
    case LAY_DANH_SACH_NGUOI_DUNG: {

      state.danhSachNguoiDung = action.danhSachNguoiDung
      return { ...state }
    }

    default: return { ...state }
  }
}