// 封装请求工具
// 对于axios的二次 封装
// 配置拦截器以及其他

import axios from 'axios'
// 拦截器及其操作
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 配置公共请求头地址
// 请求拦截器的开发
axios.interceptors.request.use(function (config) {
  // 成功执行时  第一个参数是config config就是所有的axios的请求信息
  // 在第一个函数中 需要将配置进行返回 会作为 请求参数进行请求
  //   在返回之后 就是我们统一 注入token的最佳时间
  const token = localStorage.getItem('user-token')// 从兜里拿钥匙也就是从缓存中取token
  config.headers.Authorization = `Bearer ${token}`// 统一注入token
  return config
}, function (error) {
  // 失败时 会有一个错误 直接reject错误即可
  // 失败时执行第二个 axios是一个支持promise 如果失败了 我们应该直接reject reject会直接进入待axios的catch中的
  return Promise.reject(error)
})

// 响应拦截器的开发
axios.interceptors.response.use(function (response) {
  // 回调函数第一个参数 是响应体
  // 在拦截器中 需要将数据返回 将数据解构
  return response.data ? response.data : {} // 有的接口没有任何的响应数据
}, function () {
  // 失败的时候执行
})

export default axios
