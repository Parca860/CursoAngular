import { Component } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../services/heroes.services';
import {HeroeModel} from '../models/heroe.models';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {


  heroe: HeroeModel;

  constructor( private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {

    this._activatedRoute.params.subscribe ((params) => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });


  }



}
