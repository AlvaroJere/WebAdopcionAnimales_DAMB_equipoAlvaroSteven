import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

@Component({
  selector: 'app-como-adoptar',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './como-adoptar.component.html',
  styleUrl: './como-adoptar.component.css'
})
export class ComoAdoptarComponent {
  listadoAnimales = [
  { nombre: 'Thor', raza: 'Mestizo', edad: '3 Años', sexo: 'Macho', imagen: 'img/perroMestizo.jpg' },
  { nombre: 'Mina', raza: 'Común Europeo', edad: '1 Año', sexo: 'Hembra', imagen: 'img/gato1.png' },
  { nombre: 'Lola', raza: 'Siamés', edad: '2 Años', sexo: 'Hembra', imagen: 'img/gatoSiamés.jpg' },
  { nombre: 'Copito', raza: 'Belier', edad: '2 Años', sexo: 'Macho', imagen: 'img/conejo1.jpg' },
  { nombre: 'Toby', raza: 'Beagle', edad: '1 Año', sexo: 'Macho', imagen: 'img/perroBeagle.jpg' },
  { nombre: 'Rex', raza: 'Pastor Alemán', edad: '5 Años', sexo: 'Macho', imagen: 'img/perroPastorAleman.jpg' },
  { nombre: 'Nala', raza: 'Angora', edad: '6 Meses', sexo: 'Hembra', imagen: 'img/gatoAngora.jpg' },
  { nombre: 'Galleta', raza: 'Abisinia', edad: '6 Meses', sexo: 'Hembra', imagen: 'img/cobaya1.jpg' },
  { nombre: 'Olivia', raza: 'Tortuga de agua', edad: '10 Años', sexo: 'Hembra', imagen: 'img/tortuga1.jpg' },
  { nombre: 'Blue', raza: 'Periquito común', edad: '1 Año', sexo: 'Macho', imagen: 'img/ave1.jpg' },
  { nombre: 'Bigotes', raza: 'Ruso', edad: '4 Meses', sexo: 'Macho', imagen: 'img/hamster1.webp' },
  { nombre: 'Púas', raza: 'Erizo Africano', edad: '1 Año', sexo: 'Macho', imagen: 'img/erizo1.jpg' }
  ];
}
