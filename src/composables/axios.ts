import Axios from 'axios'

export const axiosLaravelInstance = Axios.create({
  baseURL: import.meta.env.VITE_LARAVEL_API_BASE,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // Authorization: token ? `Bearer ${token}` : ''
  }
})

export const axiosSymfonyInstance = Axios.create({
  baseURL: import.meta.env.VITE_SYMFONY_API_BASE,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    codeUnique: 'useradmin'
    // Authorization: token ? `Bearer ${token}` : ''
  }
})
