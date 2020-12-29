import request from './request'

export const getRecommendSinger = (limit) => {
  return request({
    url: "/artist/list",
    params: {
      limit
    }
  })
}