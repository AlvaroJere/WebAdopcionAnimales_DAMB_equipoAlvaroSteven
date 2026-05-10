import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService, Animal } from '../../servicios/animal.service';
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

  listaFavoritos: Animal[] = []; // Array para almacenar los animales que el usuario ha marcado como favoritos

  constructor(private _animalService: AnimalService) {} // Inyectamos el servicio en el constructor

  ngOnInit() {
    // Al iniciar el componente, obtenemos la lista de animales favoritos usando el método del servicio
    this._animalService.getAnimalesFavoritos().subscribe(data => {
      this.listaFavoritos = data;
    }, 
    // Manejo de errores en caso de que la carga falle
    error => {
      console.error('Error al cargar los animales favoritos:', error);
    });
  }
}