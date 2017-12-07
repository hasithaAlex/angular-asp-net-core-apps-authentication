import { Component, OnInit } from '@angular/core';
import { WebService } from './../services/web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  template: `
  <div *ngFor="let message of webService.messages">
    <mat-card class="card">
     <mat-card-title [routerLink]="['/messages',message.owner]" style="cursor: pointer"> {{message.text}}</mat-card-title>
     <mat-card-content> by {{message.owner}} </mat-card-content>
    </mat-card>
  </div>
  `
})

export class MessageComponent {
  constructor(private webService: WebService, private route: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.name);
  }
}
