import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { UsuarioPublicoComponent } from './pages/usuario-publico/usuario-publico.component';
import { RegistroComponent } from './pages/registrar/registrar.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { UsuarioInternoComponent } from "./pages/usuario-interno/usuario-interno.component";



@NgModule({
  declarations: [
    PorCapitalComponent,
    UsuarioPublicoComponent,
    UsuarioInternoComponent,
    RegistroComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    //Componentes para usar en el AppComponent
    PorCapitalComponent,
    UsuarioPublicoComponent,
    UsuarioInternoComponent,
    RegistroComponent,
    VerPaisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
