import { CHUYEN_TAB, DAT_GHE, DAT_VE_HOAN_TAT, LAY_DANH_SACH_PHONG_VE } from "../actions/types/QuanLyDatVeTypes"
import { ThongTinLichChieu } from '../../_core/models/ThongTinPhongVe'

const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    activeTab: '1'


}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        case DAT_GHE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhat.findIndex(gheDangDat => gheDangDat.tenGhe === action.gheDangDat.tenGhe)

            if (index !== -1) {

                danhSachGheCapNhat.splice(index, 1)

            } else {

                danhSachGheCapNhat.push(action.gheDangDat)
            }

            state.danhSachGheDangDat = danhSachGheCapNhat
            console.log(state.danhSachGheDangDat)
            return { ...state }
        }
        case CHUYEN_TAB: {
            state.activeTab = action.activeTab
            console.log('state.activeTab', state.activeTab)
            return { ...state }
        }
        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = []
            return { ...state }
        }
        default: return { ...state }
    }
}