import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlesComponent } from './titles/titles.component';

const routes: Routes = [
  { path: '', component: TitlesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleRoutingModule { }
