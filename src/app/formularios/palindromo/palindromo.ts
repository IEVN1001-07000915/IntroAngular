import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html'
})
export class Palindromo {
  
  // Variables sincronizadas con tu HTML
  IngresalaFrase: string = '';
  mensaje: string = '';

  totalVocales: number = 0;
  listaVocales: string = '';
  totalConsonantes: number = 0;
  listaConsonantes: string = '';
  fueAnalizado: boolean = false;

  // Propiedades auxiliares para evitar usar let, var o const
  indice: number = 0;
  letraActual: string = '';
  letraBase: string = '';
  cadenaProcesada: string = '';
  cadenaInvertida: string = '';

  // Mapas corregidos y completos (66 caracteres exactos)
  mapaMayusculas: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜabcdefghijklmnñopqrstuvwxyzáéíóúü';
  mapaMinusculas: string = 'abcdefghijklmnopqrstuvwxyzáéíóúüabcdefghijklmnopqrstuvwxyzáéíóúü';
  conjuntoConsonantes: string = 'bcdfghjklmnñpqrstvwxyz';

  limpiarCaracter(caracter: string): string {
    return this.mapaMayusculas.indexOf(caracter) !== -1 
      ? this.mapaMinusculas[this.mapaMayusculas.indexOf(caracter)] 
      : caracter;
  }

  esCaracterVocal(caracter: string): boolean {
    return caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' || caracter === 'á' || caracter === 'é' || caracter === 'í' || caracter === 'ó' || caracter === 'ú' || caracter === 'ü';
  }

  esCaracterConsonante(caracter: string): boolean {
    return this.conjuntoConsonantes.includes(caracter);
  }

  Validar(): void {
    this.totalVocales = 0;
    this.listaVocales = '';
    this.totalConsonantes = 0;
    this.listaConsonantes = '';
    this.fueAnalizado = true;

    this.cadenaProcesada = '';
    this.cadenaInvertida = '';

    // Ciclo utilizando .length y el índice de la clase
    for (this.indice = 0; this.indice < this.IngresalaFrase.length; this.indice++) {
      this.letraActual = this.IngresalaFrase[this.indice];
      this.letraBase = this.limpiarCaracter(this.letraActual);

      if (this.esCaracterVocal(this.letraBase)) {
        this.totalVocales++;
        this.listaVocales += this.letraActual + ' ';
        this.cadenaProcesada += this.letraBase;
        this.cadenaInvertida = this.letraBase + this.cadenaInvertida;
      } else if (this.esCaracterConsonante(this.letraBase)) {
        this.totalConsonantes++;
        this.listaConsonantes += this.letraActual + ' ';
        this.cadenaProcesada += this.letraBase;
        this.cadenaInvertida = this.letraBase + this.cadenaInvertida;
      }
    }

    if (this.cadenaProcesada.length === 0) {
      this.mensaje = 'No hay texto válido para evaluar';
      return;
    }

    this.mensaje = (this.cadenaProcesada === this.cadenaInvertida)
      ? '¡SÍ es un palíndromo!'
      : 'NO es un palíndromo.';
  }
}