import { Component, OnInit, HostListener} from '@angular/core'; // Importamos HostListener para escuchar el scroll
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalCardComponent } from '../../componentes/animal-card/animal-card.component';
import { Animal } from '../../animal.interface';
import { AnimalService } from '../../servicios/animal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private _animalService = new AnimalService(); // Instancia del servicio para obtener los animales
  animalesDestacados: Animal[] = []; // Array para almacenar los animales destacados

  isShrunk: boolean = false; // Variable para controlar si el hero está encogido o no

  @HostListener('window:scroll', []) // Escuchamos el evento de scroll en la ventana
  onWindowScroll() {
    this.isShrunk = scrollY > 50; // Si el scroll es mayor a 50px, encogemos el hero
  }

  ngOnInit(): void {

    // Al iniciar el componente, obtenemos la lista de todos los animales y seleccionamos los primeros 4 para mostrar como destacados
    this.animalesDestacados = this._animalService.getTodos().slice(0, 4);
  }
}