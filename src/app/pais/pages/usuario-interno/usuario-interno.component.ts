import { Component, OnInit } from '@angular/core';
import { UsuarioInt } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-publico',
  templateUrl: './usuario-interno.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class UsuarioInternoComponent implements OnInit {

  usuarios: UsuarioInt[] = [];
  id: number = 0;

  constructor( private service: UsuarioService) { }

  ngOnInit(): void {
    this.consultarUsuarios();
  }

  buscarUsuarioPun() {
    this.service.srchUsuarioInterno(this.id).subscribe((resp) => {
      resp.forEach(u => {
        let d = new Date(u.fechaNacimiento).toLocaleDateString('es-US');
        u.fechaNacimiento = d;
      });
      this.usuarios = resp;
    }, (err) => {console.log(err)});
  }

  consultarUsuarios() {
    this.service.getUsuarioInterno().subscribe((resp) => {
      resp.forEach(u => {
        let d = new Date(u.fechaNacimiento).toLocaleDateString('es-US');
        u.fechaNacimiento = d;
      });
      this.usuarios = resp;
      this.id = 0;
    }, (err) => {console.log(err)});
  }
}
