import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  // Input se utiliza para definir una propiedad desde afuera
  // output y event emiter se utilizan para acceder a funciones exteriores

  @Input() heroe: any = {};
  @Input() index: number;

  // el evento que quiero que el padre escuche y el tipo de dato que va emitir
  @Output() HeroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router ) {
    // inicializar el event emiter 
    this.HeroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/heroe', this.index]);
    // lo que se quiere emitir
    // this.HeroeSeleccionado.emit( this.index );
  }

}
