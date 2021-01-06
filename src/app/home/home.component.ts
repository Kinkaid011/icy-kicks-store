import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { InfoService } from '../info.service';
import { Product } from '../product';
import { ALLPRODUCTS } from '../all-products';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title: string = 'kinkaid';
  products: Product[];
  selection: Product;
  trendingone: Product;
  trendingtwo: Product;
  mostWanted: Product[];
  detail: boolean = true;
  options: boolean = true;

  constructor (private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();

    this.selection = this.products.find(selected => selected.id == 3);
    this.trendingone = ALLPRODUCTS.find(selected => selected.id == 7);
    this.trendingtwo = ALLPRODUCTS.find(selected => selected.id == 25);
    this.mostWanted = ALLPRODUCTS.filter(item => item.section == "Most Wanted");
  }

}
