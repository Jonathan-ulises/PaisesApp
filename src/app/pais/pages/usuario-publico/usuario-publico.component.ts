import { Component, OnInit } from '@angular/core';
import { UsuarioPub } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-publico',
  templateUrl: './usuario-publico.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class UsuarioPublicoComponent implements OnInit{

  usuarios: UsuarioPub[] = [];

  constructor(private service: UsuarioService){}

  ngOnInit(): void {
    this.service.getUsuarioPublico().subscribe((resp) => {
      this.usuarios = resp;
    }, (err) => {console.log(err)})
  }
}
