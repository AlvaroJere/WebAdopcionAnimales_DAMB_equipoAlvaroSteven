import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.css'
})
export class AnimalCardComponent {
  @Input() animal: any; // Sin esto, [animal]="mascota" no funciona
}