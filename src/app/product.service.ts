import { Injectable } from '@angular/core';
import { Product } from './product';
import { ALLPRODUCTS } from './all-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return ALLPRODUCTS;
  }

  constructor() { }
}
