import { Component, HostListener } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule, CommonModule], // Importamos RouterModule para usar routerLink y CommonModule para directivas comunes
  standalone: true
})
export class NavbarComponent {
  lastScrollTop = 0;
  isHeaderHidden = false;

  // Este decorador detecta el scroll automáticamente
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Obtenemos la posición actual del scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      this.isHeaderHidden = true; // Ocultar
    } else {
      this.isHeaderHidden = false; // Mostrar
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos en algunos navegadores
  }
}