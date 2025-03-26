export type Cursos = {
  value: string
  title: string
  text: string
  bgcolor: string
  subtitle: string
  date: string
  modality: string
  timemorning: string
  about: string
  objectives?: string[]
  topics: string[]
  instructor?: string | string[]
  button: string
  avatar?: string[] | StaticImport
  price: number
  course_avatar: string
}

export interface ServerActionResponse {
  status: 200 | 500
  message: string | string[]
}
