import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GooglePayButtonComponent, GooglePayButtonModule, ReadyToPayChangeResponse } from '@google-pay/button-angular';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,RouterModule,GooglePayButtonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '17613812255336763067',
      merchantName: 'Demo Only (you will not be charged)'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '10.00', // or any other valid amount
      currencyCode: 'INR', // Set currency code to INR
      countryCode: 'IN'
    }
  };

  

  

  constructor() {}

  ngOnInit() {
    
  }

  async onLoadPaymentData(event: Event) {
    console.log(event);
    const paymentData = (event as CustomEvent<google.payments.api.PaymentData>).detail;
    console.log(paymentData);
    // Here you can handle the payment data as needed for testing purposes.
}
}
