import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  ProductFormGroup! :FormGroup;
  constructor(private fb:FormBuilder,private prodService :ProductService) { }


  
  ngOnInit(): void {
    this.ProductFormGroup=this.fb.group(
      {
        name : this.fb.control(null,[Validators.required,Validators.minLength(4)]),
        price : this.fb.control(null,[Validators.required])
      }
    );
  }

  HandleAddProduct(){
    let product=this.ProductFormGroup.value;
    this.prodService.AddNewProduct(product).subscribe({
      next:(data:any)=>{
        alert("product added successful");
      },
      error:(err)=>{
        console.log(err);

      },
    })
  }
  getErrorMessage(name:string,errors:ValidationErrors){
  
    
    if(errors['required']){
      return name+ " is required";
    }else if (errors['minlength']){
      return name+" should have at least" +errors ['minlength'] ['requiredLength'] + "characters";
    } return "";
        
  }



}
