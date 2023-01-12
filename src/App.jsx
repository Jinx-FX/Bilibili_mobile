import RoutesIndex from '@/routes'
import { Suspense, useEffect, useState } from 'react'
import BiliHeader from '@/components/BiliHeader'
import BiliFooter from '@/components/BiliFooter'
import { useLocation } from 'react-router-dom'
import './App.css'

function App () {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (pathname === '/infosearch')
      setLoading(false)
    else
      setLoading(true)
  }, [pathname])
  return (
    <div className="App">
      {loading && <BiliHeader />}
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
            }}>
            loading...
          </div>
        }>
        <RoutesIndex />
      </Suspense>
      {loading && <BiliFooter />}
    </div>

  )
}

export default App
