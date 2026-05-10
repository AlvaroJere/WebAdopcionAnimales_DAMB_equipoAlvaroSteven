import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para futuras implementaciones de API
import { Observable, map } from 'rxjs'; // Importa Observable y map para manejar datos de API

export interface Animal {
  id: number;
  nombre: string;
  raza: string;
  edad: string;
  sexo: string;
  imagen: string;
  tipo: 'perro' | 'gato' | 'otro';
  descripcion: string;
  precioAdopcion?: number; // Agrega un campo opcional para el precio de adopción
}


@Injectable({ providedIn: 'root' })
export class AnimalService {

// Ruta al archivo JSON con los datos de los animales
  private jsonUrl = 'data/mascotas.json'; 

// Aquí podrías agregar métodos para gestionar favoritos, adopciones, etc.
  private _favoritos: number[] = [];

  constructor(private http: HttpClient) {

    // Cargar favoritos desde localStorage al iniciar el servicio
    const favoritosGuardados = localStorage.getItem('favoritos_animales');
    if (favoritosGuardados) {
      this._favoritos = JSON.parse(favoritosGuardados);
    }
  }

  // Devuelve todo el array
  getTodos(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.jsonUrl);
  }

  // Filtra por tipo (perro/gato/otro)
  getAnimalesPorTipo(tipo: 'perro' | 'gato' | 'otro'): Observable<Animal[]> {
    return this.getTodos().pipe(
      map(animales => animales.filter(a => a.tipo === tipo))
    );
  }

  // Busca uno solo por ID (Esto lo usarás Steven en la Ficha de Detalle)
  getAnimalPorId(id: number): Observable<Animal | undefined> {
    return this.getTodos().pipe(
      map(animales => animales.find(a => a.id === id))
    );
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
  getAnimalesFavoritos(): Observable<Animal[]>  {
    return this.getTodos().pipe(
      map(animales => animales.filter(a => this._favoritos.includes(a.id)))
    ); // Devuelve solo los animales cuyo ID está en favoritos
  }
}