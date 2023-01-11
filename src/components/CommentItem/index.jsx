import { CommentWrapper } from './style'
import { NumberFormat, timestampToTime } from '@/utils'
import { commentChangeLike } from '@/store/comment.Store'
import { useDispatch } from 'react-redux'

function CommentItem ({ comment }) {
  const dispatch = useDispatch()
  const {
    rpid,
    member: { uname, avatar },
    like,
    replies,
    reply_control: { sub_reply_entry_text },
    content: { message },
    ctime,
    action
  } = comment

  return (
    <CommentWrapper action={action} data-rpid={rpid} className="comment-item" scrollshow="true">
      <div className="launch-app-btn comment-item-openapp">
        <div className="head">
          <img data-v-be935d08="" src={avatar} className="bfs-img avatar" />
          <img src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/icon_Certification_official.png" className="official" />
        </div>
        <div className="detail">
          <div className="user">
            <span className="name">{uname}</span>
            <span className="like"
              onClick={() => dispatch(commentChangeLike(rpid))}
            >
              <i className="iconfont like2" />

              <span> {NumberFormat(like)}</span>
            </span>
          </div>
          <p className="time">{timestampToTime(ctime)}</p>
          <p className="content">{message}</p>
        </div>
        <div className="launch-app-btn m-subpreview-openapp">
          <div className="m-sub-reply-preview">
            {
              replies.map(reply => {
                const { rpid, member: { uname }, content: { message } } = reply
                return (
                  <p className="sub-preview-item" key={rpid}>
                    <a className="name">{uname}：</a>
                    <span className="content">{message}</span>
                  </p>
                )
              })
            }
            <a className="show-more">{sub_reply_entry_text}<i className="iconfont gengduo1"></i>
            </a>
          </div>
        </div>
      </div>
    </CommentWrapper>
  )
}

export default CommentItem