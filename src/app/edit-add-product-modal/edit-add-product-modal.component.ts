import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-edit-add-product-modal',
  templateUrl: './edit-add-product-modal.component.html',
  styleUrls: ['./edit-add-product-modal.component.css'],
})
export class EditAddProductModalComponent implements OnInit {
  @Output() submitRequested = new EventEmitter<{
    name: string;
    price: number;
  }>();
  @Output() closed = new EventEmitter<void>();
  @Input() selectedProduct: Product | undefined;

  newProductName: string = '';
  newProductPrice: number = 0;

  ngOnInit() {
    if (this.selectedProduct) {
      this.newProductName = this.selectedProduct.name;
      this.newProductPrice = this.selectedProduct.price;
    }
  }

  requestSubmit() {
    if (this.newProductName && this.newProductPrice > 0) {
      const productData = {
        name: this.newProductName,
        price: this.newProductPrice,
      };
      this.submitRequested.emit(productData);
      this.newProductName = '';
      this.newProductPrice = 0;
    }
  }
  close() {
    this.closed.emit();
  }
}
