/* 封装axios用于发送请求 */
import axios from 'axios'
import { getToken, delToken } from './storage'
import { Toast } from 'vant'
// 创建一个新的axios实例
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 500000
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    Toast.setDefaultOptions({ duration: 2000 })
    Toast.loading({
      message: '加载中...',
      forbidClick: false
    })
    const token = getToken()
    if (token) {
      config.headers.Authorization = getToken()
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    Toast.setDefaultOptions({ duration: 1000 })
    return response.data
  },
  function (error) {
    if (error.response) {
      // 有错误响应, 提示错误提示
      if (error.response.status === 401) {
        delToken()
        this.$router.push('/login')
      } else {
        Toast('请求超时')
      }
    }
    // 对响应错误做点什么
    Toast('请求超时')
    return Promise.reject(error)
  }
)

export default request
