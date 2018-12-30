import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../services/heroes.services';
import {HeroeModel} from '../models/heroe.models';


@Component({
  selector: 'app-busquedaheroes',
  templateUrl: './busquedaHeroes.component.html',
  styles: []
})
export class BusquedaHeroeComponent implements OnInit  {

    heroeArr: HeroeModel[] = [];
    busqueda: string;


  constructor( private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe ((params) => {
        this.busqueda = params['busqueda'];
        this.buscarHeroe(this.busqueda);
      });
  }

  buscarHeroe(busqueda: string): void {
      this.heroeArr = this._heroeService.buscarHeroes(busqueda);
  }



}
