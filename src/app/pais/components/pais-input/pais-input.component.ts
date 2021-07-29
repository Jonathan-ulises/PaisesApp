import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  query: string = '';

  constructor() { }

  buscar(): void {
    /*
    Cuando se presione Enter para enviar el formulario, el evento emitira el valor
    del query.
    */
    this.onEnter.emit( this.query );
  }
}
