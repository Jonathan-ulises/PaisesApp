import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    //OBSERVAR LINK, CONSULTAR PAIS: OPCION1
    // this.activatedRoute.params
    //   .subscribe( ({ id })  => {
    //     console.log( id );

    //     this.paisService.getPaisPorCodigoAlpha( id )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       })
    //   });

    /*
    El switch map recive los datos de un observable (en este caso el resultado de ActivatedRoute) y enseguida
    puede dispara otro observable (this.paisService.getPaisPorCodigoAlpha( id )) que puede hacer uso de la informacion
    optenida del primer observable; el observable disparadado (el segundo) hara la consulta del pais. 
    Este operador (el switchMap) forma part de un pipe del observable de ActivatedRoute.
    en la parte del subscribe del activedRoute, la respuesta del observable es la que retorna la consulta del observable
    disparado (el segundo observable del SwitchMap) del switchMap, que es la informacion de pais consultada por codigo.

    El operador tap dispara un efecto secundario.
    El tap en este caso imprime en pantalla con el console.log la respuesta del segundo observable del
    switchmap, esto al momento de recibir algo.
    */
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id })  => this.paisService.getPaisPorCodigoAlpha( id )),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais);
  }

}
