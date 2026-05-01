import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // Configura el arranque de la aplicación Angular con el componente raíz y la configuración personalizada
  .catch((err) => console.error(err));  // Punto de entrada de la aplicación Angular
