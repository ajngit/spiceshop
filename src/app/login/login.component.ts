import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  pswd: number = 123;
  email: string = 'abc@gmail.com';
  constructor() {

  }
  async ngOnInit() {
  }
  login(email:string,pswd:number) {
    debugger;
    if (this.pswd === pswd && this.email === email) {
      alert('Login Success');
    }
  }

}
