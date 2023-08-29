import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css'],
})
export class AddProductModalComponent {
  newProductName: string = '';
  newProductPrice: number = 0;

  @Output() closed = new EventEmitter<void>();

  constructor(private productServce: ProductService) {}
  getMaxProductId(): number {
    let maxId = 0;
    for (const product of this.productServce.products) {
      if (product.id > maxId) {
        maxId = product.id;
      }
    }
    return maxId;
  }
  getNextProductId(): number {
    const maxId = this.getMaxProductId();
    return maxId + 1;
  }

  addProduct() {
    if (this.newProductName && this.newProductPrice > 0) {
      const newProduct: Product = {
        id: this.getNextProductId(),
        name: this.newProductName,
        price: this.newProductPrice,
      };
      this.productServce.addProduct(newProduct);
      this.close();
    }
  }

  close() {
    this.closed.emit();
  }
}
