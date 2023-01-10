import VideoListBox from "@/components/VideoListBox"
import { useEffect } from 'react'
import { getVideosListRequest } from '@/api/request'
import { HomeWrapper } from './style.js'
import { useSelector, useDispatch } from 'react-redux'
import { getV } from '@/store/video.Store'

function Home () {
  const { videos, enterLoading } = useSelector(state => state.videoStore)
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      let { data } = await getVideosListRequest()
      dispatch(getV([...data]))
    })()
  }, [])
  return (
    <HomeWrapper>
      <VideoListBox videos={videos} enterLoading={enterLoading} />
    </HomeWrapper>
  )
}

export default Home
