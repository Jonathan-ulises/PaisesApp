import { Component } from '@angular/core';
import { UsuarioActualizacion } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { ActualizarHelper } from './actualizar-helper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
})
export class ActualizarComponent {

  helper: ActualizarHelper;

  usuarioA: UsuarioActualizacion = {
    id: 0,
    userN: '',
    email: ''
  }

  constructor( private service: UsuarioService ) {
    this.helper = new ActualizarHelper();
  }

  actualizar(){
    if(this.helper.validarCampos(this.usuarioA)) {
      this.service.actualizarUsuario(this.usuarioA).subscribe(resp => {
        if(resp.result != null) {
          Swal.fire({
            icon: 'success',
            title: 'Actualizacion Exitosa'
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
