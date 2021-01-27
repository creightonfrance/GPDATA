import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  authorizeUser(token: string) {
    const headers = new HttpHeaders({ 'Authorization': token })
    return this.http.post('https://api2.givepulse.com/auth', null, { headers : headers })
  }
}
