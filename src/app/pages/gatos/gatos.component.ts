import { Component, OnInit, inject } from '@angular/core'; // Añadimos OnInit e inject
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';
import { AnimalService } from '../../servicios/animal.service'; // Importamos el servicio
import { Animal } from '../../animal.interface'; // Importamos la interface

@Component({
  selector: 'app-gatos',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './gatos.component.html',
  styleUrl: './gatos.component.css'
})
export class GatosComponent implements OnInit {
  listadoGatos: Animal[] = [];

  constructor(private _animalService: AnimalService) {} // Inyectamos el servicio en el constructor

  ngOnInit(): void {
  // Uso el método que ya he creado para filtrar por 'gato'
  this._animalService.getAnimalesPorTipo('gato').subscribe(data => {
    this.listadoGatos = data;
    }, 
    // Manejo de errores en caso de que la carga falle
    error => {
      console.error('Error al cargar los animales:', error);
    });
  }
}