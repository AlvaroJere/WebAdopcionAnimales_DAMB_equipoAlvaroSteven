import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

@Component({
  selector: 'app-gatos',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './gatos.component.html',
  styleUrl: './gatos.component.css'
})
export class GatosComponent {
  // Aquí implementaremos la lógica para mostrar los gatos disponibles para adopción
  listaGatos = [
    { nombre: 'Mina', raza: 'Común Europeo', edad: '1 Año', imagen: 'assets/img/gato1.png' },
    { nombre: 'Lola', raza: 'Siamés', edad: '2 Años', imagen: 'assets/img/gatoSiamés.jpg' },
    { nombre: 'Nala', raza: 'Angora', edad: '6 Meses', imagen: 'assets/img/gatoAngora.jpg' }
  ];
}
