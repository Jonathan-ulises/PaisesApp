import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  query: string = '';

  constructor() { }

  buscar(): void {
    console.log(this.query);
  }
}
