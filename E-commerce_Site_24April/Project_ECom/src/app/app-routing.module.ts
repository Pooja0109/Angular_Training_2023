import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes = [
  {path:"",component:ProductsComponent},
  {path:"products",component:ProductsComponent},
  {path:"complaint",component:ComplaintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
