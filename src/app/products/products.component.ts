import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products! : Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.products=[
    {id:1,name:"computer", price:6500},
    {id:2,name:"imprimante", price:1400},
    {id:1,name:"smartphone", price:1200},
    ]

    

  }

}
