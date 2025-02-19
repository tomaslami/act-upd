export type Cursos = {
  value: string;
  title: string;
  text: string;
  bgcolor: string;
  subtitle: string;
  date: string;
  modality: string;
  timemorning: string;
  about: string;
  objectives?: string[];
  topics: string[];
  instructor?: string | string[];
  button: string;
  recommendations?: string;
  coordination?: string;
  attendance?: string;
  avatar?: string | StaticImport;
};

export interface ServerActionResponse {
  status: 200 | 500;
  message: string | string[];
}