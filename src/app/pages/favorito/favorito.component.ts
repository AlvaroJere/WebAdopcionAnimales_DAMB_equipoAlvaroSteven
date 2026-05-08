import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../servicios/animal.service';
import { Animal } from '../../animal.interface';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

@Component({
  selector: 'app-favorito',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent], // Importamos la card para mostrar los animales favoritos
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.css'
})

// Componente para mostrar los animales favoritos del usuario
export class FavoritoComponent implements OnInit {

  private _animalService = inject(AnimalService); // Inyección del servicio para acceder a los métodos relacionados con los animales
  listaFavoritos: Animal[] = []; // Array para almacenar los animales que el usuario ha marcado como favoritos

  ngOnInit() {
    // Al iniciar el componente, obtenemos la lista de animales favoritos usando el método del servicio
    this.listaFavoritos = this._animalService.getAnimalesFavoritos();
  }
}