import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! :Array<Product>;
  
  constructor() { 
    this.products=[
      {id:1,name:"computer", price:87000},
      {id:2,name:"imprimante", price:1400},
      {id:1,name:"smartphone", price:1200},
      ]
  }

  getAllProduct():Observable<Array<Product>>{
    return of(this.products);
   }

public deleteProduct(id:number):Observable<Array<Product>>{
this.products=this.products.filter(product=>product.id!=id)
return of(this.products);
}

}
