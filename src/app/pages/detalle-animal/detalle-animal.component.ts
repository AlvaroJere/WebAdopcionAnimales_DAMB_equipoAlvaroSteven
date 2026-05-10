import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Importamos ActivatedRoute para obtener el ID del animal desde la URL

// Importamos ReactiveFormsModule para manejar el formulario de contacto
// Importamos FormGroup, FormControl y Validators para crear el formulario reactivo
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 

import { AnimalService, Animal } from '../../servicios/animal.service'; // Importamos el servicio para obtener los detalles del animal
import { TemplateLiteral } from '@angular/compiler'; // Importamos TemplateLiteral para usarlo en el mensaje de alerta al enviar la solicitud de adopción

@Component({
  selector: 'app-detalle-animal',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './detalle-animal.component.html',
  styleUrl: './detalle-animal.component.css'
})
export class DetalleAnimalComponent implements OnInit
{
  animal: Animal | undefined; // Variable para almacenar los detalles del animal que se mostrarán en la vista
  
  constructor(private _animalService: AnimalService, private _route: ActivatedRoute) {} // Inyectamos el servicio y ActivatedRoute en el constructor
  
  // Formulario de contacto para solicitar la adopción
  adopcionForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]), // Campo de nombre, obligatorio y con una longitud mínima de 3 caracteres
    email: new FormControl('', [Validators.required, Validators.email]), // Campo de email, obligatorio y debe ser un email válido
    telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]), // Campo de teléfono, obligatorio y debe ser un número de 9 dígitos
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)]), // Campo de mensaje, obligatorio y con una longitud mínima de 10 caracteres
  });

 ngOnInit() {
    const id = Number(this._route.snapshot.paramMap.get('id')); // Obtenemos el ID del animal desde la URL y lo convertimos a número

    // Llamamos al servicio para obtener los detalles del animal usando el ID obtenido
    if (id) {

      // Nos suscribimos al observable que devuelve el servicio para obtener los detalles del animal
      this._animalService.getAnimalPorId(id).subscribe({
        next: (res) => {
          this.animal = res; // Asignamos los detalles del animal a la variable para mostrarla en la vista
        },
        error: (error) => { // El error ahora está DENTRO del objeto
          console.error('Error al cargar los detalles del animal:', error);
        }
      });
    }
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
