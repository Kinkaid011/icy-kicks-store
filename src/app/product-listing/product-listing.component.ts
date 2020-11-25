import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {

  products: Product[];
  page: boolean = true;
  name: string;
  items: Product[];
  item: Product;
  mostWanted: Product[];
  

  constructor (
    private productService: ProductService, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.products = this.productService.getProducts();

    this.items = this.products.filter(item => item.section == this.name);
  }


}
