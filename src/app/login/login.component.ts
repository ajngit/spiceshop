import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   password: string = '';
   email: string = '';

  // constructor(private router: Router) {

  // }
  // async ngOnInit() {
  // }
  // login() {
  //   debugger;
  //   if (this.pswd===123 &&  this.email==='abc@gmail.com') {
  //     alert('Login Success');
  //   }
  // }


  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  login() {
    debugger;
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email === 'abc@gmail.com' && password === '123') {
        alert('Login Success');
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('Please enter valid email and password');
    }
  }
}
