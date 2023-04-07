import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { BASR_URL, TIMEOUT } from './config'
export * from './config'

class XYRequest {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: BASR_URL,
      timeout: TIMEOUT
    })

    this.instance.interceptors.request.use((config) => {
      return config
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }

  request<T>(config: AxiosRequestConfig) {
    return this.instance.request<T>(config)
  }

  get<T>(url: string, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'GET',
      url,
      ...options
    })
  }

  post<T>(url: string, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'POST',
      url,
      ...options
    })
  }

  put<T>(url: string, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'PUT',
      url,
      ...options
    })
  }

  delete<T>(url: string, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'DELETE',
      url,
      ...options
    })
  }
}

const request = new XYRequest()

export default request
