import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // selectedProduct = ALLPRODUCTS.find(selected => selected.id == 3);
  //The 'selected' item is the ENTIRE object 

  // According to MDN: window.name will convert all values to their string representations by using the toString method.

  // When toString is applied to an object, the output will be [object object].

  // trendingTwo = ALLPRODUCTS.find(selected => selected.name == "Trending Two");

  // mostWanted = ALLPRODUCTS.filter(item => item.section == "most")
 
  // products = ALLPRODUCTS;   

  @Input() selectedProduct: Product;
 
  page = true;

  constructor() { }

  ngOnInit() { }

}
