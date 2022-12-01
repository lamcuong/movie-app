import { baseService } from "./baseServices";

export class QuanLyNguoiDungServices extends baseService {
    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    layThongTinNguoiDung = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }

}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices()