import { Component } from '@angular/core';
import { UsuarioRegistro } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { RegistroHelper } from './registro-helper';

@Component({
  selector: 'app-registro',
  templateUrl: './registrar.component.html'
})
export class RegistroComponent {

  helper: RegistroHelper;

  usuarioR: UsuarioRegistro = {
    nom: '',
    userN: '',
    email: '',
    fechaN: ''
  };

  constructor(private service: UsuarioService) {
    this.helper = new RegistroHelper();
  }

  registrar() {
    if (this.helper.validarCampos(this.usuarioR)) {
      this.usuarioR.fechaN = this.helper.generarFecha(this.usuarioR.fechaN);
      this.service.registrarUsuario(this.usuarioR).subscribe(resp => {
        console.log(resp)
      })
    } else {
      console.log('faltan campos')
    }
  }


}
