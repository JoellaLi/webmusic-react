import * as actionTypes from './constants'
// getTopBanners 发送网络请求获得轮播图数据 res.banners
import { getTopBanners } from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}


