import { InfoWrapper } from './style'
import { Collapse } from 'antd-mobile'
import { useState } from 'react'

function VideoInfo () {
  const [display, setDisplay] = useState(true)
  const change = () => {
    setDisplay(!display)
  }
  let show = display ? { "display": "" } : { "display": "none" }
  return (
    <InfoWrapper>
      <div className="m-video-info-new">
        <Collapse >
          <Collapse.Panel onClick={change} key='1' title=
            {
              <div className="left">
                {/* 标签 */}
                <span className="label">
                  <span>活动</span>
                </span>
                {/* 标题 */}
                <h1 className="has-activity">沃玛要饭删减片段</h1>
              </div>
            }>
            <div className="fold-container">
              <div className="up">
                <div className="face">
                  <a className="avatar" href='/space'>
                    <img src="//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg@160w_160h_1c.png" className="bfs-img face" data-v-be935d08="" />
                  </a>
                  <div className="info">
                    {/* 作者 */}
                    <a className="name" href='/space'>CAVAN咔叽</a>
                    {/* 粉丝 */}
                    <p className="fans">673粉丝</p>
                  </div>
                </div>
                <div className="follow">
                  <div className="launch-app-btn">
                    <span className="follow-btn">
                      <i className="iconfont ic_add1"></i>
                      {/* 关注数 */}
                      <span> 关注</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="data">
                <span className="view">4万观看</span>
                <span className="danmaku">187弹幕</span>
                <span className="time">2020-03-12</span>
                <span className="bvid">BV1WE411L7dC</span>
              </div>
              <p className="copyright">
                <i className="iconfont Blocked"></i>
                <span>未经作者授权禁止转载</span>
              </p>
              {/* 简介 */}
              <p className="desc">
                打算做个“UP主编年史”系列，从Warma传开始！ <br />
                想看的可以三连关注一下！！<br />
                也希望一大佬合作！！！
              </p>
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
      <div className="m-video2-toolbar">
        <div className="left" style={show}>
          <a className="avatar" href='/space'>
            <img src="//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg@80w_80h_1c.png" className="bfs-img face" data-v-be935d08="" />
          </a>
          {/* 作者 */}
          <a className="name" href='/space'>CAVAN咔叽</a>

        </div>
        <div className="right">
          <div className="launch-app-btn">
            <span className="toolbar-item">
              {/* 点赞 */}
              <i className="iconfont dianzan"></i>
            </span>
          </div>
          <div className="launch-app-btn">
            <span className="toolbar-item">
              {/* 收藏 */}
              <i className="iconfont icon_fav"></i>
            </span>
          </div>
          <div className="launch-app-btn">
            <span className="toolbar-item">
              {/* 分享 */}
              <i className="iconfont icon_share"></i>
            </span>
          </div>
          <div className="launch-app-btn">
            <span className="toolbar-item">
              {/* 缓存 */}
              <i className="iconfont huancun"></i>
            </span>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </InfoWrapper>
  )
}

export default VideoInfo