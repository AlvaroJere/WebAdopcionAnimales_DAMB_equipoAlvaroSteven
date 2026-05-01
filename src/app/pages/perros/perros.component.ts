import { Component, OnInit, inject } from '@angular/core'; // Añadimos OnInit e inject
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';
import { AnimalService } from '../../servicios/animal.service'; // Importamos el servicio
import { Animal } from '../../animal.interface'; // Importamos la interface

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.css'
})

export class PerrosComponent implements OnInit {
  private _animalService = inject(AnimalService);
  listadoPerros: Animal[] = [];

  ngOnInit(): void {
    // Uso el método que ya he creado para filtrar por 'perro'
    this.listadoPerros = this._animalService.getAnimalesPorTipo('perro');
  }
}