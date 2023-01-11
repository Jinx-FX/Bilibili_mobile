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
    // * 点赞改变
    commentChangeLike (state, rpid) {
      state.commentList.map(comment => {
        if (comment.rpid === rpid.payload) {
          if (!comment.action) {
            comment.action++
            comment.like++
          }
          else {
            comment.action--
            comment.like--
          }
        }
      })
    }
  }
})

const { setComment, commentChangeLike } = commentStore.actions

const getCommentsList = () => {
  return async (dispatch) => {
    const { data } = await getCommentsListRequest()
    dispatch(setComment([...data.replies]))
  }
}

export { getCommentsList, commentChangeLike }
export default commentStore.reducer