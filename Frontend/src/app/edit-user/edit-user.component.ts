import { Component, OnInit } from '@angular/core';
import { WebService } from './../services/web.service';
import { Console } from '@angular/core/src/console';

@Component({
    selector: 'app-user',
    templateUrl: './edit-user.component.html'
})

export class UserComponent {

  model = {
    firstName: '',
    lastName: ''
  };

  constructor(private webService: WebService) {  }

  ngOnInit() {
    this.webService.getUser().subscribe(res => {
      this.model.firstName = res.firstName;
      this.model.lastName = res.lastName;
    });
  }

  saveUser(model) {
    this.webService.SaveUser(model).subscribe();
  }
}
