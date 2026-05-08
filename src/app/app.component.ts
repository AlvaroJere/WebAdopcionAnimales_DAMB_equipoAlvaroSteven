import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos'; // Importamos AOS para las animaciones

import { NavbarComponent } from './layout/navbar/navbar.component'; 
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WebAdopcionAnimales_DAMBequipoAlvaroSteven';

  ngOnInit() {
    AOS.init({ // Inicializamos AOS con opciones personalizadas
      duration: 600, // Duración de la animación en ms
      once: true, // Animar solo una vez al hacer scroll
      mirror: false, // No animar elementos al hacer scroll hacia arriba
    });
  }

}
