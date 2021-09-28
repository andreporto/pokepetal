import { Type } from "@angular/core";

export interface PokemonReult {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonSprites {
    abilities: [{
        ability: {
            name: string
        }
    }];
    sprites: {
        front_default: string
    };
    types: Types[]
}

export enum PokeMode {
    POKEDEX = 'pokedex',
    POKEPETAL = 'pokepetal',
}

export interface PokeData {
    name: string;
    abilities?: [{ 
        ability: {
            name: string
        }
    }];
    types: Types[];
    image: string;
}

export interface Types {
    slot: number;
    type: {
        name: string;
        url?: string;
    };
}