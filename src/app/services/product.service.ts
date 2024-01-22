import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map from 'rxjs/operators'
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<getResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface getResponse {
  _embedded: {
    products: Product[];
  };
}
