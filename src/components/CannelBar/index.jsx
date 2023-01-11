import { Tabs, Dropdown } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import CannelData from '@/config'
import classnames from 'classnames'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { HeaderMenu, DropdownWrapper, DrawerWrapper } from './style'
import { memo, useEffect, useRef, useState } from 'react'
import ChildCannel from './ChildCannel'


function CannelBar () {
  const { pathname } = useLocation()
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const ref = useRef(null)
  useEffect(() => {
    if (CannelData.find(ele => ele.cannelname === pathname) && pathname !== '/home') {
      if (/^\/\w+$/.test(pathname) || /^\/\w+\/$/.test(pathname)) {
        let fdisk = pathname.match(/^\/[^\/]*/)
        navigate(`${fdisk}/1`)
      }
    }
    const cannelItems = () => {
      return (
        <Tabs
          activeKey={pathname.match(/^\/\w+/) === null ? '/home' : pathname.match(/^\/\w+/)}
        >
          {CannelData.map(item => {
            // NavLink 会给所选路由加个active，以便所选路由可视化
            return (<Tabs.Tab
              title={
                <NavLink
                  to={item.cannelname}
                  className={classnames({
                    active: pathname.includes(item.cannelname) ||
                      (pathname === '/' && item.cannelname === '/home')
                  })}
                >
                  <span>{item.ctitle}</span>
                </NavLink>}
              key={item.cannelname}
            />)
          })}
        </Tabs>
      )
    }
    setItems(cannelItems)
  }, [pathname])
  return (
    <>
      <HeaderMenu>
        {items}
        <DropdownWrapper>
          <Dropdown arrow={<DownOutline />} ref={ref}>
            <Dropdown.Item key='sorter' title=''>
              <DrawerWrapper>
                <div>
                  {
                    CannelData.map(
                      (item) => {
                        return (
                          <NavLink key={item.cannelname}
                            to={item.cannelname}
                            className={classnames({ active: pathname == item.cannelname })}
                            onClick={() => {
                              ref.current.close()
                            }}
                          >
                            <span>{item.ctitle}</span>
                          </NavLink>
                        )
                      }
                    )
                  }
                </div>
                <i className="iconfont general_pullup_s" onClick={() => {
                  ref.current.close()
                }}></i>
              </DrawerWrapper>
            </Dropdown.Item>
          </Dropdown>
        </DropdownWrapper>
      </HeaderMenu>
      {/* 二级路由 */}
      <ChildCannel />
    </>
  )
}

export default memo(CannelBar)