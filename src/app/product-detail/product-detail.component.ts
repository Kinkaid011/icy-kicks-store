import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: Product[];
  detail: boolean = false;
  name: string;
  id: any;
  item: Product;

  constructor (
    private productService: ProductService, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.id = this.route.snapshot.paramMap.get('id');
    this.products = this.productService.getProducts();
    this.item = this.products.find(selected => selected.id == this.id);
  }

}
