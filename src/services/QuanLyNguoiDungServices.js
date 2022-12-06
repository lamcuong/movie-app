import { GROUPID } from "../util/settings/config";
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
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinCapNhat)
    }
    layDanhSachNguoiDung = (tuKhoa = '') => {
        if (tuKhoa !== '') {
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    themNguoiDung = (thongTinThemNguoiDung) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, thongTinThemNguoiDung)
    }
    xoaNguoiDung = (taiKhoanXoa) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoanXoa}`)
    }
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices()