import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterRoutingModule } from './outer-routing.module';
import { EnterComponent } from './enter/enter.component';



@NgModule({
  declarations: [
    EnterComponent,
  ],
  imports: [
    CommonModule,
    OuterRoutingModule,
  ]
})
export class OuterModule { }
