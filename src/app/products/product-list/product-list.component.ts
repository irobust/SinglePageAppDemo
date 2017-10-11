import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../product.service';

import { remove } from 'lodash';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: Object[] = [];
  private asyncProducts: Observable<Object[]>;
  private txtFilter: string;
  private ratingResult: string;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.asyncProducts = this._productService.getProducts();
    this.asyncProducts.subscribe(products => {
            this.products = products;
        }, error => { console.log('Error!') });
  }

  doRemove(id: number){
    
    remove(this.products, function(product: IProduct){
      return (product.productId == id)
    });
    console.log(this.products);
  }

  doRatingClicked(result: string){
    this.ratingResult = result;
  }
}
