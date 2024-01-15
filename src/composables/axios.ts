import Axios from 'axios'

const axiosLaravelInstance = Axios.create({
  baseURL: import.meta.env.VITE_LARAVEL_API_BASE,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // Authorization: token ? `Bearer ${token}` : ''
  }
})

export default axiosLaravelInstance
