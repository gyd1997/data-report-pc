import axios from 'axios'

const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000
})

service.interceptors.response.use(res =>{

}, err => {
  return Promise.reject(err)
})

export default service