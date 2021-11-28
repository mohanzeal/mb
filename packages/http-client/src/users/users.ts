import { AxiosResponse } from 'axios'
import AxiosHttpClient from '../http/AxiosHttpClient'

export default class Users extends AxiosHttpClient {
  async getUsers(): Promise<AxiosResponse<any>> {
    try {
      const response = await this.axiosClient.get('/')

      if (response.ok) {
        return response.data
      } else {
        console.log('getUsers request failed', response)
      }
    } catch (error: unknown) {
      console.log(error)
    }
  }
}
