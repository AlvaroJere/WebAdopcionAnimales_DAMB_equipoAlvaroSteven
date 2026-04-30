import { Component, OnInit } from '@angular/core';
interface Animal {
  id: number; // Agregado para identificar cada animal
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  imagen: string;
  descripcion: string;
}
@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent implements OnInit {

  // Ahora la lista incluye 'id' y 'raza' para coincidir con tu modelo
  listaAnimales: Animal[] = [
    {
      id: 1,
      nombre: 'Rocky',
      especie: 'Perro',
      raza: 'Pastor Alemán',
      edad: 3,
      imagen: 'assets/perro.jpg',
      descripcion: 'Un perro muy juguetón y fiel.'
    },
    {
      id: 2,
      nombre: 'Luna',
      especie: 'Gato',
      raza: 'Persa',
      edad: 2,
      imagen: 'assets/gato.jpg',
      descripcion: 'Tranquila y le encanta dormir al sol.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}