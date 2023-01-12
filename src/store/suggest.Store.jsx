import { createSlice } from "@reduxjs/toolkit"
import { getVideosListRequest } from '@/api/request'

const suggestStore = createSlice({
  name: 'suggestStore',
  initialState: {
    suggestList: [],
  },
  reducers: {
    setVideos (state, videos) {
      state.suggestList = videos.payload
    }
  }
})

const { setVideos } = suggestStore.actions

const getSuggestList = (query) => {
  return async (dispatch) => {
    const { data } = await getVideosListRequest()
    let suggestList = [...data].filter(item => item.title.includes(query))
    dispatch(setVideos(suggestList))
  }
}

export { getSuggestList }
export default suggestStore.reducer