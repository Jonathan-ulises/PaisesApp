import { Component, OnInit } from '@angular/core';
import { UsuarioPub } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-publico',
  templateUrl: './usuario-publico.component.html',
  styleUrls: ['./usuario-publico.component.css']
})
export class UsuarioPublicoComponent implements OnInit{

  usuarios: UsuarioPub[] = [];
  id: number = 0;

  constructor(private service: UsuarioService){}

  ngOnInit(): void {
    this.consultarUsuarios()
  }

  buscarUsuarioPun(): void {
    this.service.srchUsuarioPublico(this.id).subscribe((resp) => {
      this.usuarios = resp;
    }, (err) => {console.log(err)});
  }

  consultarUsuarios(){
    this.service.getUsuarioPublico().subscribe((resp) => {
      this.usuarios = resp;
      this.id = 0;
    }, (err) => {console.log(err)});
  }
}
