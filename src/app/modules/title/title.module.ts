import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from './titles/titles.component';
import { TitleRoutingModule } from './title-routing.module';
import { TitlesItemComponent } from './titles-item/titles-item.component';
import { CommonComponentsModule } from '../common-components/common-components.module';



@NgModule({
  declarations: [
    TitlesComponent,
    TitlesItemComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    TitleRoutingModule,
  ]
})
export class TitleModule { }
