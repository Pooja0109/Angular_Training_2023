import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';

const routes: Routes = [
  {path:"patientView",component:PatientViewComponent},
  {path:"patientDialog/:pooja",component:PatientDialogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
