import { useEffect, useState, memo } from "react"
import DynamicList from "./DynamicList"
import ArchiveList from "./ArchiveList"
import { Ellipsis } from 'antd-mobile'
import Loading from "@/components/Loading"
import classNames from "classnames"
import { SpaceWrapper, SpaceInfo, TabsBar, ListWrapper } from './style'
import { useDispatch, useSelector } from "react-redux"
import { getArchiveList } from '@/store/archive.Store'

function Space () {
  const { videos, enterLoading } = useSelector(state => state.archiveStore)
  const dispatch = useDispatch()
  const [selected, SetSelected] = useState(true)
  useEffect(() => {
    dispatch(getArchiveList())
  }, [])
  return (
    <SpaceWrapper>
      <SpaceInfo>
        <div className="banner"></div>
        <div className="part1">
          <div className="face">
            <img src="//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg" className="bfs-img avatar" data-v-be935d08="" />
          </div>
          <div className="relation">
            <div className="count">
              <span className="fans">
                <span className="num">678</span>
                <br />
                <span className="type">粉丝</span>
              </span>
              <span className="split"></span>
              <span className="follow">
                <span className="num">168</span><br />
                <span className="type">关注</span>
              </span>
              <span className="split"></span>
              <span className="likes">
                <span className="num">1.1万</span><br />
                <span className="type">获赞</span>
              </span>
            </div>
            <div className="follow-btn">
              <button className="white">编辑资料</button>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="base">
            <span className="name">CAVAN咔叽</span>
            <span className="gender"></span>
            <span className="level">
              <i className="iconfont ic_userlevel_6"
              // style="color:#FF0000;"
              ></i>
            </span>
          </div>
          {/* 实现 展开 收起 组件 */}
          <div className="desc">
            <Ellipsis
              className="content"
              direction='end'
              content='Something New | Something Exciting | Something Out of Imagination'
              expandText='展开'
              collapseText='收起'
            />
          </div>
          {/* 如果没有 */}
          {/* <div className="desc">
            <span className="content">这个人很神秘，什么都没有写</span>
            <a className="spread-btn">展开</a>
          </div>
          <div className="clearfloat">
          </div> */}
        </div>
      </SpaceInfo>
      <TabsBar>
        <span className={classNames({ on: !selected })} onClick={() => SetSelected(!selected)}>动态</span>
        <span className={classNames({ on: selected })} onClick={() => SetSelected(!selected)}>视频</span>
      </TabsBar>
      {enterLoading && <Loading />}
      <ListWrapper>
        {!selected && <DynamicList />}
        {selected && <ArchiveList videos={videos} />}
      </ListWrapper>
    </SpaceWrapper>
  )
}

export default memo(Space)
