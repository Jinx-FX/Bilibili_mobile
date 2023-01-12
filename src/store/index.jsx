import { configureStore } from "@reduxjs/toolkit"
import videoStore from './video.Store'
import commentStore from './comment.Store'
import recommendStore from './recommend.Store'
import archiveStore from './archive.Store'
import suggestStore from './suggest.Store'

export default configureStore({
  reducer: {
    videoStore,
    commentStore,
    recommendStore,
    archiveStore,
    suggestStore
  }
})
