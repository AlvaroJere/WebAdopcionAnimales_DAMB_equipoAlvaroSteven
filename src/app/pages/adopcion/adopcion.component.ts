import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal.model';

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
    // Aquí es donde en la Semana 3 conectarás el servicio JSON 
  }
}