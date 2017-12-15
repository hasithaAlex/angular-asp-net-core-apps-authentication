import { WebService } from './../services/web.service';
import { Component } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-new-message',
  template: `
    <mat-card class="card">
      <mat-card-content>
        <!-- <mat-input-container  class="example-full-width">
          <input matInput placeholder="Name" [(ngModel)]="message.owner">
        </mat-input-container> -->
        <mat-input-container class="example-full-width">
          <textarea matInput placeholder="Message"  [(ngModel)]="message.text"></textarea>
        </mat-input-container>
        <mat-card-actions>
          <button mat-button color="primary" (click)="post()">Submit</button>
        </mat-card-actions>
      </mat-card-content>
    </mat-card>
  `
})
export class NewMessagesComponent {


  constructor(private webService: WebService, private auth: AuthService) {}

  message = {
    owner: this.auth.name,
    text: ''
  };

  post() {
    this.webService.postMessage(this.message);
  }
}
