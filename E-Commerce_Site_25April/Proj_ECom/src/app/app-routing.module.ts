import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { DetailsComponent } from './products/details/details.component';

const routes: Routes = [
  {path:"",component:ProductsComponent},
  {path:"products",component:ProductsComponent},
  {path:"complaint",component:ComplaintComponent},
  {path:"details/:pooja",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
