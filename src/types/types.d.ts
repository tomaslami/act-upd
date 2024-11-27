
export interface Cursos {
  value: string,
  bgcolor: string,
  text: string,
  title: string,
  subtitle: string,
  date: string,
  modality?: string,
  timemorning: string,
  timeafternoon: string,
  about: string
  topics: string[],
  objectives?: string[],
  cv?: string,
  button: string,
}

export interface ServerActionResponse {
  status: 200 | 500
  message: string | string[]
}