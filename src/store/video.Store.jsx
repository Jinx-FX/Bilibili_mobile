import { createSlice } from "@reduxjs/toolkit"

const videoStore = createSlice({
  name: 'videoStore',
  initialState: {
    videos: [],
    enterLoading: true
  },
  reducers: {
    getV (state, videos) {
      state.videos = videos.payload
      state.enterLoading = false
    }
  }
})

const { getV } = videoStore.actions
const reducer = videoStore.reducer

export { getV }
export default reducer