import { Component } from '@angular/core';

import { MessageComponent } from './messages.component';
import { NewMessagesComponent } from './new-massages.component';

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
