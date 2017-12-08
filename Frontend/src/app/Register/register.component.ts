import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styles: [`
    .error {
      background-color: green
    }
  `]
})

export class RegisterComponent {
  form;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    }, {
      validator: machingFields('password', 'ConfirmPassword')
    });
  }

  onSubmit() {
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  }

  isValied(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }
}


function machingFields(field1, field2) {
  return from => {
    if (from.controls[field1].value !== from.controls[field2].value) {
      return { mismatchedFields: true }
    }
  }
}

function emailValid() {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(control.value) ? null : { invalidEmail: true };
  }
}
