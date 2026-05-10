import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { OtrosAnimalesComponent } from './pages/otros-animales/otros-animales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { DetalleAnimalComponent } from './pages/detalle-animal/detalle-animal.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { ComoAdoptarComponent } from './pages/como-adoptar/como-adoptar.component';
import { FavoritoComponent } from './pages/favorito/favorito.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';  // Página para rutas no encontradas (opcional)

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige la ruta raíz a Home
  { path: 'home', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'adopcion', component: AdopcionComponent }, // Ruta para la página de adopción
  { path: 'perros', component: PerrosComponent }, // Ruta para la página de perros
  { path: 'gatos', component: GatosComponent },// Ruta para la página de gatos
  { path: 'otros-animales', component: OtrosAnimalesComponent }, // Ruta para la página de otros animales
  { path: 'contacto', component: ContactoComponent },// Ruta para la página de contacto
  { path: 'quienes-somos', component: QuienesSomosComponent }, // Ruta para la página de quiénes somos
  { path: 'iniciar-sesion', component: IniciarSesionComponent }, // Ruta para la página de iniciar sesión
  { path: 'como-adoptar', component: ComoAdoptarComponent }, // Ruta para la página de cómo adoptar
  { path: 'favoritos', component: FavoritoComponent }, // Ruta para la página de favoritos

  // Esta ruta dinámica ":" permitirá usar UNA sola ficha para todos los animales
  { path: 'animal/:id', component: DetalleAnimalComponent },

  { path: '**', component: NotFoundComponent }, // Ruta para manejar rutas no encontradas
  { path: '**', redirectTo: 'error-404' } // Redirige cualquier ruta no encontrada a una página de error 404 
];