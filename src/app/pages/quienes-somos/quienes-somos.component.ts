import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas como *ngFor, *ngIf, etc.

@Component({
  selector: 'app-quienes-somos',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

}
