import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  getAllCustomerAcc(){
    return this.http.get(`${this.baseUrl}/getAllCustomerAccount`)
  }
  updateStatus(data){
    return this.http.post(`${this.baseUrl}/changeStatus`,data)
  }
}
