import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { GooglePayButtonComponent, GooglePayButtonModule, ReadyToPayChangeResponse } from '@google-pay/button-angular';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,GooglePayButtonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  buttonColor = "black";
  buttonType = "buy";
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 40;
  isTop = window === window.top;

  paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  onLoadPaymentData(event:any) {
    console.log("load payment data", event.detail);
  }
}

