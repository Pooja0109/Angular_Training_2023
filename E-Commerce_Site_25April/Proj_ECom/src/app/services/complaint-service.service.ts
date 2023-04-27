import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintServiceService {
  httpOptions:any;
  constructor(private http:HttpClient){

  }
  postComplaint(obj:any):Observable<any>{

      this.httpOptions =  new HttpHeaders({
        'Content-Type':  'application/json',
      })

    return this.http.post("http://localhost:4600/complaints",obj,this.httpOptions);
   }

}
