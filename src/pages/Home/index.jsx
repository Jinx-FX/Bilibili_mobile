import VideoListBox from "@/components/VideoListBox"
import { useEffect } from 'react'
import { HomeWrapper } from './style.js'
import { useSelector, useDispatch } from 'react-redux'
import { getVideosList } from '@/store/video.Store'

function Home () {
  const { videos, enterLoading } = useSelector(state => state.videoStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideosList())
  }, [])
  return (
    <HomeWrapper>
      <VideoListBox videos={videos} enterLoading={enterLoading} />
    </HomeWrapper>
  )
}

export default Home
