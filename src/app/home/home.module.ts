import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
