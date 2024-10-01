import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../admin/Services/product.service';
import { map, Observable } from 'rxjs';
import { ProductRegistrationService } from '../details/Service/product-registration.service';
import { SaveResponse } from '../Shared/SaveResponse';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  ProductRegID: any;
  state$: any;

  constructor(private ProductService : ProductService,
    private router : Router,
    private route :ActivatedRoute,
    private ProductRegistrationService:ProductRegistrationService
  ){
     

  }

  async ngOnInit(){
    this.ProductRegID= JSON.parse(this.getProductRegID(), this.ProductRegID);
   
   
  
  }

  getProductRegID(): string {
    let ProductRegID = localStorage.getItem('ProductRegID');
    if(ProductRegID){
      return ProductRegID;
    }else{
      return '';
    }
     
  }
}
