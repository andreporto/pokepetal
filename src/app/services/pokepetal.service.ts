import { Injectable } from '@angular/core';

import { PokeData } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokepetalService {
  pokemons: PokeData[] = [
    {
        name: 'Patrice Gilbert',
        types:[{ type:{ name: 'President', url:''}, slot: 1}],
        image: 'assets/petal/pgilbert-500x600.jpg',
        abilities: undefined
    },    
    {
        name: 'Pascal Tessier-Fleury',
        types:[{ type:{ name: 'General Manager', url:''}, slot: 1}],
        image: 'assets/petal/pfleury-500x600.jpg',
        abilities: undefined
    },    
    {
        name: 'Julie Bergeron',
        types:[{ type:{ name: 'SVP Strategy, Partnerships and Market Access', url:''}, slot: 1}],
        image: 'assets/petal/jbergeron-500x600.jpg',
        abilities: undefined
    },    
    {
        name: 'Arvind Dhillon',
        types:[{ type:{ name: 'VP Product', url:''}, slot: 1}],
        image: 'assets/petal/adhillon-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Cyrille Mertes',
        types:[{ type:{ name: 'VP Technology', url:''}, slot: 1}],
        image: 'assets/petal/cmertes-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Dominique Vallée',
        types:[{ type:{ name: 'VP Customer Success', url:''}, slot: 1}],
        image: 'assets/petal/dvallee-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Corina Chartrand',
        types:[{ type:{ name: 'VP Human Resources', url:''}, slot: 1}],
        image: 'assets/petal/cchartrand-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Gilbert Boucher',
        types:[{ type:{ name: 'VP Sales', url:''}, slot: 1}],
        image: 'assets/petal/gboucher-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Jasmin Mulalic',
        types:[{ type:{ name: 'VP Business Development - Europe', url:''}, slot: 1}],
        image: 'assets/petal/jmulalic-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Natalie Doré',
        types:[{ type:{ name: 'VP Medical Billing', url:''}, slot: 1}],
        image: 'assets/petal/ndore-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Amélie St-Jean',
        types:[{ type:{ name: 'VP Healthcare Solutions Strategy', url:''}, slot: 1}],
        image: 'assets/petal/astjean-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Mylène Hardy',
        types:[{ type:{ name: 'Director of Legal Affairs', url:''}, slot: 1}],
        image: 'assets/petal/mhardy-500x600.jpg',
        abilities: undefined
    },
    {
        name: 'Sylvain Collard',
        types:[{ type:{ name: 'VP Finances', url: ''}, slot:1}],
        image: 'assets/petal/Sylvain_500x600-500x600.jpg',
        abilities: undefined
    }
];
}
