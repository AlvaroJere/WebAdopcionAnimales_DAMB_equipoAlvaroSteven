import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../components/animal-card/animal-card.component';

@Component({
  selector: 'app-otros-animales',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './otros-animales.component.html',
  styleUrl: './otros-animales.component.css'
})
export class OtrosAnimalesComponent {
  otrosAnimales = [
    { nombre: 'Copito', raza: 'Belier', edad: '2 Años', imagen: 'assets/img/conejo1.jpg' },
    { nombre: 'Galleta', raza: 'Abisinia', edad: '6 Meses', imagen: 'assets/img/cobaya1.jpg' },
    { nombre: 'Olivia', raza: 'Tortuga de agua', edad: '10 Años', imagen: 'assets/img/tortuga1.jpg' },
    { nombre: 'Blue', raza: 'Periquito común', edad: '1 Año', imagen: 'assets/img/ave1.jpg' },
    { nombre: 'Bigotes', raza: 'Ruso', edad: '4 Meses', imagen: 'assets/img/hamster1.webp' },
    { nombre: 'Púas', raza: 'Erizo Africano', edad: '1 Año', imagen: 'assets/img/erizo1.jpg' }
  ];
}
