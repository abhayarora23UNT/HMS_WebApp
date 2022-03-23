import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Constants, ModuleConstants } from 'src/app/core/constants/constants';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';
import { Messages } from 'src/app/core/messages/messages';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,  OnDestroy {
  fgLogin!: FormGroup;
  private onDestroy$: Subject<void> = new Subject<void>();
  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private toastService: ToastMessageService) { 
    this.createLoginFormGroup();
  }

  createLoginFormGroup() {
    this.fgLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  loginUser(){
    if (this.fgLogin.status == Constants.FormInvalid) {
      this.toastService.errorMessage(Messages.Mandatory_Fields_Validation);
    }
  }

}