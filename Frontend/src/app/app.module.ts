
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages.component';
import { WebService } from './web.service';
import { NewMessagesComponent } from './new-massages.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';

var routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessageComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessagesComponent,
    NavComponent,
    HomeComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
