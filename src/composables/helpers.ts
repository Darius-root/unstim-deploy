export interface ResponseType<T> {
  success: boolean
  message: string
  body: T[]
}

export interface Role {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface PlanStrategique {
  id: number
  name: string
  start_date: string
  end_date: string
  is_active: boolean
  company: string
  startDate: string
  endDate: string
  isActive: boolean
}
