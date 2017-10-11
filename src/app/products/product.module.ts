import { NgModule } from '@angular/core';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductDetailGuardService } from './product-detail-guard.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPipe } from './product.pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', canActivate: [ProductDetailGuardService], component: ProductDetailComponent }  
  ]),
  ],
  exports:[HttpClientModule],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductPipe
  ],
  providers: [ ProductService, ProductDetailGuardService]
})
export class ProductModule { }
