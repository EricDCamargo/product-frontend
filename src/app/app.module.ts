import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EditAddProductModalComponent } from './edit-add-product-modal/edit-add-product-modal.component';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [AppComponent, ProductsComponent, EditAddProductModalComponent],
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
