import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [AppComponent, ProductsComponent, AddProductModalComponent],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
