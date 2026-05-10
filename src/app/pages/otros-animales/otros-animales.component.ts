import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalService } from '../../servicios/animal.service';
import { Animal } from '../../animal.interface';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

@Component({
  selector: 'app-otros-animales',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent], // Importamos la card para usarla
  templateUrl: './otros-animales.component.html',
  styleUrl: './otros-animales.component.css'
})
export class OtrosAnimalesComponent implements OnInit {
  listadoOtros: Animal[] = [];

  constructor(private _animalService: AnimalService) {}

  ngOnInit(): void {
    // Usamos el método que ya creaste para filtrar por 'otro'
    this._animalService.getAnimalesPorTipo('otro').subscribe(data => {
      this.listadoOtros = data;
    }, 
    // Manejo de errores en caso de que la carga falle
    error => {
      console.error('Error al cargar los animales:', error);
    });
  }
}