import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  query   : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar( query: string ): void {
    this.hayError = false;
    this.query = query;

    this.paisService.buscarCapital( this.query )
      .subscribe( (capital) => {
        console.log(capital);
        this.paises = capital;

      }, (err) => {
        console.log(err);
        console.info(err);
        this.hayError = true;
        this.paises = [];
      })
  }

}
