import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html'
})
export class ResultadoBusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService)
              {}

  // ngOnInit() se ejecuta cuando todo esta renderizado
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>
      {

        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(params['termino']);

        console.log(this.heroes);
      });
  }



}
