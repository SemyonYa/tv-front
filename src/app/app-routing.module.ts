import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'enter', loadChildren: () => import('./modules/outer/outer.module').then(m => m.OuterModule) },
  { path: 'titles', loadChildren: () => import('./modules/title/title.module').then(m => m.TitleModule) },
  { path: 'tasks', loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      scrollPositionRestoration: 'enabled',
      // useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
