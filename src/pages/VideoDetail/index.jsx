import { memo } from "react"
import { VideoWrapper, AppBtnWrapper } from './style'
import videoFace from '@/assets/images/common/videoStand.jpg'
import VideoInfo from './VideoInfo'
import TabPart from "./TabPart"

function VideoDetail () {
  return (
    <div style={{ "position": "relative", "overflow": "hidden" }}>
      <VideoWrapper>
        <img src={videoFace} alt="" />
      </VideoWrapper>
      <AppBtnWrapper>
        <div className="m-video2-awaken-btn">
          <div className="icon popup"></div>
          <div className="container">
            <div className="btn-text">打开App，流畅又高清</div>
          </div>
        </div>
      </AppBtnWrapper>
      <VideoInfo />
      <TabPart />
    </div>
  )
}

export default memo(VideoDetail)