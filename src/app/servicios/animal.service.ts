import { Injectable } from '@angular/core';
import { Animal } from '../animal.interface';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private listaAnimales: Animal[] = [
    { id: 1, nombre: 'Thor', raza: 'Mestizo', edad: '3 Años', sexo: 'Macho', imagen: 'img/perroMestizo.jpg', tipo: 'perro', descripcion: 'Thor es un compañero leal...' },
    { id: 2, nombre: 'Mina', raza: 'Común', edad: '1 Año', sexo: 'Hembra', imagen: 'img/gato1.png', tipo: 'gato', descripcion: 'Mina es muy cariñosa...' },
    { id: 3, nombre: 'Lola', raza: 'Siamés', edad: '2 Años', sexo: 'Hembra', imagen: 'img/gatoSiamés.jpg', tipo: 'gato', descripcion: 'Lola es juguetona...' },
    { id: 4, nombre: 'Copito', raza: 'Belier', edad: '2 Años', sexo: 'Macho', imagen: 'img/conejo1.jpg', tipo: 'otro', descripcion: 'Copito es un conejo muy tranquilo...' },
    { id: 5, nombre: 'Toby', raza: 'Beagle', edad: '1 Año', sexo: 'Macho', imagen: 'img/perroBeagle.jpg', tipo: 'perro', descripcion: 'Toby es un perro lleno de energía...' },
    { id: 6, nombre: 'Rex', raza: 'Pastor Alemán', edad: '5 Años', sexo: 'Macho', imagen: 'img/perroPastorAleman.jpg', tipo: 'perro', descripcion: 'Rex es un perro muy inteligente...' },
    { id: 7, nombre: 'Nala', raza: 'Angora', edad: '6 Meses', sexo: 'Hembra', imagen: 'img/gatoAngora.jpg', tipo: 'gato', descripcion: 'Nala es una gatita muy dulce...' },
    { id: 8, nombre: 'Galleta', raza: 'Abisinia', edad: '6 Meses', sexo: 'Hembra', imagen: 'img/cobaya1.jpg', tipo: 'otro', descripcion: 'Galleta es una cobaya muy sociable...' },
    { id: 9, nombre: 'Olivia', raza: 'Tortuga de agua', edad: '10 Años', sexo: 'Hembra', imagen: 'img/tortuga1.jpg', tipo: 'otro', descripcion: 'Olivia es una tortuga muy tranquila...' },
    { id: 10, nombre: 'Blue', raza: 'Periquito común', edad: '1 Año', sexo: 'Macho', imagen: 'img/ave1.jpg', tipo: 'otro', descripcion: 'Blue es un periquito muy alegre...' },
    { id: 11, nombre: 'Bigotes', raza: 'Ruso', edad: '4 Meses', sexo: 'Macho', imagen: 'img/hamster1.webp', tipo: 'otro', descripcion: 'Bigotes es un hámster muy curioso...' },
    { id: 12, nombre: 'Púas', raza: 'Erizo Africano', edad: '1 Año', sexo: 'Macho', imagen: 'img/erizo1.jpg', tipo: 'otro', descripcion: 'Púas es un erizo muy simpático...' }
  ];

  // Aquí podrías agregar métodos para gestionar favoritos, adopciones, etc.
  private _favoritos: number[] = [];

  constructor() {

    // Cargar favoritos desde localStorage al iniciar el servicio
    const favoritosGuardados = localStorage.getItem('favoritos_animales');
    if (favoritosGuardados) {
      this._favoritos = JSON.parse(favoritosGuardados);
    }
  }

  // Devuelve todo el array
  getTodos(): Animal[] {
    return this.listaAnimales;
  }

  // Filtra por tipo (perro/gato/otro)
  getAnimalesPorTipo(tipo: 'perro' | 'gato' | 'otro'): Animal[] {
    return this.listaAnimales.filter(a => a.tipo === tipo);
  }

  // Busca uno solo por ID (Esto lo usarás Steven en la Ficha de Detalle)
  getAnimalPorId(id: number): Animal | undefined {
    return this.listaAnimales.find(a => a.id === id);
  }

  // Métodos para gestionar favoritos
  getFavoritosIds(): number[] {
    return this._favoritos;
  }

  // Método para alternar favoritos (agregar o quitar)
  toggleFavorito(id: number): void {

    // Si el ID ya está en favoritos, lo quitamos; si no, lo agregamos
    if (this._favoritos.includes(id)) {
      this._favoritos = this._favoritos.filter(favId => favId !== id); // Elimina el ID del array
    } else {
      this._favoritos.push(id); // Agrega el ID al array
    }
    localStorage.setItem('favoritos_animales', JSON.stringify(this._favoritos)); // Guardamos el array actualizado en localStorage
  }

  // Método para verificar si un animal es favorito
  esFavorito(id: number): boolean {
    return this._favoritos.includes(id); // Devuelve true si el ID está en favoritos, false si no
  }

  // Método para obtener los animales favoritos
  getAnimalesFavoritos(): Animal[] {
    return this.listaAnimales.filter(a => this._favoritos.includes(a.id)); // Devuelve solo los animales cuyo ID está en favoritos
  }
}