import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimServices extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }
    layDanhSachPhim = (tenPhim = '') => {
        if (tenPhim !== '') {
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00&tenPhim=${tenPhim}`)
        }
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    themPhimUploadHinh = (formData) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData)
    }
    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    capNhatPhim = (formData) => {
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData)
    }
    xoaPhim = (maPhim) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyPhimServices = new QuanLyPhimServices()