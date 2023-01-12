/**
 * @func 实现小于一万直接显示，大于一万保留两位小数
 * @prames num
 * @return string
 */

export const NumberFormat = (number) => {
  if (number < 10000) {
    return number
  } else {
    if (Math.round((number % 10000) / 1000) == 0) {
      return Math.round(number / 10000) + '万'
    } else {
      return (number / 10000).toFixed(1) + '万'
    }
  }
}

/**
* @author Cavan
* @func 根据 path 判断是否部分在数组中
* @param {path string}
* @return boolean 
*/
export const isPathPartlyExisted = (path) => {
  const arr = ['/home']
  // 任何情况下 结果数组的第二项都是arr里的匹配项 return true
  const pathRes = path.split('/')
  if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true
  if (path == '/') return true
  return false
}

/**
* @author Cavan
* @func 根据 path 判断是否部分在数组中
* @param {path string}
* @return boolean 
*/
export const isCannelBarExisted = (path) => {
  const arr = ['/space', '/video', '/videodetail']
  // 任何情况下 结果数组的第二项都是arr里的匹配项 return true
  const pathRes = path.split('/')
  if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true
  return false
}

/**
* @author Cavan
* @func 时间戳改变为时间
* @param {path string}
* @return boolean 
*/
export const timestampToTime = (timestamp) => {
  var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  // let h = date.getHours() + ':';
  // let m = date.getMinutes() + ':';
  // let s = date.getSeconds();
  return Y + M + D
  // + h + m + s;
}

/**
* @author Cavan
* @func 搜索历史记录功能
* @param localStorage内部数据
* @return localStorage内部数据
*/

export const addSearchHistory = (value) => {
  const date = new Date()
  const search_history = {
    value: value, isHistory: 1, timestamp: date.getTime()
  }
  const oldData =
    window.localStorage.getItem('search_history') ?
      window.localStorage.getItem('search_history') : '[]'
  const newData = JSON.parse(oldData)
  const res = newData.filter(item => item.value !== search_history.value)
  window.localStorage.setItem("search_history",
    JSON.stringify([search_history, ...res])
  )
}

export const getSearchHistory = () => {
  return JSON.parse(window.localStorage.getItem('search_history'))
}
export const removeSearchHistory = () => {
  window.localStorage.removeItem("search_history")
}


export const debounce = (func, delay) => {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}

export const getName = list => {
  let str = ""
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name
    return item
  })
}
