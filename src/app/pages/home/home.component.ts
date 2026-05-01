import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  animalesDestacados = [
    { nombre: 'Thor', raza: 'Mestizo', edad: '3 Años', imagen: 'img/perroMestizo.jpg' },
    { nombre: 'Mina', raza: 'Común Europeo', edad: '1 Año', imagen: 'img/gato1.png' },
    { nombre: 'Bigotes', raza: 'Ruso', edad: '4 Meses', imagen: 'img/hamster1.webp' },
    { nombre: 'Púas', raza: 'Erizo Africano', edad: '1 Año', imagen: 'img/erizo1.jpg' }
  ];
}