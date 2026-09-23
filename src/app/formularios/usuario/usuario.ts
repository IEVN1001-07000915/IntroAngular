import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
})
export class Usuario {

  UsuarioSecreto: string = 'Deadpool';
  ContraSecreta: string = '8689';
  IngresaUsuario: string = '';
  IngresaContra: string = '';
  mensaje: string = '';
 
  Validar(): void {
    if (this.UsuarioSecreto !== this.IngresaUsuario) {
      this.mensaje = 'El nombre de usuario no es válido.';
    } else if (this.ContraSecreta !== this.IngresaContra) {
      this.mensaje = 'La contraseña no es válida.';
    } else {
      this.mensaje = 'Bienvenido entraste al sistema';
    }
  }
}


