import axios from 'axios'

export const axiosInstance = () => {
  return axios.create({
    baseURL: 'https://king-prawn-app-ovupz.ondigitalocean.app/api/',
    timeout: 5000,
  })
}

export const fetchData = async (route) => {
  try {
    const { data } = await axiosInstance().get(route)
    return data.data
  } catch (error) {
    //error -> for debugging
    return null
  }
}

export const postData = async ({ newData, apiUrl }) => {
  try {
    const { data } = await axiosInstance().post(apiUrl, newData)
    return data.data
  } catch (error) {
    //error -> for debugging
    return null
  }
}
