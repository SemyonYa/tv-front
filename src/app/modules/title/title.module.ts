import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TitlesComponent } from './titles/titles.component';
import { TitleRoutingModule } from './title-routing.module';
import { TitlesItemComponent } from './titles-item/titles-item.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import localeRu from '@angular/common/locales/ru';
import { CreateTitleComponent } from './create-title/create-title.component';
import { FavoriteTitlesComponent } from './favorite-titles/favorite-titles.component';
import { ProdComComponent } from './prod-com/prod-com.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    TitlesComponent,
    TitlesItemComponent,
    CreateTitleComponent,
    FavoriteTitlesComponent,
    ProdComComponent,
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
