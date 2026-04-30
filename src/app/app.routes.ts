import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página que sale por defecto
  { path: 'adopcion', component: AdopcionComponent },
  { path: 'contacto', component: ContactoComponent },
];