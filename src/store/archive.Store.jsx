import { createSlice } from "@reduxjs/toolkit"
import { getArchiveListRequest } from '@/api/request'

const archiveStore = createSlice({
  name: 'archiveStore',
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

const { setVideos } = archiveStore.actions

const getArchiveList = () => {
  return async (dispatch) => {
    const { data } = await getArchiveListRequest()
    dispatch(setVideos([...data.list.vlist]))
  }
}

export { getArchiveList }
export default archiveStore.reducer