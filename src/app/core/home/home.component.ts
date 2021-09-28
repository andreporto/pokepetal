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
  isPokedex = true;
  page = { pageIndex: 0, pageSize: 150}

  constructor(
    private pokedexService: PokedexService,
    private pokepetalService: PokepetalService) { }

  ngOnInit(): void {
    this.initPokemons();
  }

  initPokemons() {
    this.pokedexService.getPokemons(this.page).toPromise().then(
      resultPokemons => {
        this.getData(resultPokemons);
      }
    );
  }

  initPetal() {
    this.pokemons = [...this.pokepetalService.pokemons];
  }

  get numPokemons() {
    return this.pokedexService.numPokemons;
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

  setPokedexMode(ev: boolean) {
    this.setPokemons(ev);
  }

  setPokemons(isPokedex: boolean) {
    this.pokemons = [];
    if(isPokedex){
      this.page.pageIndex = 0;
      this.initPokemons();
    } else {
      this.initPetal();
    }
    this.isPokedex = isPokedex;
  }

  onPageChange(e: any){
    console.log('page changed', e);
    this.page = e;
    this.initPokemons();
  }

}
