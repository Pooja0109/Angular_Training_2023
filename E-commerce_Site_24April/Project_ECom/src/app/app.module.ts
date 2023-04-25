import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsChildComponent } from './products/products-child/products-child.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { PipeCategoryPipe } from './products/pipe-category.pipe';
import { PipeRangePipe } from './products/pipe-range.pipe';
import { ComplaintComponent } from './complaint/complaint.component';
import { CommonMenuBarComponent } from './common-menu-bar/common-menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsChildComponent,
    PipeCategoryPipe,
    PipeRangePipe,
    ComplaintComponent,
    CommonMenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
