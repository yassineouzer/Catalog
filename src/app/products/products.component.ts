import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Route, Router } from '@angular/router';
import { NewProductComponent } from '../new-product/new-product.component';
import { FormGroup } from '@angular/forms';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products! : Array<Product>;
  Errormessage! :string;
  ProductFormGroup! :FormGroup;

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

     HandleDeleteProduct(pro:Product){
        let conf=confirm("Are you sure");
        if(conf==false) return;
        this.productService.deleteProduct(pro.id).subscribe({
          next:(data)=>{
            let index=this.products.indexOf(pro)
       this.products.splice(index,1);
          },
        })
        }


     HandleNewProduct(){
       return this.router.navigateByUrl("NewProduct")
     }
    
   
    
    
        
       }
      

  

    

  


