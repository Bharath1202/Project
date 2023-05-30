import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = environment.apiUrl + '/game';
  constructor(private http:HttpClient) { }
  gameData():Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
}
