import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; // Importamos RouterOutlet para mostrar las vistas de las rutas, Router para escuchar los cambios de ruta y NavigationEnd para detectar cuando la navegación ha finalizado
import { CommonModule } from '@angular/common'; // Importamos CommonModule para usar directivas comunes como ngIf y ngFor
import * as AOS from 'aos'; // Importamos AOS para las animaciones

import { NavbarComponent } from './layout/navbar/navbar.component'; 
import { FooterComponent } from './layout/footer/footer.component';
import { filter } from 'rxjs';  // Importamos filter para filtrar los eventos de navegación y detectar solo los NavigationEnd

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule], // Importamos RouterOutlet para mostrar las vistas de las rutas, NavbarComponent y FooterComponent para mostrar la barra de navegación y el pie de página en todas las vistas, y CommonModule para usar directivas comunes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WebAdopcionAnimales_DAMBequipoAlvaroSteven';

  mostrarLayout = true; // Variable para controlar la visibilidad de la barra de navegación y el pie de página

  constructor(private router: Router) {
    // Escuchamos los cambios de ruta para mostrar u ocultar el layout en función de la ruta actual
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtramos solo los eventos de navegación que han finalizado
    ).subscribe((event: NavigationEnd) => {
      
      // Definimos un array con las rutas donde queremos mostrar el layout (navbar y footer)
      this.mostrarLayout = ['/adopcion', '/colaborar', '/como-adoptar', '/contacto', '/detalle-animal', '/favorito', '/gatos', '/hacerse-socio', '/home', '/iniciar-sesion', '/quienes-somos', '/otros-animales', '/perros'].includes(event.urlAfterRedirects);
    });
  }

  ngOnInit() {
    AOS.init({ // Inicializamos AOS con opciones personalizadas
      duration: 600, // Duración de la animación en ms
      once: true, // Animar solo una vez al hacer scroll
      mirror: false, // No animar elementos al hacer scroll hacia arriba
    });
  }

}
