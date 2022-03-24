import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Constants, ModuleConstants } from 'src/app/core/constants/constants';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';
import { Messages } from 'src/app/core/messages/messages';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  fgLogin!: FormGroup;
  private onDestroy$: Subject<void> = new Subject<void>();
  isDataLoading=false;
  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private toastService: ToastMessageService,private router:Router) {
    this.createLoginFormGroup();
  }

  /**
   * Method to create initial form group
   */
  createLoginFormGroup() {
    this.fgLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Method called on page Init
   */
  ngOnInit(): void {
  }

  /**
   * Method called on page destroy
   */
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  /**
   * Method called, when logi in button is clicked
   */
  loginUser() {
    if (this.fgLogin.status == Constants.FormInvalid) {
      this.toastService.errorMessage(Messages.Mandatory_Fields_Validation);
    } else {
      const formData = this.fgLogin.value;
      const obj = {
        Email: formData.userName,
        Password: formData.password,
      }
      this.callLoginUserApi(obj);
    }
  }


  /**
  * Method to called login user api
  * @param respData 
  */
  callLoginUserApi(respData: any) {
    this.isDataLoading=true;
    this.authService.loginExistingUser(respData)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (retData: any) => {
          if (retData.status) {
            this.toastService.successMessage(Messages.RegisterUserSuccess);
            this.router.navigate(['home']);
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