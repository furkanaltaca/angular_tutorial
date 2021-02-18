import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddClasicComponent } from './product/product-add-clasic/product-add-clasic.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'products/category/:categoryId', component: ProductComponent },
  { path: 'product-add-clasic', component: ProductAddClasicComponent },
  { path: 'products-add-reactive', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
