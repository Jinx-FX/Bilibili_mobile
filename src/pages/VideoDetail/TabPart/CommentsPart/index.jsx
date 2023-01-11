import { ListWrapper } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCommentsList } from '@/store/comment.Store'
import CommentItem from '@/components/CommentItem'

function CommentsPart () {
  const { commentList } = useSelector(state => state.commentStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommentsList())
  }, [])

  return (
    <ListWrapper>
      <div className="list">
        <ul>
          {
            commentList.map(comment => {
              return (
                <CommentItem
                  comment={comment}
                  key={comment.rpid}
                />
              )
            })
          }
        </ul>
      </div>
    </ListWrapper>
  )
}

export default CommentsPart