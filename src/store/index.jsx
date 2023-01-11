import { configureStore } from "@reduxjs/toolkit"
import videoStore from './video.Store'
import commentStore from './comment.Store'
import recommendStore from './recommend.Store'

export default configureStore({
  reducer: {
    videoStore,
    commentStore,
    recommendStore
  }
})
