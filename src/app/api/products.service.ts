import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  public products: any;
  public currentItem: any;
  // public apiUrl: string = "https://gm50ml1rtc.execute-api.ap-southeast-1.amazonaws.com/default/testOrder";
  public apiUrl: string = "https://goodywebs.github.io/webapi/ecomapi.json";
  

  constructor(private http: HttpClient) {

  }

  public getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl).subscribe(data => {
        console.log(data);
        this.products = data;
        resolve();
      });
    })
    
  }

}
