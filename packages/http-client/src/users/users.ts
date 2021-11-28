import axios, { Axios } from 'axios'
import AxiosHttpClient from './http/AxiosHttpClient'
export default class Users {
  axiosClient: Axios
  constructor() {
    this.axiosClient = AxiosHttpClient.axiosInstance()
  }

  async getUsers(): Promise<any> {
    try {
      const response = await this.axiosClient.get('users')
      if (response.ok) {
        return response.data
      }
    } catch (error) {
      console.log('api failed', 'getUsers Failed with error', error)
    }
  }
}
