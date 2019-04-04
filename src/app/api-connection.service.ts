import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData } from './form-data';
import { ResponseClass } from './response-class';
import { Observable } from 'rxjs';
import { CurrentDateTime } from './current-date-time';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  public formData: FormData;
  public showError: boolean;
  public currentdatetime: CurrentDateTime;
  constructor(private http: HttpClient) {
    this.showError = false;
   }

  onSubmit() {
    const result = this.http.post(`https://localhost:44397/api/data`, this.formData);
    return result;
  }

  onCheck() {
    const result = this.http.post(`https://localhost:44397/api/check`, this.currentdatetime);
    return result;
  }

}
