import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

httpOptions:any;

  constructor(private http:HttpClient) { }
  getServices():Observable<any>
  {
    return this.http.get("http://localhost:4500/feedbacks")
  }
  postFeedback(obj:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })

  return this.http.post("http://localhost:4500/feedbacks",obj,this.httpOptions);
  
 }
}
