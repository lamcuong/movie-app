import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseServices";

export class QuanLyDatVeServices extends baseService {
    constructor() {
        super();
    }

    layDanhSachPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)

    }
    actionDatVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }
    taoLichChieu = (thongTinLichChieu) => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu)
    }
}

export const quanLyDatVeServices = new QuanLyDatVeServices()