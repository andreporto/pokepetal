import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon, PokemonReult, PokemonSprites } from '../model/Pokemon';
import { Observable } from 'rxjs';
import { mergeMap, map, tap, switchMap, pluck } from 'rxjs/operators';
import { ɵangular_packages_platform_browser_platform_browser_n } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  getPokemonData(pokemon: Pokemon) {
    return this.httpClient.get<PokemonSprites>(pokemon.url).pipe(
      map( res => ({name: pokemon.name ,image: res.sprites.front_default, abilities: res.abilities}))
    );
  }

  constructor(private httpClient: HttpClient) { }    

  pokemons$ = this.httpClient.get<PokemonReult>('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(
    pluck('results')
  );

}
