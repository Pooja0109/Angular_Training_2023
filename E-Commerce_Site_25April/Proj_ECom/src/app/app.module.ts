import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsChildComponent } from './products/products-child/products-child.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipeCategoryPipe } from './products/pipe-category.pipe';
import { PipeRangePipe } from './products/pipe-range.pipe';
import { ComplaintComponent } from './complaint/complaint.component';
import { CommonMenuBarComponent } from './common-menu-bar/common-menu-bar.component';
import { DetailsComponent } from './products/details/details.component';
import { ReviewFormComponent } from './products/review-form/review-form.component';
import { CollectReviewComponent } from './products/collect-review/collect-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsChildComponent,
    PipeCategoryPipe,
    PipeRangePipe,
    ComplaintComponent,
    CommonMenuBarComponent,
    DetailsComponent,
    ReviewFormComponent,
    CollectReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
