import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userForms: FormGroup;
  formValue = [];

  constructor(private fb: FormBuilder) {
    this.userForms = this.fb.group({
      Uname: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  submit() {
    console.log(this.userForms.value);
    this.formValue.push(this.userForms.value);
    console.log(this.formValue);
  }
}
