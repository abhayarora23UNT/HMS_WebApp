import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {

  registerUser='api/Login/CreateLogin';
  loginUser='api/Login/GetLoginAccess';
}


