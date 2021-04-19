import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmRoutingModule } from './film-routing.module';
import { FilmsComponent } from './films/films.component';



@NgModule({
  declarations: [
    FilmsComponent,
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
  ]
})
export class FilmModule { }
