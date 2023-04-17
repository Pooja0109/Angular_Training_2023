import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogExamplesComponent } from './dialog-examples/dialog-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogExamplesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule      // Material module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
 
}
