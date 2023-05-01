import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  addPatient(temp:any):Observable<any>
  {
    return this.http.post("http://localhost:3000/patients",temp)
  }

  getPatient():Observable<any>
  {
    return this.http.get("http://localhost:3000/patients")
  }

  getPatientLst(id: number):Observable<any>
  {
    return this.http.get("http://localhost:3000/patients/"+id)
  }

  //DELETION
  getPatDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/patients/"+id)
  }

  deletePatient(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:3000/patients/"+id)
  }
}
