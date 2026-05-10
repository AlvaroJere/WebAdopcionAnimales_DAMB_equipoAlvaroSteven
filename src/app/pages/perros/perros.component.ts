import { Component, OnInit, inject } from '@angular/core'; // Añadimos OnInit e inject
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';
import { AnimalService, Animal } from '../../servicios/animal.service'; // Importamos el servicio

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.css'
})

export class PerrosComponent implements OnInit {

  listadoPerros: Animal[] = [];

  constructor(private _animalService: AnimalService) {} // Inyectamos el servicio en el constructor

  ngOnInit(): void {
  // Llamamos al servicio y nos suscribimos para recibir los datos
  this._animalService.getAnimalesPorTipo('perro').subscribe(data => {
    this.listadoPerros = data;
    }, 
    // Manejo de errores en caso de que la carga falle
    error => {
      console.error('Error al cargar los animales:', error);
    });
  }
}