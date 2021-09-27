import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { PokepetalService } from '../../services/pokepetal.service';
import { tap, map, switchMap } from 'rxjs/operators'
import { PokeData, PokeMode, Pokemon } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() pokemons:PokeData[] = [];
  
  ngOnChanges() {
    console.log('list', this.pokemons);
    
  }

  ngOnInit() {
    console.log(this.pokemons);
    
  }
}
