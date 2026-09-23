import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {

  IngresalaFrase: string = '';
  mensaje: string = '';

  Validar(): void {
    // 1. Convertimos la cadena de texto en un arreglo de caracteres
    var arregloOriginal = this.IngresalaFrase.split('');

    // 2. Creamos un arreglo invertido
    var arregloInvertido = [...arregloOriginal].reverse();

    // 3. Usamos .length para obtener el total de elementos del arreglo
    var total = arregloOriginal.length;

    // 4. Comparamos si el texto original es igual al invertido
    var esPalindromo = total > 0 && arregloOriginal.join('') === arregloInvertido.join('');

    if (esPalindromo) {
      this.mensaje = `Sí es un palíndromo (Longitud de caracteres: ${total})`;
    } else {
      this.mensaje = `No es un palíndromo (Longitud de caracteres: ${total})`;
    }
  }
}