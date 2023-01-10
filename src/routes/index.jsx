import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Animation = lazy(() => import('@/pages/Animation'))
const MMD = lazy(() => import('@/pages/Animation/MMD'))
const MAD = lazy(() => import('@/pages/Animation/MAD'))
const Recommend = lazy(() => import('@/pages/Animation/Recommend'))
const Search = lazy(() => import('@/pages/Search'))
const Space = lazy(() => import('@/pages/Space'))
const VideoDetail = lazy(() => import('@/pages/VideoDetail'))

export default function RoutesIndex () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animation" element={<Animation />} >
          <Route path='/animation/1' element={<Recommend />} />
          <Route path='/animation/2' element={<MAD />} />
          <Route path='/animation/3' element={<MMD />} />
        </Route>
        {/* 如果 path="/search" 路由会跳转到一个单独界面，无论是否被包裹*/}
        <Route path="/infosearch" element={<Search />} />
        <Route path="/space" element={<Space />} />
        <Route path='/video' element={<VideoDetail />} >
          <Route path={'/video/:id'} element={<VideoDetail />} />
        </Route>
      </Routes>
    </>
  )
}
