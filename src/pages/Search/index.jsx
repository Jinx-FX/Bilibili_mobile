import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, ShortcutWrapper } from './style'
import SearchBox from '@/components/SearchBox'
import { addSearchHistory, removeSearchHistory, getSearchHistory } from '@/utils'
import { useSelector, useDispatch } from 'react-redux'
import { getVideosList } from '@/store/video.Store'
import { getSuggestList } from '@/store/suggest.Store'

function Search () {
  const { videos } = useSelector(state => state.videoStore)
  const { suggestList } = useSelector(state => state.suggestStore)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false)
  const [history, setHistory] = useState([])

  // 控制 删除文本标志 是否显示
  const [displayStyle, setDisplayStyle] = useState({ display: 'none' })
  useEffect(() => {
    const displayStyle = history ? { display: 'block' } : { display: 'none' }
    setDisplayStyle(displayStyle)
  }, [history])

  useEffect(() => {
    setShow(true)
    dispatch(getVideosList())
    const history = getSearchHistory()
    setHistory(history)
  }, [])

  useEffect(() => {
    if (query.trim()) {
      // 去掉空字符后还有值
      dispatch(getSuggestList(query))
    }
  }, [query])

  const searchBack = useCallback(() => {
    setShow(false)
  }, [])

  const handleQuery = (q) => {
    // 给子组件防抖后得到的数据修改方法
    setQuery(q)
  }
  const linkTo = (value) => {
    addSearchHistory(value)
    navigate(`/search?keyword=${value}`)
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  }
  const removeHistory = () => {
    removeSearchHistory()
    setHistory([])
  }
  const renderHotwords = () => {
    return (
      <div className="m-search-hot">
        <h2 className="title">大家都在搜</h2>
        <div className="list">
          {
            videos.map(item => {
              return (
                <span
                  key={item.aid}
                  onClick={() => linkTo(item.author)}
                  className="hotword-item"
                >
                  {item.author}
                </span>
              )
            })
          }
        </div>
      </div>
    )
  }
  const renderHistory = () => {
    const list = history ? history : []
    return (
      <div className="m-search-history">
        <h2 className="title">历史搜索</h2>
        <ul className="history-list">
          {
            list.map(item => {
              return (
                <li key={item.value}
                  onClick={() => linkTo(item.value)}
                >
                  <i className="iconfont History"></i>
                  <a>{item.value}</a>
                </li>
              )
            })
          }
        </ul>
        <div
          className="clear-history"
          style={displayStyle}
          onClick={() => removeHistory()}
        >
          <a>清除历史记录</a>
        </div>
      </div>
    )
  }
  const renderSuggests = () => {
    // let list = hotList ? hotList : [];
    return (
      <div className="m-search-suggest">
        <ul className="suggest-list">
          {
            suggestList.map(item => {
              return (
                <li
                  key={item.aid}
                  onClick={() => linkTo(item.title)}
                >
                  {item.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  return (
    <>
      <CSSTransition
        in={show}
        timeout={300}
        appear={true}
        classNames="fly"
        unmountOnExit
        onExit={() => {
          navigate(-1)
        }}
      >
        <Container>
          <div className="search_box_wrapper">
            <SearchBox
              back={searchBack}
              newQuery={query}
              handleQuery={handleQuery}
            />
          </div>
          <ShortcutWrapper show={!query}>
            {/* props 传值给 styled-components 做样式业务 */}
            {renderHotwords()}
            {renderHistory()}
          </ShortcutWrapper>
          <ShortcutWrapper show={query}>
            {renderSuggests()}
          </ShortcutWrapper>
        </Container>
      </CSSTransition>
    </>
  )
}

export default Search
