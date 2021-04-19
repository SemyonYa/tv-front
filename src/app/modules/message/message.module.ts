import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { MessageRoutingModule } from './message-routing.module';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
  ]
})
export class MessageModule { }
