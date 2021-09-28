import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokeData } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-poke-dialog',
  templateUrl: './poke-dialog.component.html',
  styleUrls: ['./poke-dialog.component.scss']
})
export class PokeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PokeData) {}

  ngOnInit(): void {
  }

}
