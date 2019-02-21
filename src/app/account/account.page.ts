import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../api/products.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public account: any;

  constructor(public service: ProductsService) { }

  ngOnInit() {
    if(this.service.products){
      this.account = this.service.products;
    }else{
      this.service.getProducts().then(()=>{
        this.account = this.service.products;
      });
    }
  }

  public getGoogleMap(evt){
    const url = 'http://maps.google.com/maps?q='+ this.account.latitude + ',' + this.account.longitude
    window.open(url, '_blank');
  }
}
