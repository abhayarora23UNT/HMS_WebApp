import { Injectable } from '@angular/core';
import { Observable, timeout, map, catchError } from 'rxjs';
import { ModuleConstants } from '../../constants/constants';
import { BaseHttpService } from '../../http/base-http.service';
import { EndPointService } from '../../http/end-point.service';
import { CommonUtilsService } from '../utils/common-utils.service';

@Injectable({
    providedIn: 'root'
})
export class DoctorAppointmentService {


    constructor(private baseHttp: BaseHttpService,
        private endpoint: EndPointService,
        private commonUtilsProvider: CommonUtilsService) {

    }


    /**
     * Function will return doctor appointment list
     * @param requestData payload for register user api
     */
    getDocAppointmentList(requestData: any): Observable<any> {
        return this.baseHttp.post(this.endpoint.getDocAppointmentList, requestData)
            .pipe(
                timeout(ModuleConstants.apiTimeout),
                map((res) => this.commonUtilsProvider.extractData(res)),
                catchError((err) => this.commonUtilsProvider.catchError(err))
            );
    }

    /**
     * Method to create new appointment for doctor
     * @param requestData 
     * @returns 
     */
    createDocAppointment(requestData: any) {
        return this.baseHttp.post(this.endpoint.createDocAppointment, requestData)
            .pipe(
                timeout(ModuleConstants.apiTimeout),
                map((res) => this.commonUtilsProvider.extractData(res)),
                catchError((err) => this.commonUtilsProvider.catchError(err))
            );
    }

    /**
     * Method to edit existing appointment for doctor
     * @param requestData 
     * @returns 
     */
    editDocAppointment(requestData: any) {
        return this.baseHttp.put(this.endpoint.editDocAppointment, requestData)
            .pipe(
                timeout(ModuleConstants.apiTimeout),
                map((res) => this.commonUtilsProvider.extractData(res)),
                catchError((err) => this.commonUtilsProvider.catchError(err))
            );
    }


    /**
     * Method to delete existing appointment for doctor
     * @param requestData 
     * @returns 
     */
    deleteDocAppointment(requestData: any) {
        return this.baseHttp.delete(this.endpoint.deleteDocAppointment+'/'+requestData)
            .pipe(
                timeout(ModuleConstants.apiTimeout),
                map((res) => this.commonUtilsProvider.extractData(res)),
                catchError((err) => this.commonUtilsProvider.catchError(err))
            );
    }
}
