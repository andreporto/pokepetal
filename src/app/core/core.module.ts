import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { PaginatorComponent } from './paginator/paginator.component';
import { PokeDialogComponent } from './poke-dialog/poke-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ListComponent,
    PaginatorComponent,
    PokeDialogComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatDialogModule,
  ]
})
export class CoreModule { }
