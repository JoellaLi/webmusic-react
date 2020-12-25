// Recommend组件内的网络请求
import request from './request'

export const getTopBanners = () => {
  return request({
    url: "/banner",
  })
}

