import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ApiConnectionService) { }
  ngOnInit() {
  }

  onCheck() {
    this.service.currentdatetime.date = new Date().getDate().toString();

    this.service.currentdatetime.hours = new Date().getHours().toString();
    alert(this.service.currentdatetime.hours);
    this.service.currentdatetime.minutes = new Date().getMinutes().toString();
    this.service.onCheck();
  }

}
