import { AxiosResponse } from 'axios'
import { axiosInstance } from '../config/axios'
import { IUser } from '../types/users'

const getAllUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.get('/api/v1/users')

    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    console.log(`%chttp-client:getAllUsers ${e}`, 'background:red;color:#fff')
  }
}

export default {
  getAllUsers,
}
