import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Importamos ActivatedRoute para obtener el ID del animal desde la URL

// Importamos ReactiveFormsModule para manejar el formulario de contacto
// Importamos FormGroup, FormControl y Validators para crear el formulario reactivo
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 

import { AnimalService } from '../../servicios/animal.service'; // Importamos el servicio para obtener los detalles del animal
import { Animal } from '../../animal.interface'; // Importamos la interface para tipar mejor el animal
import { TemplateLiteral } from '@angular/compiler';

@Component({
  selector: 'app-detalle-animal',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './detalle-animal.component.html',
  styleUrl: './detalle-animal.component.css'
})
export class DetalleAnimalComponent implements OnInit
{
  private _route = inject(ActivatedRoute); // Inyección de ActivatedRoute para obtener el ID del animal
  private _animalService = inject(AnimalService); // Inyección del servicio para obtener los detalles del animal

  animal?: Animal; // Variable para almacenar los detalles del animal

  // Formulario de contacto para solicitar la adopción
  adopcionForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]), // Campo de nombre, obligatorio y con una longitud mínima de 3 caracteres
    email: new FormControl('', [Validators.required, Validators.email]), // Campo de email, obligatorio y debe ser un email válido
    telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]), // Campo de teléfono, obligatorio y debe ser un número de 9 dígitos
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)]), // Campo de mensaje, obligatorio y con una longitud mínima de 10 caracteres
  });

  ngOnInit() 
  {
    const id = Number(this._route.snapshot.paramMap.get('id')); // Obtenemos el ID del animal desde la URL
    this.animal = this._animalService.getAnimalPorId(id); // Obtenemos los detalles del animal usando el servicio
  }

  enviarSolicitud() 
  {
    if (this.adopcionForm.valid)
    {
      // Aquí podrías enviar los datos a un servidor o procesarlos de alguna manera
      console.log('Datos de adopción enviados:', this.adopcionForm.value);
      
      // Mostramos una alerta de éxito al usuario
      alert('¡Gracias! Tu solicitud para adoptar a ' + this.animal?.nombre + ' ha sido enviada. Nos pondremos en contacto contigo pronto.');
      
      this.adopcionForm.reset(); // Reiniciamos el formulario después de enviar la solicitud
    }else{
      alert('Por favor, completa correctamente el formulario antes de enviar la solicitud.');
    }
  }
 
}
