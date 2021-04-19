import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryRoutingModule } from './query-routing.module';
import { QueriesComponent } from './queries/queries.component';



@NgModule({
  declarations: [QueriesComponent],
  imports: [
    CommonModule,
    QueryRoutingModule,
  ]
})
export class QueryModule { }
