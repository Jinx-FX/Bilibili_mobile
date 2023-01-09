import VideoBox from "../VideoBox"
import { useEffect, useState } from 'react'
import { getVideos } from '@/api/request'
import { CardBox, VideoListWrapper } from './style'
import Loading from '@/components/Loading'

let enterLoading = true

function VideoListBox () {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    (async () => {
      let { data } = await getVideos()
      let videoData = data.data
      setVideos([...videoData])
      enterLoading = false
    })()
  }, [])
  return (
    <>
      {enterLoading && <Loading />}
      <VideoListWrapper>
        <CardBox className="card-box">
          {
            videos.map(video => {
              return <VideoBox className='v-card' video={video} key={video.aid} />
            })
          }
        </CardBox>
      </VideoListWrapper>
    </>
  )
}

export default VideoListBox