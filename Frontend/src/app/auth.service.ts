import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  BASE_URL = 'http://localhost:57612/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private http: Http, private router: Router) { }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe( res => {

      var authResponce = res.json();

      if(!authResponce.token)
        return;

      localStorage.setItem(this.TOKEN_KEY, authResponce.token);
      localStorage.setItem(this.NAME_KEY, authResponce.firstName);
      this.router.navigate(['/']);
    });
  }
}
