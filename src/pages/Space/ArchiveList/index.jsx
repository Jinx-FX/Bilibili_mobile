import { Link } from 'react-router-dom'
import { ItemWrapper, ListWrapper } from './style'
import { NumberFormat } from '@/utils'

function ArchiveList ({ videos = [] }) {
  return (
    < ListWrapper >
      {
        videos.map(
          ({ aid, pic, title, play, video_review, bvid, length }) => (
            <ItemWrapper key={aid}>
              <Link
                to={`/video/${bvid}`}
                className="video-item-space"
              >
                <div className="cover">
                  <img data-v-be935d08="" src={pic} alt="沃玛要饭删减片段" className="bfs-img" />
                  <span className="duration">{length}</span>
                </div>
                <div className="info">
                  <h3 className="title">{title}</h3>
                  <div className="state">
                    <span className="view">
                      <i className="iconfont icon_shipin_bofangshu"></i>
                      <span>{NumberFormat(play)}</span>
                    </span>
                    <span className="danmaku">
                      <i className="iconfont icon_shipin_danmushu"></i>
                      <span>{NumberFormat(video_review)}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ItemWrapper>
          )
        )
      }
    </ListWrapper>
  )
}

export default ArchiveList