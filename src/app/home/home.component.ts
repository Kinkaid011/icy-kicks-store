import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { InfoService } from '../info.service';
import { Product } from '../product';
import { ALLPRODUCTS } from '../all-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title: string = 'kinkaid';
  products: Product[];
  selection: Product;
  trendingtwo: Product;
  mostWanted: Product[];

  constructor (private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();

    this.selection = this.products.find(selected => selected.id == 3);
    this.trendingtwo = ALLPRODUCTS.find(selected => selected.id == 5);
    this.mostWanted = ALLPRODUCTS.filter(item => item.section == "wanted");
  }

}
