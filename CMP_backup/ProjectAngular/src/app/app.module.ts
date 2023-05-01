import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReceptionistModule } from './receptionist/receptionist.module';
import { ActivatedRoute } from '@angular/router';
import { LazyLoadComponent } from './shared/lazy-load/lazy-load.component';
import { DoctorModule } from './doctor/doctor.module';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReceptionistModule,
    DoctorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
