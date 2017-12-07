import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar} from '@angular/material';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:57612/api';

  messages = [];

  constructor(private http: Http, private sb: MatSnackBar) {
    this.getMessages();
  }

  async getMessages() {
    try {
      var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
      this.messages = response.json();
    } catch (error) {
      this.handleError('Unable to get messages');
    }
  }

  async postMessage(message) {
    try {
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messages.push(response.json());
    } catch (error) {
      this.handleError('Unable to save messages');
    }
  }

  private handleError(error) {
    this.sb.open(error, 'close', {duration: 2000});
  }
}
