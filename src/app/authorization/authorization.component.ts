import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';
  token: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

}
