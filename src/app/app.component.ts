import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { ALLPRODUCTS } from './all-products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  switch: boolean = false;
  cover: boolean = false;
  overlay: boolean = true;

  toggle(): void {
    this.switch = !this.switch;
    this.cover = !this.cover;
    this.overlay = !this.overlay;
  };
    
}

