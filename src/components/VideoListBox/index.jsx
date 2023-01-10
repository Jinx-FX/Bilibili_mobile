import VideoBox from "../VideoBox"
import { CardBox, VideoListWrapper } from './style'
import Loading from '@/components/Loading'

function VideoListBox ({ videos = [], enterLoading = true }) {
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