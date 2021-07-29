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

  constructor( private paisService: PaisService) { }

  buscar(): void {
    this.paisService.buscarPais( this.query )
      .subscribe( respuesta => {
        console.log(respuesta)
      })
  }
}
