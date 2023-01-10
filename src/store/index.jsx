import { configureStore } from "@reduxjs/toolkit"
import videoStore from './video.Store'

export default configureStore({
  reducer: {
    videoStore
  }
})
