import { Component } from '@angular/core';
import { UsuarioRegistro } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registrar.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class RegistroComponent {

  usuarioR: UsuarioRegistro = {
    nom: '',
    userN: '',
    email: '',
    fechaN: 'dd/mm/yyyy'
  };

  constructor(private service: UsuarioService) { }

  registrar() {
    // this.service.registrarUsuario(this.usuarioR).subscribe(resp => {
    //   console.log(resp)
    // });
    console.log(this.usuarioR);
    this.generarFecha(this.usuarioR.fechaN);
  }

  generarFecha(fecha: string): string {
    let yyyy = fecha.substring(0, 4);
    let mm = fecha.substring(5,7);
    let dd = fecha.substring(8);

    console.log(yyyy);
    console.log(mm);
    console.log(dd);

    let nuevoFormato = `${dd}/${mm}/${yyyy}`

    return nuevoFormato;
  }
}
