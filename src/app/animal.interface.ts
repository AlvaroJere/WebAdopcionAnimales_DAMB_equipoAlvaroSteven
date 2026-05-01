export interface Animal {
  id: number;
  nombre: string;
  raza: string;
  edad: string;
  sexo: string;
  imagen: string;
  tipo: 'perro' | 'gato' | 'otro';
  descripcion: string;
}