import * as actionTypes from './constants'
// getTopBanners 发送网络请求获得轮播图数据 res.banners
import { getTopBanners, getHotRecommend, getHotDJ, getNewAlbum, getRecommendRanking } from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res
})

// const changeHotDJAction = (res) => ({
//   type: actionTypes.CHANGE_HOT_DJ,
//   hotDJ: res.result
// })
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

// export const getHotRecommendAction = (limit) => {
//   return dispatch => {
//     getHotRecommend(limit).then(res => {
//       dispatch(changeHotRecommendAction(res))
//     })
//   }
// }
// export const getHotDJAction = (limit) => {
//   return dispatch => {
//     getHotDJ(limit).then(res => {
//       dispatch(changeHotDJAction(res))
//     })
//   }
// }

// limit [5,3]
export const getHotRecommendBothAction = (limit) => {
  return async (dispatch) => {
    const respl = await getHotRecommend(limit)
    const pl = respl.result
    const resdj = await getHotDJ()
    const dj = resdj.result
    const res = []
    res[0] = pl[0]
    res[1] = pl[1]
    res[2] = pl[2]
    res[3] = dj[0]
    res[4] = pl[3]
    res[5] = dj[1]
    res[6] = pl[4]
    res[7] = dj[2]
    // console.log(res);
    dispatch(changeHotRecommendAction(res))
    // dispatch(changeHotDJAction(dj))
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getRecommendRankingAction = (idx) => {
  return dispatch => {
    getRecommendRanking(idx).then(res => {
      switch(idx) {
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
          default:
      }
    })
  }
}




