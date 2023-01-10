import { DotLoading } from 'antd-mobile'

function Loading () {
  return (
    <div style={{ 'textAlign': 'center', 'verticalAlign': 'middle', 'marginTop': "20vh" }}>
      <span>施法加载中(　o=^•ェ•)o　┏<DotLoading /></span>
    </div>
  )
}

export default Loading