import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  private baseUrl = environment.apiUrl + '/newPassword';
  constructor(private http:HttpClient) { }

  resetPassword(data){
    return this.http.post(`${this.baseUrl}`,data)
  }
}
