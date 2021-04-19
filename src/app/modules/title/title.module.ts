import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TitlesComponent } from './titles/titles.component';
import { TitleRoutingModule } from './title-routing.module';
import { TitlesItemComponent } from './titles-item/titles-item.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    TitlesComponent,
    TitlesItemComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    TitleRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ]
})
export class TitleModule { }
