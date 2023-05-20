import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  public emailId;
  private baseUrl = environment.apiUrl + '/email';
  constructor(private http:HttpClient) { }

  sendEmail(data){
    return this.http.post(`${this.baseUrl}`,data)
  }
}
