import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Route, Router } from '@angular/router';
import { NewProductComponent } from '../new-product/new-product.component';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products! : Array<Product>;
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
     )}

     HandleDeleteProduct(p :Product){
       this.productService.deleteProduct(p.id).subscribe(
       {
        next: (data: any) => { 
          this.products = data ;
        }});
     }
     HandleNewProduct(){
       return this.router.navigateByUrl("NewProduct")
     }

    
    
        
       }
      

  

    

  


