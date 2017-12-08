import { Component } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
    selector: 'app-nav',
    template: `
    <mat-toolbar color="primary">
      <button mat-button routerLink="/"><span>Message Bord</span></button>
      <button mat-button routerLink="/messages">Messages</button>
      <button mat-button routerLink="/register">Register</button>
      <button *ngIf="auth.isAuthenticated" mat-button routerLink="/">Welcome {{auth.name}}</button>
    </mat-toolbar>
    `
})

export class NavComponent {
  constructor(private auth: AuthService) {  }
}
