import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Route, Router } from '@angular/router';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products! : Array<any>;
  Errormessage! :string;
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {

  this.productService.getAllProduct().subscribe(
    {
      next: (data: any) => { 
        this.products = data ;
      },
      error: (error)=>{
        this.Errormessage=error;
     }
      
     }
     )
     
      
    }

    HandleNewProduct(){
      this.router.navigateByUrl("NewProduct");
    }
    

    

  }


