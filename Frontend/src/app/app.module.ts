
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/messages.component';
import { WebService } from './services/web.service';
import { NewMessagesComponent } from './new-massages/new-massages.component';
import { NavComponent } from './shared/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Register/register.component';
import { AuthService } from './auth.service';

var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessageComponent
  },
  {
    path: 'messages/:name',
    component: MessageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessagesComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    WebService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
