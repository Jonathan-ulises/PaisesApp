import { Component } from '@angular/core';
import { UsuarioRegistro } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { RegistroHelper } from './registro-helper';
import Swal from 'sweetalert2';

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
      this.service.registrarUsuario(this.usuarioR).subscribe(resp => {
        if(resp.result != null) {
          Swal.fire({
            icon: 'success',
            title: 'Registro Exitoso'
          });
        }
        if(resp.error.length > 0) {
          let msj = '';
          resp.error.forEach((e) => {
            msj = msj.concat(` - ${e} -`);
          })
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            text: msj
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'Rellene todos los campos del formulario'
      });
    }
  }


}
