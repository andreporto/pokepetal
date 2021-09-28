import { Component, Inject, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { PokepetalService } from '../../services/pokepetal.service';
import { tap, map, switchMap } from 'rxjs/operators'
import { PokeData, PokeMode, Pokemon } from 'src/app/model/Pokemon';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PokeDialogComponent } from '../poke-dialog/poke-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{

  @Input() pokemons:PokeData[] = [];

  public constructor(public dialog: MatDialog) {}
  
  openDialog(pokemon: PokeData) {
    this.dialog.open(PokeDialogComponent, {data:pokemon});
  }
}


