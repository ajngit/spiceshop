import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductDetail } from '../admin/Models/ProductDetail';
import { ProductService } from '../admin/Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ProductDetails : ProductDetail[] = [];

  constructor(private ProductService : ProductService,
              private router : Router,
              ){}

  async ngOnInit(){  
    await this.GetProducts();
  }

  async GetProducts(){
    await this.ProductService.GetProducts().subscribe((data)=>{
      console.log('pdata',data);
      this.ProductDetails=data;
     if( !this.ProductDetails ){
      this.ProductDetails=[];
     }
    })
    
}
}