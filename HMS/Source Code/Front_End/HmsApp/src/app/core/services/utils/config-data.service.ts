import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { EnvVariables } from '../../../../environments/environment-variables.token';
import { HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';

declare var window: any;
@Injectable({
  providedIn: 'root'
})
export class ConfigDataProvider {

  public apiEndPoint: string;
  // constructor(@Inject(EnvVariables) public envVariables) {
  //   // , private env: EnvService) {
  //   const configObj = window.config;
  //   this.apiEndPoint = configObj.apiUrl;
  //   this.reportEndPoint = configObj.reportUrl;
  // }
  constructor(@Inject(EnvVariables) public envVariables, private env: EnvService) {
    this.apiEndPoint = this.env.apiUrl;
  }

  /**
   * Function will return header object
   */
  getCommonHeaderOptions() {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
      , responseType: 'text' as 'text'
    };
    return httpOptions;
  }
}
