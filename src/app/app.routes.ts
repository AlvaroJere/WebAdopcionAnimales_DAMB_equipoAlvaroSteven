import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { OtrosAnimalesComponent } from './pages/otros-animales/otros-animales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { DetalleAnimalComponent } from './pages/detalle-animal/detalle-animal.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adopcion', component: AdopcionComponent },
  { path: 'perros', component: PerrosComponent },
  { path: 'gatos', component: GatosComponent },
  { path: 'otros', component: OtrosAnimalesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  // Esta ruta dinámica ":" permitirá usar UNA sola ficha para todos los animales
  { path: 'animal/:id', component: DetalleAnimalComponent },
  { path: '**', redirectTo: '' }
];