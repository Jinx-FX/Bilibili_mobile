import { axiosInstance } from "./config"
import axios from 'axios'

export const getVideosListRequest = () =>
  axiosInstance.get('/videolist')  // 首页视频列表

export const getFourCardListRequest =
  () => axiosInstance.get('/fourcardlist')

export const getArchiveListRequest =
  () => axiosInstance.get('/archivelist')

export const getRecommendedRequest =
  () => axiosInstance.get('/recommended')

export const getCommentsListRequest =
  () => axiosInstance.get('/commentslist')

export const getMADListRequest =
  () => axiosInstance.get('/madlist')

export const getMMDListRequest =
  () => axiosInstance.get('/mmdlist')

// 请求 bili 视频详细信息, failed, 
// !跨源请求
// * curl -G 'http://api.bilibili.com/x/web-interface/view' \
// * --data-urlencode 'bvid=BV117411r7R1'

let options = {
  method: 'POST',
  url: `http://api.bilibili.com/x/web-interface/view`,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  data: new URLSearchParams({ "bvid": "BV117411r7R1" })
}
export const getVideoDetails = () => axios(options)