import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Animation = lazy(() => import('@/pages/Animation'))
const Game = lazy(() => import('@/pages/Game'))

export default function RoutesIndex () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  )
}
