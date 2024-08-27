import { Component } from '@angular/core';
import { UserData } from '../Models/UserData';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-user-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-user-details.component.html',
  styleUrl: './admin-user-details.component.css'
})
export class AdminUserDetailsComponent {

  UserData : UserData[] = [];

  constructor(private ProductService : ProductService,
              private router : Router,
              ){}

  async ngOnInit(){  
    await this.GetProducts();
  }

  async GetProducts(){
    await this.ProductService.GetUsers().subscribe((data)=>{
      console.log('pdata',data);
      this.UserData=data;
     if( !this.UserData ){
      this.UserData=[];
     }
    })
    
}

}


