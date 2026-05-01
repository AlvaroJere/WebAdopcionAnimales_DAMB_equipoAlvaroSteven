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
  private _animalService = inject(AnimalService);
  listadoGatos: Animal[] = [];

  ngOnInit(): void {
    this.listadoGatos = this._animalService.getAnimalesPorTipo('gato');
  }
}