// Recommend组件内的网络请求
import request from './request'

export const getTopBanners = () => {
  return request({
    url: "/banner",
  })
}

export const getHotRecommend = (limit) => {
  return request({
    url: "/personalized",
    params: {
      limit: limit
    }
  })
}

export const getHotDJ = () => {
  return request({
    url: "/personalized/djprogram",
  })
}

export const getNewAlbum = (item) => {
  return request ({
    url: "/top/album",
    params: {
      item
    }
  })
}

export const getRecommendRanking = (idx) => {
  return request ({
    url: "/top/list",
    params: {
      idx
    }
  })
}



