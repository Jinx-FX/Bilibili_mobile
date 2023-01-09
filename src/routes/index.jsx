import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Animation = lazy(() => import('@/pages/Animation'))
const Game = lazy(() => import('@/pages/Game'))
const Search = lazy(() => import('@/pages/Search'))
const Space = lazy(() => import('@/pages/Space'))

export default function RoutesIndex () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/game" element={<Game />} />
        {/* 如果 path="/search" 路由会跳转到一个单独界面，无论是否被包裹*/}
        <Route path="/infosearch" element={<Search />} />
        <Route path="/space" element={<Space />} />
      </Routes>
    </>
  )
}
