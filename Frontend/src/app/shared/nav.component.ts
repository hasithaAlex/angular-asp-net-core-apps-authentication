import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
    <mat-toolbar color="primary">
      <button mat-button routerLink="/"><span>Message Bord</span></button>
      <button mat-button routerLink="/messages">Messages</button>
      <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
    `
})

export class NavComponent {
  constructor() {  }
}
