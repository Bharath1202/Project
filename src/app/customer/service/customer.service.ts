import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getCustomerById(id) {
    let params = new HttpParams().set('id', id);
    return this.http.put(`${this.baseUrl}/getCustomerAccount`, { params });
  }
}
