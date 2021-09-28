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

  numPokemons = 0;

  getPokemonData(pokemon: Pokemon) {
    return this.httpClient.get<PokemonSprites>(pokemon.url).pipe(
      map( res => ({name: pokemon.name ,image: res.sprites.front_default, abilities: res.abilities, types: res.types}))
    );
  }

  constructor(private httpClient: HttpClient) { }    

  getPokemons(page: any) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${page.pageSize}&offset=${page.pageIndex * page.pageSize}`;
    return this.httpClient.get<PokemonReult>(url).pipe(
      tap(result => {
        this.numPokemons = result.count;
      }),
      pluck('results')
    );
  }

}
