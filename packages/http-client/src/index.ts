import AxiosHttpClient from './http/AxiosHttpClient'
import Users from './users/users'

export default {
  axiosHttpClient: AxiosHttpClient.axiosInstance(),
  users: new Users(),
}
