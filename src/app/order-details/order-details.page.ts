import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductsService } from '@app/api/products.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  public currentItem: any;

  constructor(public navCtrl: NavController, public service: ProductsService) { }

  ngOnInit() {
    if(this.service.currentItem){
      this.currentItem = this.service.currentItem;
    }else{
      this.navCtrl.navigateRoot('/orders');
    }
  }

}
