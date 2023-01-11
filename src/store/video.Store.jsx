import { createSlice } from "@reduxjs/toolkit"
import { getVideosListRequest, getMMDListRequest, getMADListRequest, getFourCardListRequest }
  from '@/api/request'

const videoStore = createSlice({
  name: 'videoStore',
  initialState: {
    videos: [],
    enterLoading: true
  },
  reducers: {
    setVideos (state, videos) {
      state.videos = videos.payload
      state.enterLoading = false
    }
  }
})

const { setVideos } = videoStore.actions

const getVideosList = () => {
  return async (dispatch) => {
    const { data } = await getVideosListRequest()
    dispatch(setVideos([...data]))
  }
}

const getMMDList = () => {
  return async (dispatch) => {
    const { data } = await getMMDListRequest()
    dispatch(setVideos([...data]))
  }
}
const getMADList = () => {
  return async (dispatch) => {
    const { data } = await getMADListRequest()
    dispatch(setVideos([...data]))
  }
}

const getFourCardList = () => {
  return async (dispatch) => {
    const { data } = await getFourCardListRequest()
    dispatch(setVideos([...data]))
  }
}

export { getVideosList, getMMDList, getMADList, getFourCardList }
export default videoStore.reducer