import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Products } from 'src/shared/mocks';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = Products;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  addProduct(product: Product) {
    this.products.push(product);
  }
}
