import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

interface Animal {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-adopcion',
  standalone: true, // Indica que el componente se gestiona solo
  imports: [CommonModule, AnimalCardComponent], // Aquí "activas" las herramientas que necesitas
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent implements OnInit {

  listaAnimales: Animal[] = [
    {
      id: 1,
      nombre: 'Rocky',
      especie: 'Perro',
      raza: 'Pastor Alemán',
      edad: 3,
      imagen: '/assets/perro.jpg',
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

  ngOnInit(): void { }
}