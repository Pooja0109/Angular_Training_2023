import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {
  httpOptions: any;
  constructor(private http: HttpClient) { }
  getDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:4600/productlist/" + id)
  }


  postReview(obj: any): Observable<any> {
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post("http://localhost:4600/reviews", obj, this.httpOptions);
  }

  getReview():Observable<any>
  {
    return this.http.get("http://localhost:4600/reviews")
  }
  
}
