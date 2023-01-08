import RoutesIndex from '@/routes'
import { Suspense } from 'react'
import BiliHeader from '@/components/BiliHeader'
import BiliFooter from '@/components/BiliFooter'

import './App.css'


function App () {
  return (
    <div className="App">
      <BiliHeader />
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
      <BiliFooter />
    </div>

  )
}

export default App
