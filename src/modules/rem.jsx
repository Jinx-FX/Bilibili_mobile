// 1rem 的大小设置
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px"

//Fires when the user resets a form.
// 转屏自适应
window.onresize = function () {
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 3.75 + "px"
}