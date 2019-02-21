import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../api/products.service';
import { NavController } from '@ionic/angular';
import { OrderDetailsPage } from '../order-details/order-details.page';
  
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  public orders: any;


  constructor(public navCtrl: NavController, public service: ProductsService) { }

  ngOnInit() {
    if(this.service.products){
      this.orders = this.service.products;
    }else{
      this.service.getProducts().then(()=>{
        this.orders = this.service.products;
      });
    }
  }


  gotoProductDetails(product){
    this.service.currentItem = product;
    this.navCtrl.navigateRoot('/order-details');
  }

}
