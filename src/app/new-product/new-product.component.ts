import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  ProductFormGroup! :FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ProductFormGroup=this.fb.group(
      {
        name : this.fb.control(null,[Validators.required,Validators.minLength(4)]),
        price : this.fb.control(null,[Validators.required])
      }
    );
  }

  HandleAddProduct(){
  console.log(this.ProductFormGroup.value);
  }

}
