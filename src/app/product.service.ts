import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  private _apiURL = './api/products/products.json';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Object[]>{
    return this._http.get<Object[]>(this._apiURL)
              .do((data) => console.log(data))
              .catch((err: HttpErrorResponse) => {console.log(err); return Observable.throw(err.error.message)});
  }

}
