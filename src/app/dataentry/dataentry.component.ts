import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormData } from '../form-data';
import { Validators } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {

  tempdate;
  currentdate;
  profileForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
// tslint:disable-next-line: max-line-length
    phoneNumber: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')]),
    qualification: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  });
  constructor(private service: ApiConnectionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.formData = this.profileForm.value;
    this.service.formData.hour = new Date().getHours();
    this.service.formData.minutes = new Date().getMinutes();
    this.tempdate = new Date();
    alert(this.tempdate);
    this.currentdate = new DatePipe('en-US').transform(this.tempdate, 'dd-MM-yyyy');
    this.service.formData.date = this.currentdate;
    this.service.onSubmit().subscribe(res => console.log('"Inserted"'));
  }

}
