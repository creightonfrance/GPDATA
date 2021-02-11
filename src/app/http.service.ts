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

  getImpacts(authToken: string, requestStartDate: string, requestEndDate: string, offset: string) {
    const headers = new HttpHeaders({ 'Authorization': "Bearer " + authToken })
    return this.http.get('https://api2.givepulse.com/impacts?limit=50&offset=' + offset + '&date_field1=impact_start_date&date1=' + requestStartDate + '&date_operator1=gt' + '&date_field2=impact_start_date&date2=' + requestEndDate + '&date_operator2=lt', { headers : headers })
  }

}
