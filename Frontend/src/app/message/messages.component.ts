import { Component, OnInit } from '@angular/core';
import { WebService } from './../services/web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  template: `
  <div *ngFor="let message of webService.messages | async">
    <mat-card class="card">
     <mat-card-title [routerLink]="['/messages',message.owner]" style="cursor: pointer"> {{message.text}}</mat-card-title>
     <mat-card-content> by {{message.owner}} </mat-card-content>
    </mat-card>
  </div>
  `
})

export class MessageComponent {

  messages;

  constructor(private webService: WebService, private route: ActivatedRoute ) { }

  ngOnInit() {
    var name = this.route.snapshot.params.name;
    this.webService.getMessages(name);
    this.webService.getUser().subscribe();
  }
}
