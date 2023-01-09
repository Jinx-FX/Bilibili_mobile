import { memo } from "react"
import classnames from 'classnames'
import LazyLoad from 'react-lazyload'
import protoTypes from 'prop-types'
import { CardWrapper } from "./style"
import { NumberFormat } from '@/utils'
import { Link } from 'react-router-dom'

function VideoBox ({ video }) {
  const { bvid, pic, title, play, video_review } = video
  return (
    <>
      <CardWrapper>
        <Link
          to={`/video/${bvid}`}
          className='v-card'
        >
          <div className="card">
            <picture>
              <LazyLoad
                // 占位图片
                placeholder={<img
                  className='m-bfs-pic pic'
                />}>
                <img src={pic}
                  // 如何实现 onError 事件触发,img 添加 notfond 属性
                  className={classnames("m-bfs-pic pic", { notfond: !pic })} />
              </LazyLoad>
            </picture>
            <div className="count">
              <span>
                {/* 播放量 */}
                <i className="iconfont icon_shipin_bofangshu"></i>
                {NumberFormat(play)}
              </span>
              <span>
                {/* 弹幕 */}
                <i className="iconfont icon_shipin_danmushu"></i>
                {NumberFormat(video_review)}
              </span>
            </div>
          </div>
          {/* 标题 */}
          <p className="title">{title}</p>
        </Link >
      </CardWrapper>
    </>
  )
}

VideoBox.protoTypes = {
  video: protoTypes.array.isRequired
}

export default memo(VideoBox)