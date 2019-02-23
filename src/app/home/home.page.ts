import { Component } from '@angular/core';

import { ProductsService } from '@app/api/products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public service: ProductsService) { }

  ngOnInit(){
    this.service.getProducts().then(()=>{
      console.log(this.service.products);
    });
  }

}
