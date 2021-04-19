import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'analytics', loadChildren: () => import('./modules/analytic/analytic.module').then(m => m.AnalyticModule) },
  { path: 'calendar', loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'enter', loadChildren: () => import('./modules/outer/outer.module').then(m => m.OuterModule) },
  { path: 'films', loadChildren: () => import('./modules/film/film.module').then(m => m.FilmModule) },
  { path: 'messages', loadChildren: () => import('./modules/message/message.module').then(m => m.MessageModule) },
  { path: 'queries', loadChildren: () => import('./modules/query/query.module').then(m => m.QueryModule) },
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
