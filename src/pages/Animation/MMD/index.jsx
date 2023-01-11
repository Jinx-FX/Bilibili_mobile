import VideoListBox from "@/components/VideoListBox"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMMDList } from '@/store/video.Store'

function MMD () {
  const { videos, enterLoading } = useSelector(state => state.videoStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMMDList())
  }, [])
  return (
    <VideoListBox videos={videos} enterLoading={enterLoading} />
  )
}

export default MMD
