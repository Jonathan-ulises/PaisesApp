import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Input('placeH') placeholder: string = '';

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  
  query: string = '';
  

  constructor() { }
  
  ngOnInit(): void {
    /*
    Cuando se detecte que se evio un valor con next, se ejecutara el subscribe
    */
    this.debouncer
      .pipe(
        //Esta linea dice que no ejecutes el subscribe hasta que el observable deje
        //de emitir valores durante 300 milisegundos.
        debounceTime(300))
      .subscribe( valor => {
        //Activa el evento emitiendo el valor del observable del debouncer.
        this.onDebounce.emit( valor );
      } );
  }

  buscar(): void {
    /*
    Cuando se presione Enter para enviar el formulario, el evento emitira el valor
    del query.
    */
    this.onEnter.emit( this.query );
  }

  /**
   * Detecta el ecento de presion de las teclas al momento de escribir, detona el emiter debouncer
   * cuando se presione una tecla.
   */
  teclaPresionada() {
    //Lalla al Observable envia el query de busqueda.
    this.debouncer.next( this.query );
  }
}
