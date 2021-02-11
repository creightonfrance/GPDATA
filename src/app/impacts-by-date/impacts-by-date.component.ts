import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-impacts-by-date',
  templateUrl: './impacts-by-date.component.html',
  styleUrls: ['./impacts-by-date.component.scss']
})
export class ImpactsByDateComponent implements OnInit {

  constructor(private _http: HttpService) { }

  authToken: string = "";
  stringStartDate: string = "";
  stringEndDate: string = "";
  numImpacts!: number;
  response: any = [];
  downloaded: any;
  offset: number = 0;
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['id', 'created', 'created_by', 'modified', 'modified_by', 'user_id', 'user_first_name', 'user_last_name', 'user_email', 'user_external_id', 'user_image', 'group_id', 'group_name', 'shift_id', 'recur_id', 'event_id', 'impact_type', 'duration_hours', 'impact_start_date', 'impact_end_date', 'category', 'dollar_amount', 'currency', 'donated_goods', 'type', 'verified', 'verified_date', 'verified_by', 'checkin_at', 'checkout_at', 'network_verified', 'network_verified_date', 'network_verified_by_name', 'shared_groups', 'custom_fields', 'custom_field_details', 'latitude', 'longitude', 'tags', 'payment' ],
    showTitle: false,
    title: 'Impacts by Date',
    useBom: false,
    removeNewLines: true,
    filename: "impactsByDate",
    keys: ['id', 'created', 'created_by', 'modified', 'modified_by', 'user_id', 'user_first_name', 'user_last_name', 'user_email', 'user_external_id', 'user_image', 'group_id', 'group_name', 'shift_id', 'recur_id', 'event_id', 'impact_type', 'duration_hours', 'impact_start_date', 'impact_end_date', 'category', 'dollar_amount', 'currency', 'donated_goods', 'type', 'verified', 'verified_date', 'verified_by', 'checkin_at', 'checkout_at', 'network_verified', 'network_verified_date', 'network_verified_by_name', 'shared_groups', 'custom_fields', 'custom_field_details', 'latitude', 'longitude', 'tags', 'payment' ]
  };

  ngOnInit(): void {
    if(sessionStorage.getItem("authToken") != null) {
      this.authToken = sessionStorage.getItem("authToken") || '';
    }
  }

  formatDay(date: Date): string {
    return ((date.getFullYear()) + "-" + (date.getMonth() + 1) + "-" + (date.getDate()));
  }

  addDays(date: Date, days: number): Date {
    var mil = date.valueOf();
    var newDate = new Date(mil + (days * 86400000))
    return newDate;
  }

  fixObjectData(data : any): any {
    for (var field in data[1]) {
      if (data[1][field] instanceof Object) {
        var resultstring: string = "";
        for (var impact in data) {
          for (var entry in data[impact][field]) {
            resultstring = resultstring + data[impact][field][entry] + ", ";
          }
          data[impact][field] = resultstring.substring(0, resultstring.length - 2);
          resultstring = "";
        }
      }
    }
    return data;
  }

  getImpacts(startString: string, endString: string, offset: number) {
    this._http.getImpacts(this.authToken, startString, endString, String(offset)).subscribe((data:any) => {
      this.numImpacts = data.total;
      data.results = this.fixObjectData(data.results);
      this.response = this.response.concat(data.results);
      this.offset = this.offset + 50;
      if (Number(data.total) > Number(data.offset) + 50) {
        this.getImpacts(startString, endString, this.offset);
      } else {
        this.downloaded = "Yes";
      }
    });
  }

  runImpacts() {
    this.offset = 0;
    this.downloaded = null;
    var startDate = new Date(this.stringStartDate);
    var endDate = new Date(this.stringEndDate);
    var startAdded = (this.addDays(startDate, -1));
    var endAdded = (this.addDays(endDate, 1));
    var startString = this.formatDay(startAdded);
    var endString = this.formatDay(endAdded);
    this.getImpacts(startString, endString, this.offset);
  }
}
