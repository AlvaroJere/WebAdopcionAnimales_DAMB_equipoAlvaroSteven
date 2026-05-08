import { Component, inject, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Animal } from '../../animal.interface'; // Importamos la interface para tipar mejor el input
import { AnimalService } from '../../servicios/animal.service'; // Importamos el servicio para usarlo si es necesario

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.css'
})
export class AnimalCardComponent {
  @Input() animal: Animal; // Recibimos un objeto de tipo Animal para mostrar su información

  private _animalService = inject(AnimalService); // Inyección del servicio por si necesitamos usarlo aquí

  // Método para alternar favorito, que llamará al servicio
  toggleFavorito(): void {
    this._animalService.toggleFavorito(this.animal.id);
  }
  // Método para verificar si el animal es favorito, que llamará al servicio
  esFavorito(): boolean {
    return this._animalService.esFavorito(this.animal.id);
  }



}