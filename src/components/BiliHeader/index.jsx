import { memo } from 'react'
import { HeaderWrapper, HeaderNavBar } from './style'
import { Link, useLocation } from 'react-router-dom'
import download from '@/assets/images/common/navOpenApp.png'
import face from '@/assets/images/common/face.png'

function BiliHeader () {
  const { pathname } = useLocation()
  if (pathname == '/search') {
    return
  }

  return (
    <HeaderWrapper>
      <HeaderNavBar className='m-navbar'>
        <Link to="/home" className="logo"><i className="iconfont Navbar_logo"></i></Link>
        <div className="right">
          <Link to="/search" className="search">
            <i className="iconfont ic_search_tab">
            </i>
          </Link>
          <Link to="/space" className="face">
            <img className="bfs-img" src={face} />
          </Link>
          <div className="launch-app-btn m-nav-openapp">
            <img src={download} className="nav-open-app-img" />
          </div>
        </div>
      </HeaderNavBar>
      {/* <CannelBar /> */}
    </HeaderWrapper>
  )
}

export default memo(BiliHeader)