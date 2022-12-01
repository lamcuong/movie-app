import { LAY_DANH_SACH_HE_THONG_RAP } from "../actions/types/QuanLyRapTypes"

const stateDefault = {
    heThongRapChieu: [

    ]
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_HE_THONG_RAP: {
            state.heThongRapChieu = action.heThongRapChieu
            return { ...state }
        }
        default: return { ...state }
    }
}