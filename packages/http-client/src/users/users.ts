import axios from 'axios'
import AxiosHttpClient from '../http/AxiosHttpClient'

export default class Users extends AxiosHttpClient {
  getUsers(): boolean {
    return true
  }
}
