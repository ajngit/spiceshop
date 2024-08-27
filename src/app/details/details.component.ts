import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductDetail } from '../admin/Models/ProductDetail';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../admin/Services/product.service';
import { map, Observable } from 'rxjs';
import { Registration } from './Models/Registration';
import { FormsModule } from '@angular/forms';
import { ProductRegistrationService } from './Service/product-registration.service';
import { SaveResponse } from '../Shared/SaveResponse';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  ProductDetails : ProductDetail =new ProductDetail();
  ProductID: number=0;
  state$: Observable<any> | undefined;
  Registration : Registration = new Registration();
  ProductRegID: number=0;

  constructor(private ProductService : ProductService,
    private router : Router,
    private route :ActivatedRoute,
    private ProductRegistrationService:ProductRegistrationService
  ){
      this.state$ = this.route.paramMap.pipe( map(() => window.history.state), ); 
     // platformLocation.onPopState(() => {});

  }

  async ngOnInit(){
    await this.state$?.subscribe((params) => 
      { if (params.ProductID !== null && params.ProductID !== undefined && params.ProductID > 0) 
        { this.ProductID = parseInt(params.ProductID); } 
        //console.log('ProductID', this.ProductID); // ProductID }); 
      });


  await this.GetProductDetails();
  }



  async GetProductDetails(){
    await this.ProductService.GetProductByID(this.ProductID).subscribe((data)=>{
      console.log('pdata',data);
     
      this.ProductDetails=data;
      if(data instanceof Array){
        this.ProductDetails=data[0];
      }
     if( !this.ProductDetails ){
      this.ProductDetails= new ProductDetail();
     }
    })
    
}

async AddToCart(){

debugger;
  this.Registration.ProductID=this.ProductID;
  this.Registration.Calculate(this.ProductDetails);
  console.log('test reg',this.Registration);

  this.ProductRegistrationService.SaveRegistration(this.Registration)
    .subscribe((data) => {
      console.log(data);
      let resp = new SaveResponse();
      resp = data;
      debugger;
      if (resp.Saved == true) {
        alert("Added To cart!");
        console.log('added');
        this.ProductRegID = resp.ID;
        localStorage.setItem('ProductRegID', JSON.stringify(this.ProductRegID));

        this.router.navigate(['cart']);
      }
    })
  

}

}
