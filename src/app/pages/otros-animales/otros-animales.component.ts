import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../servicios/animal.service';
import { Animal } from '../../animal.interface';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

@Component({
  selector: 'app-otros-animales',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent], // Importamos la card para usarla
  templateUrl: './otros-animales.component.html',
  styleUrl: './otros-animales.component.css'
})
export class OtrosAnimalesComponent implements OnInit {
  private _animalService = inject(AnimalService); // Inyección moderna
  listadoOtros: Animal[] = [];

  ngOnInit(): void {
    // Usamos el método que ya creaste para filtrar por 'otro'
    this.listadoOtros = this._animalService.getAnimalesPorTipo('otro');
  }
}