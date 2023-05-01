import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MaterialModule } from '../material/material.module';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientCardsComponent } from './patient-view/patient-cards/patient-cards.component';
import { ActivatedRoute } from '@angular/router';
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    TitleBarComponent,
    AddEditPatientComponent,
    PatientViewComponent,
    PatientCardsComponent,
    PatientDialogComponent,
    SearchPipePipe
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
  ,exports:[
    TitleBarComponent,
    AddEditPatientComponent,
    PatientViewComponent
  ]
})
export class ReceptionistModule { 
  
}
