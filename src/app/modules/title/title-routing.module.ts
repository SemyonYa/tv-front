import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTitleComponent } from './create-title/create-title.component';
import { TitlesComponent } from './titles/titles.component';
import { FavoriteTitlesComponent } from './favorite-titles/favorite-titles.component';
import { ProdComComponent } from './prod-com/prod-com.component';

const routes: Routes = [
  { path: '', component: TitlesComponent, pathMatch: 'full' },
  { path: 'create', component: CreateTitleComponent, },
  { path: 'favorite', component: FavoriteTitlesComponent },
  { path: 'prodcom', component: ProdComComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleRoutingModule { }
