import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient,
  ) { }

  getList(): Observable<any> {
    const url = 'http://localhost:3000/api/v1/banks';
    return this.http.get<any>(url);
  }

  testPost(): Observable<any> {
    const url = 'http://localhost:3000/api/v1/banks';
    const data = {
      name: 'Cler',
      swift: null,
      clearing: null,
      address: null,
      postalCode: '6900',
      locality: 'Lugano',
      country: 'CH'
    };
    return this.http.post<any>(url, data);
  }

  testDelete(): Observable<any>{
    const url = 'http://localhost:3000/api/v1/banks/12';
    return this.http.delete<any>(url);
  }

}
