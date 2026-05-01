import { Component, Input } from '@angular/core'; //
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [RouterModule], // Necesario para usar routerLink
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.css'
})
export class AnimalCardComponent {
  @Input() animal: any; // Sin esto, [animal]="mascota" no funciona
}