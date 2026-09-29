import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
})
export class Cinepolis {

  // Variables de entrada y salida
  nombre: string = '';
  cantidadCompradoresTexto: string = '';
  cantidadTexto: string = ''; 
  tieneTarjeta: string = 'no'; 
  resultadoTotal: string = '';
  mensaje: string = ''; 

  // Variables auxiliares declaradas en la clase (sin let ni var)
  cantidadCompradores: number = 0;
  totalBoletasGrupo: number = 0;
  precioUnitario: number = 0;
  subtotalGeneral: number = 0;
  valorConDescuento: number = 0;
  descuentoCineco: number = 0;
  limiteMaximoTotal: number = 0;
  totalBoletasRestantes: number = 0;
  i: number = 0;
  boletasDeEsteComprador: number = 0;
  subtotalComprador: number = 0;
  porcentajeDescuentoComprador: number = 0;
  totalCompradorConDescuento: number = 0;

  Procesar(): void {
    // Limpiamos los mensajes anteriores antes de empezar
    this.mensaje = '';
    this.resultadoTotal = '';

    // 1. Convertir los textos a números enteros
    this.cantidadCompradores = parseInt(this.cantidadCompradoresTexto);
    this.totalBoletasGrupo = parseInt(this.cantidadTexto);

    // 2. Validar que el total de boletas no supere el máximo absoluto permitido (7 por cada comprador)
    this.limiteMaximoTotal = this.cantidadCompradores * 7;
    if (this.totalBoletasGrupo > this.limiteMaximoTotal) {
      this.mensaje = "Error: El total de boletas supera el máximo permitido para " + this.cantidadCompradores + " compradores (Máximo " + this.limiteMaximoTotal + " boletas).";
      return; 
    }

    // 3. Definir el valor base de cada boleta ($12.000)
    this.precioUnitario = 12000;
    this.subtotalGeneral = 0;
    this.totalBoletasRestantes = this.totalBoletasGrupo;

    // 4. Distribuir las boletas de forma secuencial (llenando hasta 7 por comprador) y aplicar descuentos
    for (this.i = 0; this.i < this.cantidadCompradores; this.i++) {
      
      // Asignar hasta un máximo de 7 boletas a este comprador, o lo que quede restante
      if (this.totalBoletasRestantes >= 7) {
        this.boletasDeEsteComprador = 7;
      } else {
        this.boletasDeEsteComprador = this.totalBoletasRestantes;
      }

      // Restar las boletas asignadas al acumulado restante
      this.totalBoletasRestantes = this.totalBoletasRestantes - this.boletasDeEsteComprador;

      // Calcular el subtotal de este comprador
      this.subtotalComprador = this.boletasDeEsteComprador * this.precioUnitario;
      this.porcentajeDescuentoComprador = 0;

      // Aplicar regla de descuento según las boletas de ESTE comprador en específico
      if (this.boletasDeEsteComprador > 5) {
        this.porcentajeDescuentoComprador = 0.15; // 15% si tiene 6 o 7 boletas
      } else {
        if (this.boletasDeEsteComprador >= 3) {
          this.porcentajeDescuentoComprador = 0.10; // 10% si tiene 3, 4 o 5 boletas
        } else {
          this.porcentajeDescuentoComprador = 0.0;  // 1 o 2 boletas sin descuento
        }
      }

      // Restar el descuento individual y sumarlo al total general del grupo
      this.totalCompradorConDescuento = this.subtotalComprador - (this.subtotalComprador * this.porcentajeDescuentoComprador);
      this.subtotalGeneral = this.subtotalGeneral + this.totalCompradorConDescuento;
    }

    this.valorConDescuento = this.subtotalGeneral;

    // 5. Aplicar descuento adicional del 10% al total si seleccionó 'sí' en la Tarjeta Cineco
    if (this.tieneTarjeta === 'si') {
      this.descuentoCineco = this.valorConDescuento * 0.10;
      this.valorConDescuento = this.valorConDescuento - this.descuentoCineco;
    }

    // 6. Mostrar el resultado final formateado
    this.resultadoTotal = "$ " + this.valorConDescuento.toLocaleString() + " pesos";
  }
  Salir(): void {
    this.nombre = '';
    this.cantidadCompradoresTexto = '';
    this.tieneTarjeta = 'no';
    this.cantidadTexto = '';
    this.resultadoTotal = '';
    this.mensaje = '';
  }
}