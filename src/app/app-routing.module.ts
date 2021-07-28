import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

//Lista de rutas
const routes: Routes = [
    {
        //Configuracion basica para una ruta (ruta principal)
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        //Configuracion de una ruta que necesite un argumento en la misma
        path: 'pais/:id',
        component: VerPaisComponent
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