import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActualizarComponent } from "./pais/pages/actualizar/actualizar.component";
import { UsuarioPublicoComponent } from "./pais/pages/usuario-publico/usuario-publico.component";
import { RegistroComponent } from "./pais/pages/registrar/registrar.component";
import { UsuarioInternoComponent } from './pais/pages/usuario-interno/usuario-interno.component';

//Lista de rutas
const routes: Routes = [
    {
        //Configuracion basica para una ruta (ruta principal)
        path: '',
        component: UsuarioPublicoComponent,
        pathMatch: 'full'
    },
    {
        path: 'interno',
        component: UsuarioInternoComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'actualizar',
        component: ActualizarComponent
    },
    {
        //Ruta por si se quiere ingresar a una ruta que no existe en este arreglo
        path: '**',
        redirectTo: ''
    }
]


//Estructura basica de un Modulo en Angular
@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}