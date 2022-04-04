import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, timeout, catchError } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { EndPointService } from 'src/app/core/http/end-point.service';
import { ModuleConstants } from 'src/app/core/constants/constants';
import { CommonUtilsService } from '../utils/common-utils.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private baseHttp: BaseHttpService, private endpoint: EndPointService,
              private commonUtilsProvider: CommonUtilsService) { }

  /**
   * Function will get doctors list
   */
   getDoctorsList(): Observable<any> {
    return this.baseHttp.post(this.endpoint.getDoctorsList,'')
      .pipe(
        timeout(ModuleConstants.apiTimeout),
        map((res) => this.commonUtilsProvider.extractData(res)),
        catchError((err) => this.commonUtilsProvider.catchError(err))
      );
  }

  /**
   * Function will get hospital branches list
   */
   getHospitalBranchList(): Observable<any> {
    return this.baseHttp.post(this.endpoint.getHospitalBranchList,'')
      .pipe(
        timeout(ModuleConstants.apiTimeout),
        map((res) => this.commonUtilsProvider.extractData(res)),
        catchError((err) => this.commonUtilsProvider.catchError(err))
      );
  }

  /**
   * Function will get patient list
   */
   getPatientsList(): Observable<any> {
    return this.baseHttp.post(this.endpoint.getPatientsList,'')
      .pipe(
        timeout(ModuleConstants.apiTimeout),
        map((res) => this.commonUtilsProvider.extractData(res)),
        catchError((err) => this.commonUtilsProvider.catchError(err))
      );
  }


}
