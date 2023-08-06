import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }
  saveBank(data){
    return this.http.post(`${this.baseUrl}/registerBank`,data)
  }
  getAllBank(){
    return this.http.get(`${this.baseUrl}/getAllBank`)
  }
}
