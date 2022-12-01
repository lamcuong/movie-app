import axios from 'axios'
import { quanLyPhimServices } from '../../services/QuanLyPhimServices'
import { DOMAIN, TOKEN } from '../../util/settings/config'
import { GET_CAROUSEL } from './types/CarouselType'

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimServices.layDanhSachBanner();


            dispatch({
                type: GET_CAROUSEL,
                arrImg: result.data.content
            })


        } catch (err) {
            console.log(err)
        }
    }
}