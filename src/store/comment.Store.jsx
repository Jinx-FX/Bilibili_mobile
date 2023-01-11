import { createSlice } from "@reduxjs/toolkit"
import { getCommentsListRequest } from '@/api/request'

const commentStore = createSlice({
  name: 'commentStore',
  initialState: {
    commentList: []
  },
  reducers: {
    setComment (state, commentList) {
      state.commentList = commentList.payload
    },
    // * 点赞改变未实现
    // commentChangeLike (state, rpi) {
    //   // state.commentList = 
    // }
  }
})

const { setComment } = commentStore.actions

const getCommentsList = () => {
  return async (dispatch) => {
    const { data } = await getCommentsListRequest()
    dispatch(setComment([...data.replies]))
  }
}

export { getCommentsList }
export default commentStore.reducer