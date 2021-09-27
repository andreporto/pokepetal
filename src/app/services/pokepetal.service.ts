import { Injectable } from '@angular/core';

import { PokeData } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokepetalService {
  pokemons: PokeData[] = [
    {
        name: 'Patrice Gilbert',
        abilities:[{ ability:{ name: 'President'}}],
        image: 'assets/petal/pgilbert-500x600.jpg'
    },    
    {
        name: 'Pascal Tessier-Fleury',
        abilities:[{ ability:{ name: 'General Manager'}}],
        image: 'assets/petal/pfleury-500x600.jpg'
    },    
    {
        name: 'Julie Bergeron',
        abilities:[{ ability:{ name: 'SVP Strategy, Partnerships and Market Access'}}],
        image: 'assets/petal/jbergeron-500x600.jpg'
    },    
    {
        name: 'Arvind Dhillon',
        abilities:[{ ability:{ name: 'VP Product'}}],
        image: 'assets/petal/adhillon-500x600.jpg'
    },
    {
        name: 'Cyrille Mertes',
        abilities:[{ ability:{ name: 'VP Technology'}}],
        image: 'assets/petal/cmertes-500x600.jpg'
    },
    {
        name: 'Dominique Vallée',
        abilities:[{ ability:{ name: 'VP Customer Success'}}],
        image: 'assets/petal/dvallee-500x600.jpg'
    },
    {
        name: 'Corina Chartrand',
        abilities:[{ ability:{ name: 'VP Human Resources'}}],
        image: 'assets/petal/cchartrand-500x600.jpg'
    },
    {
        name: 'Gilbert Boucher',
        abilities:[{ ability:{ name: 'VP Sales'}}],
        image: 'assets/petal/gboucher-500x600.jpg'
    },
    {
        name: 'Jasmin Mulalic',
        abilities:[{ ability:{ name: 'VP Business Development - Europe'}}],
        image: 'assets/petal/jmulalic-500x600.jpg'
    },
    {
        name: 'Natalie Doré',
        abilities:[{ ability:{ name: 'VP Medical Billing'}}],
        image: 'assets/petal/ndore-500x600.jpg'
    },
    {
        name: 'Amélie St-Jean',
        abilities:[{ ability:{ name: 'VP Healthcare Solutions Strategy'}}],
        image: 'assets/petal/astjean-500x600.jpg'
    },
    {
        name: 'Mylène Hardy',
        abilities:[{ ability:{ name: 'Director of Legal Affairs'}}],
        image: 'assets/petal/mhardy-500x600.jpg'
    },
    {
        name: 'Sylvain Collard',
        abilities:[
            { 
                ability:{ name: 'VP Finances'}
            }
        ],
        image: 'assets/petal/Sylvain_500x600-500x600.jpg'
    }
];
}
