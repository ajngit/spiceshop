import { Component } from '@angular/core';
import { Authenticate } from './models/Authenticate';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  UserData : Authenticate = new Authenticate ();

  constructor(){}

  ngOnInit(){

  }

  Submit(){
    console.log(this.UserData);
    
  }
}
