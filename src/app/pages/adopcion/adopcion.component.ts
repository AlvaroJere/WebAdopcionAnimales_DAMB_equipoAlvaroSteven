import { Component, OnInit, inject } from '@angular/core'; // Añadimos OnInit e inject
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';
import { AnimalService } from '../../servicios/animal.service'; // Importamos el servicio
import { Animal } from '../../animal.interface'; // Importamos la interface

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './adopcion.component.html',
  styleUrl: './adopcion.component.css'
})
export class AdopcionComponent implements OnInit {
  
  // Inyectamos el servicio al estilo Angular 19
  private _animalService = inject(AnimalService);

  // Definimos la variable vacía que recibirá los datos
  listadoAnimales: Animal[] = [];

  ngOnInit(): void {

    // Cuando el componente se inicia, pedimos los datos al servicio
    this.listadoAnimales = this._animalService.getTodos();
  }
}