import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importamos RouterModule para usar el routerLink en los enlaces


@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  ngOnInit(): void {
    // Aquí podrías agregar lógica adicional si es necesario

  }

}
