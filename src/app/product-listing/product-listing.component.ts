import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {
  brands: any[] = [];
  propBrand: string = '';
  allBrands: any;
  genders:string[] = [];
  products: Product[];
  page: boolean = true;
  show: boolean = false;
  checked:boolean = true;
  name: string;
  list: Product[];
  menFilter: boolean;
  womanFilter: boolean;
  timbsResult: boolean = false;
  nikeResult: boolean = false;
  jordanResult: boolean = false;
  adidasResult: boolean = false;
  airmaxResult: boolean = false;

  



  

  constructor (
    private productService: ProductService, 
    private route: ActivatedRoute,
  ) {}

  

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.products = this.productService.getProducts();
    this.list = this.products.filter(selected => selected.section == this.name);
  }


  showAll() {
    this.show = !this.show;
  }


  checkTimbs(event) {
    this.timbsResult = !this.timbsResult;

    if(this.timbsResult) {
      this.brands.push(event.target.value);
    } else {
      this.brands = this.brands.filter(check => check != event.target.value);
    }
  }

  checkNike(event) {
    this.nikeResult = !this.nikeResult;

    if(this.nikeResult) {
      this.brands.push(event.target.value);
    } else {
      this.brands = this.brands.filter(check => check != event.target.value);
    }
  } 

  checkJordan(event) {
    this.jordanResult = !this.jordanResult;

    if(this.jordanResult) {
      this.brands.push(event.target.value);
    } else {
      this.brands = this.brands.filter(check => check != event.target.value);
    }
  }

  checkAdidas(event) {
    this.adidasResult = !this.adidasResult;

    if(this.adidasResult) {
      this.brands.push(event.target.value);
    } else {
      this.brands = this.brands.filter(check => check != event.target.value);
    }
  }

  checkAirmax(event) {
    this.airmaxResult = !this.airmaxResult;

    if(this.airmaxResult) {
      this.brands.push(event.target.value);
    } else {
      this.brands = this.brands.filter(check => check != event.target.value);
    }
  }




  clearBrand() {
    window.location.reload();
  }


  applyFilter() {
    
    if(this.show) {
      this.list = this.products.filter(all => all.gen == 'male'|| 'female');

      return this.list;
    }

    if (this.brands.length > 0) {
      this.propBrand = 'brand';
     } else {
      window.location.reload();
    }
  }
}
