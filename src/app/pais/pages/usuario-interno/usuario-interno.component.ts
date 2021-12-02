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

  constructor( private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.getUsuarioInterno().subscribe((resp) => {
      this.usuarios = resp;
    }, (err) => {console.log(err)})
  }
}
