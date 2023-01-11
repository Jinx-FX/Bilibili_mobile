import { Wrapper } from './style'
import { Outlet } from 'react-router-dom'

function Animation () {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper >
  )
}

export default Animation
