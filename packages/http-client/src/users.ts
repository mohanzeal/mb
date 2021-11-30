import axios, { AxiosResponse } from 'axios'

const getUsers = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(
      'http://localhost:8000/users'
    )

    if (response.status === 200) {
      return response.data
    }

    throw new Error('get Users failed')
  } catch (e) {
    console.log(e)
  }
}

export const userHttpClient = {
  getUsers,
}
