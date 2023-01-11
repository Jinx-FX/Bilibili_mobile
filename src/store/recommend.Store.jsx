import { createSlice } from "@reduxjs/toolkit"
import { getRecommendedRequest } from '@/api/request'

const recommendStore = createSlice({
  name: 'recommendStore',
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

const { setVideos } = recommendStore.actions

const getRecommended = () => {
  return async (dispatch) => {
    const { data } = await getRecommendedRequest()
    dispatch(setVideos([...data.result]))
  }
}

export { getRecommended }
export default recommendStore.reducer