import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokeData, PokeMode, Pokemon } from 'src/app/model/Pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokepetalService } from 'src/app/services/pokepetal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  pokemons: PokeData[] = [];

  constructor(
    private pokedexService: PokedexService,
    private pokepetalService: PokepetalService) { }

  ngOnInit(): void {
    // this.pokepetalData = this.pokepetalService.pokemons;
    this.initPokemons();
  }

  initPokemons() {
    this.pokedexService.pokemons$.toPromise().then(
      resultPokemons => {
        this.getData(resultPokemons);
      }
    );
  }

  initPetal() {
    this.pokemons = [...this.pokepetalService.pokemons];
  }

  getData( pokemonsPokedex: Pokemon[] = []) {
    this.pokemons = [];
    pokemonsPokedex.forEach(async element => {
      await this.pokedexService.getPokemonData(element).toPromise().then(
        result => {
          this.pokemons.push(result)}
      );
    });
  }

  setPokedexMode(e: boolean) {
    this.setPokemons(e);
  }

  setPokemons(isPokedex: boolean) {
    if(isPokedex){
      this.initPokemons();
    } else {
      this.initPetal();
      
    }
  }

}
