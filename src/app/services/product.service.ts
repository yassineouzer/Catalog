import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! :Array<any>;

  constructor() { 
    this.products=[
      {id:1,name:"computer", price:87000},
      {id:2,name:"imprimante", price:1400},
      {id:1,name:"smartphone", price:1200},
      ]
  }

  getAllProduct():Observable<Array<any>>{
    return of(this.products);
   }


}
