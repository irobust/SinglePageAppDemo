import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product-list/product';

@Injectable()
export class ProductService {

  private _apiURL = './api/products/products.json';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._apiURL)
              .do((data) => console.log(data));
  }

  getProduct(id: number): Observable<IProduct>{
    return this.getProducts()
               .map((products: IProduct[]) => products.find(p => p.productId === id))
  }

}
