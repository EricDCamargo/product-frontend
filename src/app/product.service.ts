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
  apiUrl: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct);
  }
  editProduct(updatedProduct: Product): Observable<Product> {
    const url = `${this.apiUrl}/${updatedProduct.id}`;
    return this.http.put<Product>(url, updatedProduct);
  }

  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(url);
  }
}
