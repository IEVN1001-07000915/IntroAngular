import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: string = '';
  y1: string = '';
  x2: string = '';
  y2: string = '';
  resultado: number = 0;

  calcularDistancia(): void {
    const valX1 = parseFloat(this.x1) || 0;
    const valY1 = parseFloat(this.y1) || 0;
    const valX2 = parseFloat(this.x2) || 0;
    const valY2 = parseFloat(this.y2) || 0;

    const restaX = valX2 - valX1;
    const restaY = valY2 - valY1;
    
    this.resultado = Math.sqrt((restaX * restaX) + (restaY * restaY));
  }
}