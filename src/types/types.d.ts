export type Cursos = {
  value: string;
  title: string;
  text: string;
  bgcolor: string;
  subtitle: string;
  date: string;
  modality: string;
  timemorning: string;
  timeafternoon: string;
  about: string;
  objectives?: string[];
  topics: string[];
  includes?: string;
  instructor?: string | string[];
  button: string;
  contact?: {
    email: string;
    whatsapp: string;
  };
  recommendations?: string;
  coordination?: string;
  registration_note?: string;
  price?: string;
  payment_methods?: string[];
  attendance?: string;
  cv?: string;
  avatar?: string | StaticImport;
};

export interface ServerActionResponse {
  status: 200 | 500;
  message: string | string[];
}