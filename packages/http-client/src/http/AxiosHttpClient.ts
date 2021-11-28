import axios, { AxiosRequestConfig, Axios } from 'axios'

export default class AxiosHttpClient {
  readonly API_HOST = `http:localhost:3000`
  axiosClient: Axios

  constructor() {
    this.axiosClient = this.createAxiosInstance()
  }

  createAxiosInstance(): Axios {
    const axiosRequestConfig: AxiosRequestConfig = {
      baseURL: this.API_HOST,
      timeout: 1000,
      // headers: { 'X-Custom-Header': 'foobar' }
    }

    return axios.create(axiosRequestConfig)
  }
}
