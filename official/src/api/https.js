// import { getItem } from '@/utils/auth'
import { Message } from 'element-ui'
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://dianyi.zz0510.top' : 'http://dianyi.zz0510.top'
axios.defaults.timeout = 10000
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'

const https = axios.create({})

https.interceptors.request.use(
  config => {
    // console.log(getItem('userInfo'));
    // const token = getItem('userInfo') || ''
    const token =''
    if (token) config.headers.token = token.token
    return config
  },
  error => {
    return Promise.reject(error)
  })

https.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      // Message({
      //   message: response.data.message,
      //   type: 'success'
      // })
      return Promise.resolve(response.data)

    } else {
      // Message({
      //   message: response.data.message,
      //   type: 'error'
      // })
      // return Promise.reject(response)
    }
  },
  error => {
    Message({
      message: '连接错误',
      type: 'error'
    })
    console.log(error)
    return Promise.reject(error)
  })

export default https
