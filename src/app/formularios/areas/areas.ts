import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
  figuraSeleccionada: string = 'cuadrado';
  
  param1: string = ''; 
  base: string = '';   
  altura: string = ''; 
  resultadoArea: number = 0;

  get etiquetaParam1(): string {
    switch (this.figuraSeleccionada) {
      case 'cuadrado': return 'Medida del Lado:';
      case 'circulo': return 'Medida del Radio:';
      case 'pentagono': return 'Medida del Lado:';
      default: return 'Valor:';
    }
  }

  calcularArea(): void {
    switch (this.figuraSeleccionada) {
      case 'cuadrado':
        this.resultadoArea = parseFloat(this.param1) * parseFloat(this.param1);
        break;

      case 'rectangulo':
        this.resultadoArea = parseFloat(this.base) * parseFloat(this.altura);
        break;

      case 'circulo':
        this.resultadoArea = Math.PI * Math.pow(parseFloat(this.param1), 2);
        break;

      case 'pentagono':
        this.resultadoArea = ((parseFloat(this.param1) * 5) * (parseFloat(this.param1) / (2 * Math.tan(Math.PI / 5)))) / 2;
        break;
    }
  }
}