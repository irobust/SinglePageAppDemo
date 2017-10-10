import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../product.service';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: Object[] = [];
  private asyncProducts: Observable<Object[]>;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.asyncProducts = this._productService.getProducts();
    // .subscribe(products => {
    //     this.products = products;
    // }, error => { console.log('Error!') });
  }
}
