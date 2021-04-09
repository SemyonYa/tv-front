import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { DialogComponent } from './dialog/dialog.component';
import { InProgressComponent } from './in-progress/in-progress.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    IconComponent,
    DialogComponent,
    InProgressComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    MenuComponent,
    HeaderComponent,
    IconComponent,
    DialogComponent,
    InProgressComponent,

  ]
})
export class CommonComponentsModule { }
