import { Component, OnInit, inject } from '@angular/core'; // Añadimos OnInit e inject
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';
import { AnimalService,Animal } from '../../servicios/animal.service'; // Importamos el servicio

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './adopcion.component.html',
  styleUrl: './adopcion.component.css'
})
export class AdopcionComponent implements OnInit {

  // Definimos la variable vacía que recibirá los datos
  listadoAnimales: Animal[] = [];

  constructor(private _animalService: AnimalService) {} // Inyectamos el servicio en el constructor

  ngOnInit(): void {
    // Cuando el componente se inicia, pedimos los datos al servicio
    this._animalService.getTodos().subscribe(data => {
      this.listadoAnimales = data;
    }, 
    // Manejo de errores en caso de que la carga falle
    error => {
      console.error('Error al cargar los animales:', error);
    });
  }
}