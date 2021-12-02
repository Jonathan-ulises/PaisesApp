import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { UsuarioPublicoComponent } from './pages/usuario-publico/usuario-publico.component';
import { RegistroComponent } from './pages/registrar/registrar.component';
import { UsuarioInternoComponent } from "./pages/usuario-interno/usuario-interno.component";



@NgModule({
  declarations: [
    ActualizarComponent,
    UsuarioPublicoComponent,
    UsuarioInternoComponent,
    RegistroComponent,
  ],
  exports: [
    //Componentes para usar en el AppComponent
    ActualizarComponent,
    UsuarioPublicoComponent,
    UsuarioInternoComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UsuarioModule { }
