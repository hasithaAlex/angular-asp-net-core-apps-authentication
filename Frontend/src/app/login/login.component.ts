import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .error {
    background-color: red
  }
`]
})

export class LoginComponent {
  form;
  constructor(private fb: FormBuilder,private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required],
    });
  }

  loginData = {
    email: '',
    password: ''
  };

  isValied(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

  login() {
    this.auth.login(this.loginData);
  }

  // onSubmit() {
  //   console.log(this.form.value);
  //   this.auth.login(this.form.value);
  // }
}

function emailValid() {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(control.value) ? null : { invalidEmail: true };
  }
}
