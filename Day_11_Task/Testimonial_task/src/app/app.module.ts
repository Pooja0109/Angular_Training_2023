import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ContactComponent } from './pages/contact/contact.component'
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { TestimonialBoxComponent } from './pages/testimonial/testimonial-box/testimonial-box.component';
import { QuoteITPipe } from './pipes/quote-it.pipe';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { FeedbackFormComponent } from './pages/testimonial/feedback-form/feedback-form.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    TestimonialComponent,
    ContactComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    TestimonialBoxComponent,
    QuoteITPipe,
    EnquiryFormComponent,
    DetailsComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

