import { Component } from '@angular/core';

import { MessageComponent } from './../message/messages.component';
import { NewMessagesComponent } from './../new-massages/new-massages.component';

@Component({
  selector: 'app-home',
  template: `
  <app-new-message></app-new-message>
  <app-message></app-message>
  `
})
export class HomeComponent {
  title = 'my app';

}
