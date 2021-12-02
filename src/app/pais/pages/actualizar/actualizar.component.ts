import { Component } from '@angular/core';
import { UsuarioActualizacion } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { ActualizarHelper } from './actualizar-helper';

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
        console.log(resp);
      });
    }
  }
}
