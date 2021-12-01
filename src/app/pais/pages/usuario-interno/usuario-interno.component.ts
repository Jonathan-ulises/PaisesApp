import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { UsuarioInt } from '../../interfaces/usuario.interface';
import { PaisService } from '../../services/pais.service';
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
