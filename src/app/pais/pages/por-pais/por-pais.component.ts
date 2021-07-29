import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  query: string = '';
  hayError: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar(): void {
    this.hayError = false;
    
    this.paisService.buscarPais( this.query )
      .subscribe( (respuesta) => {
        console.log(respuesta)
      }, (err) => {
        console.log(err);
        console.info(err);
        this.hayError = true;
      })
  }
}
