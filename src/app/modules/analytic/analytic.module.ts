import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticRoutingModule } from './analytic-routing.module';



@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticRoutingModule,
  ]
})
export class AnalyticModule { }
