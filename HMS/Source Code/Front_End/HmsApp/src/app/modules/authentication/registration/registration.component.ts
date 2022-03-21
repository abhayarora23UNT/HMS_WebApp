import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Constants, ModuleConstants } from 'src/app/core/constants/constants';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';
import { Messages } from 'src/app/core/messages/messages';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  fgRegister!: FormGroup;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private toastService: ToastMessageService) {
    this.createRegisterFormGroup();
  }

  isDataLoading = false;
  userRolesData: any = ModuleConstants.userRoles

  /**
   * Method called on PageInit
   */
  ngOnInit(): void {
  }

  /**
   * Method called on PageDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  /**
   * Method to create form group
   */
  createRegisterFormGroup() {
    this.fgRegister = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userRole: ['', Validators.required],
      phoneNumber: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  /**
   * Method to register new user
   */
  registerUser() {
    if (this.fgRegister.status == Constants.FormInvalid) {
      this.toastService.errorMessage(Messages.Mandatory_Fields_Validation);
    } else {

      if (this.fgRegister.controls['password'].value != this.fgRegister.controls['confirmPassword'].value) {
        this.toastService.errorMessage(Messages.Password_Validate_Message);
      }
      const fgValue = this.fgRegister.value;
      console.log('data is  ' + fgValue);
        // TODO call API //
      this.callRegisterUserApi(fgValue);
      this.toastService.successMessage(Messages.RegisterUserSuccess);
    
    }
  }

  /**
   * Method to called register user api
   * @param respData 
   */
  callRegisterUserApi(respData: any) {
    this.isDataLoading=true;
    this.authService.registerNewUser(respData)              
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (retData: any) => {
          if (retData.status) {
            this.toastService.successMessage(Messages.RegisterUserSuccess);
          } else {
            this.toastService.errorMessage(retData.message);
          }
          this.isDataLoading = false;
        },
        error: (err: any) => {
          console.log(err);
          this.isDataLoading = false;
        },
        complete: () => {
          console.log('complete');
          this.isDataLoading = false;
        }
      });
  }
}
