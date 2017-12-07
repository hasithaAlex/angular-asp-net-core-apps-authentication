import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    }, {
      validator: machingFields('password', 'ConfirmPassword')
    });
  }

  onSubmit() {
    console.log(this.form.errors);
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
