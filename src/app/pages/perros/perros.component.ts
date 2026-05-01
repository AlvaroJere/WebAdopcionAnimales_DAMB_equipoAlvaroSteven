import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.css'
})
export class PerrosComponent {
  listadoPerros = [
    { nombre: 'Thor', raza: 'Mestizo', edad: '3 Años', sexo: 'Macho', imagen: 'assets/img/perroMestizo.jpg' },
    { nombre: 'Toby', raza: 'Beagle', edad: '1 Año', sexo: 'Macho', imagen: 'assets/img/perroBeagle.jpg' },
    { nombre: 'Rex', raza: 'Pastor Alemán', edad: '5 Años', sexo: 'Macho', imagen: 'assets/img/perroPastorAleman.jpg' }
  ];
}
