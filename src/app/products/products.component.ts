import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isProductModalOpen = false;
  products: Product[] = [];
  selectedProduct: Product | undefined = undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addOrEditProduct(data: { name: string; price: number }) {
    if (!data.name || data.price <= 0) {
      return;
    }
    const newProduct: Product = {
      id: this.selectedProduct?.id ?? this.generateNewId(),
      name: data.name,
      price: data.price,
    };
    const productServiceMethod = this.selectedProduct
      ? () => this.productService.editProduct(newProduct)
      : () => this.productService.addProduct(newProduct);

    productServiceMethod().subscribe(() => {
      this.closeProductModal();
      this.getProducts();
    });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    });
  }
  generateNewId = () => {
    let newId = 1;
    while (this.products.some((exam) => exam.id === newId)) {
      newId++;
    }
    return newId;
  };

  openProductModal(product?: Product) {
    product && (this.selectedProduct = product);
    this.isProductModalOpen = true;
  }

  closeProductModal() {
    this.isProductModalOpen = false;
    this.selectedProduct = undefined;
  }
}
