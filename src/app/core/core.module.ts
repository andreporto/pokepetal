import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ListComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule
  ]
})
export class CoreModule { }
