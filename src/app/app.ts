import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   title = "JELIAS";

   duplicaNumero(n1:number):number{
    return n1*2
   }

   pelicula={
    titulo: 'Spyder Man',
    fechaLanzamiento: new Date(),
    precio:1234
   }
}
