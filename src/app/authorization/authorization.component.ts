import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  token: string = '';
  authToken: string = '';

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("authToken") != null) {
      this.authToken = sessionStorage.getItem("authToken") || '';
    }
  }

  runAuth() {
    this._http.authorizeUser(this.token).subscribe((data:any) => {
      this.authToken = data.token;
      sessionStorage.setItem("authToken", this.authToken);
    });
  }

}
