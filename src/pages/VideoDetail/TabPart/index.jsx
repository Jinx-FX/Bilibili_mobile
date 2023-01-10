import React, { useRef, useState } from 'react'
import { Tabs, Swiper } from 'antd-mobile'
import { TabsWrapper } from './style'
import RecommendPart from '../RecommendPart'
import CommentsPart from '../CommentsPart'

const tabItems = [
  { key: 'recommendPart', title: '相关推荐' },
  { key: 'commentsPart', title: '评论 145' },
]

const TabPart = () => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <TabsWrapper>
      <div className='v-switcher__header'>
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={key => {
            const index = tabItems.findIndex(item => item.key === key)
            setActiveIndex(index)
            swiperRef.current?.swipeTo(index)
          }}
        >
          {tabItems.map(item => (
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
        <Swiper
          direction='horizontal'
          loop
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={index => {
            setActiveIndex(index)
          }}
        >
          <Swiper.Item>
            <RecommendPart />
          </Swiper.Item>
          <Swiper.Item>
            <CommentsPart />
          </Swiper.Item>
        </Swiper>
      </div>
    </TabsWrapper>
  )
}

export default TabPart 