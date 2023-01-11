import VideoListBox from '@/components/VideoListBox'
import { ListWrapper } from './style'
import { getRecommended } from '@/store/Recommend.Store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function RecommendPart () {
  const { videos, enterLoading } = useSelector(state => state.recommendStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommended())
  }, [])
  return (
    <ListWrapper>
      <VideoListBox enterLoading={enterLoading} videos={videos} />
    </ListWrapper >
  )
}

export default RecommendPart