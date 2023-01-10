import { memo, useEffect, useState } from 'react'
import { HeaderMenu } from './style'
import { useLocation, NavLink } from 'react-router-dom'
import CannelData from '@/config'
import { isPathPartlyExisted } from '@/utils'
import { Tabs } from 'antd-mobile'
import classnames from 'classnames'

function ChildCannel () {
  const { pathname } = useLocation()
  const [items, setItems] = useState([])

  useEffect(() => {
    const CannelItems = () => {
      const items = CannelData.filter(item => item.children.length > 0)
      return (<Tabs activeKey={pathname}>
        {items.map(item => {
          if (pathname.includes(item.cannelname))
            return (
              item.children.map(child => {
                return (
                  <Tabs.Tab title={
                    <NavLink to={child.cannelname}
                      className={classnames({
                        active: pathname == child.cannelname || pathname.includes(child.cannelnames)
                      })}>
                      <span>{child.ctitle}</span>
                    </NavLink>}
                    key={child.cannelname}
                  />
                )
              })
            )
        })}
      </Tabs>)
    }
    setItems(CannelItems)
  }, [pathname])

  if (isPathPartlyExisted(pathname)) return
  return (
    <HeaderMenu>
      {items}
    </HeaderMenu>
  )
}

export default memo(ChildCannel)