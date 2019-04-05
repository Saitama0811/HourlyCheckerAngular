import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { DatePipe } from '@angular/common';
import { CurrentDateTime } from '../current-date-time';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tempdate;
  curhour;
  curminute;
  currentdate;
  response;
  public currentdatetime: CurrentDateTime;
  constructor(private service: ApiConnectionService) { }
  ngOnInit() {
  }

  onCheck() {
    this.curhour = new Date().getHours().toString();
    this.curminute = new Date().getMinutes().toString();
    this.tempdate = new Date();
    this.currentdate = new DatePipe('en-US').transform(this.tempdate, 'dd-MM-yyyy');
    alert(this.currentdate);
    this.service.onCheck(this.curhour, this.curminute, this.currentdate).subscribe(res => {
      console.log(res);
      this.response = res; });
    if (this.response === true) {
      this.service.showError = false;
    }    else {
      this.service.showError = true;
    }
  }

}
