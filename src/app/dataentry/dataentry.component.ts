import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormData } from '../form-data';
import { Validators } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
// tslint:disable-next-line: max-line-length
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')]),
    qualification: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  constructor(private service: ApiConnectionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.formData = this.profileForm.value;
    this.service.formData.hour = new Date().getHours();
    this.service.formData.minutes = new Date().getMinutes();
    this.service.onSubmit();
  }

}
