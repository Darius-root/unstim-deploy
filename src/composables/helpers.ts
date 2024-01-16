export interface ResponseType<T> {
  success: boolean
  message: string
  body: T 
}

export interface Role {
  id: number
  name: string
  created_at: string
  updated_at: string
}
