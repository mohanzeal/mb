import { AxiosResponse } from 'axios'
import { axiosInstance } from '../config/axios'
import { IUser } from '../types/users'

const getUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.get('/users')

    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    console.log(`%chttp-client:getUsers ${e}`, 'background:red;color:#fff')
  }
}

export default {
  getUsers,
}
