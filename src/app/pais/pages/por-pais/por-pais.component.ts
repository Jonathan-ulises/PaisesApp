import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  query   : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar( query: string ): void {
    this.hayError = false;
    this.query = query;

    this.paisService.buscarPais( this.query )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        console.log(err);
        console.info(err);
        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias( query: string ): void {
    this.hayError = false;
    // TODO: CREAR SUGURENCIAS
  }
}
