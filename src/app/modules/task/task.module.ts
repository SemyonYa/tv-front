import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskRoutingModule } from './task-routing.module';
import { CommonComponentsModule } from '../common-components/common-components.module';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
