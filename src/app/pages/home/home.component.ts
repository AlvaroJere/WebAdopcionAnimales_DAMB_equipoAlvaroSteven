import { Component, OnInit, HostListener} from '@angular/core'; // Importamos HostListener para escuchar el scroll
import { CommonModule } from '@angular/common'; // Importamos CommonModule para usar directivas comunes como ngIf y ngFor
import { RouterModule } from '@angular/router'; // Importamos RouterModule para usar el routerLink en los enlaces
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';
import { AnimalService, Animal } from '../../servicios/animal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  animalesDestacados: Animal[] = []; // Array para almacenar los animales destacados
  isShrunk: boolean = false; // Variable para controlar si el hero está encogido o no

  constructor(private _animalService: AnimalService) {}

  @HostListener('window:scroll', []) // Escuchamos el evento de scroll en la ventana
  onWindowScroll() {
    this.isShrunk = scrollY > 50; // Si el scroll es mayor a 50px, encogemos el hero
  }

  ngOnInit(): void {

    this._animalService.getTodos().subscribe({
      next: (data) => {
        // Tomamos los primeros 4 animales del array para mostrarlos como destacados
        this.animalesDestacados = data.slice(0, 4);
      },
      error: (err) => {
        console.error('Error al cargar los animales:', err);
      }
    });
  }
}