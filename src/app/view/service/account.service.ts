import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  getAccount(){
    return this.http.get(`${this.baseUrl}/getAccount`)
  }
  updateStatus(data){
    return this.http.post(`${this.baseUrl}/changeStatus`,data)
  }
  getSingleAccount(id){
    const param = new HttpParams().set('_id',id)
    return this.http.put(`${this.baseUrl}/getSingleAccount`,{param})
  }
  saveCustomerAccount(data){
    return this.http.post(`${this.baseUrl}/customerAccount`,data)
  }
}
