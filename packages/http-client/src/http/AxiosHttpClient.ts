import axios, { AxiosRequestConfig, Axios } from 'axios'

export default class AxiosHttpClient {
  private static _instance: Axios
  private static API_HOST = `http:localhost:3000`

  public static get axiosInstance(): Axios {
    const axiosRequestConfig: AxiosRequestConfig = {
      baseURL: this.API_HOST,
      timeout: 1000,
      // headers: { 'X-Custom-Header': 'foobar' }
    }

    return this._instance || (this._instance = axios.create(axiosRequestConfig))
  }
}
