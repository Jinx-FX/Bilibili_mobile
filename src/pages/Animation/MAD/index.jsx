import VideoListBox from "@/components/VideoListBox"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMADList } from '@/store/video.Store'

function MAD () {
  const { videos, enterLoading } = useSelector(state => state.videoStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMADList())
  }, [])
  return (
    <VideoListBox videos={videos} enterLoading={enterLoading} />
  )
}

export default MAD
