import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductDetail } from '../Models/ProductDetail';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {

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
