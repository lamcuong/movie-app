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
    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
    }
    capNhatThongTinNguoiDung = (thongTinCapNhat) => {
        return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinCapNhat)
    }
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices()