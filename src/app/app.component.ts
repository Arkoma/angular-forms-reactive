import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female', 'other', 'prefer not to say'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
      }),
      'gender': new FormControl('prefer not to say'),
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
