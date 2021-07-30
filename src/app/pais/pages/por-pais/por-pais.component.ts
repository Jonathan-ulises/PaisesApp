import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {


  query   : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar( query: string ): void {
    
    this.mostrarSugerencias = false;
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

  /**
   * Creacion de lista de sugerencias, funciona al detonarse el emiter del onDebounce.
   * @param query Termino de busqueda
   */
  sugerencias( query: string ): void {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.query = query;
    
    this.paisService.buscarPais( query )
      .subscribe(  (paises ) => {
        this.paisesSugeridos = paises.splice(0, 5);
      },
      ( err ) => {
        this.paisesSugeridos = [];
      })
  }

  buscarSugerido( termino: string) {
    this.buscar( termino );
  }
}
