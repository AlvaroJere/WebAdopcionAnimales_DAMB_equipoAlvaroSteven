import { Component, HostListener } from '@angular/core'; 
import { RouterModule } from '@angular/router'; // Necesario para usar routerLink

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule],
  standalone: true
})
export class NavbarComponent {
  lastScrollTop = 0;
  isHeaderHidden = false;

  // Este decorador detecta el scroll automáticamente
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      this.isHeaderHidden = true; // Ocultar
    } else {
      this.isHeaderHidden = false; // Mostrar
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}