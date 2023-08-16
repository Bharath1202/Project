import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl + '/login';
  private register = environment.apiUrl + '/register';
  constructor(private httpClient: HttpClient, private router: Router) { }

  postlogin(data) {
    return this.httpClient.post<any>(`${this.baseUrl}`, data).pipe(map(user => {
      if (user?.result && user?.result?.token) {
        let userDetail = user?.result?.userDetails
        let loginType = user?.result?.loginType
        localStorage.setItem('userDetail', JSON.stringify(userDetail));
        localStorage.setItem('loginType', loginType);
        localStorage.setItem('token', user?.result?.token)
        localStorage.setItem('loggedIn', 'true');
      }
      return user;
    }))
  }
  saveUser(data) {
    return this.httpClient.post(`${this.register}`, data)
  }
  isLogin() {
    return !!localStorage.getItem('loggedIn');
  }
  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userDetail');
    localStorage.removeItem('token');
    localStorage.removeItem('loginType');
    this.router.navigate(['/auth/login']);
  }
}
