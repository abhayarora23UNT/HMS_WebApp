import { Component, OnDestroy, OnInit, NgZone, HostListener, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Constants } from '../constants/constants';
import { Router } from '@angular/router';
import { Messages } from '../messages/messages';
import { takeUntil } from 'rxjs/operators';
import { StorageProvider } from '../http/storage-service';
import { Location } from '@angular/common';
import { CommonUtilsService } from '../services/utils/common-utils.service';

declare var window: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  dialogRefConnectionTimeout: any;
  private onDestroy$: Subject<void> = new Subject<void>();




  
  showLinksBox = false;
  isLoading = false;
  dbServer: any;
  userResponsibility: any;
  isProdEnv = false;
  userName=null;
  constructor(private router: Router, private location: Location, private storageService: StorageProvider) {
   
  }

  /**
   * Desc: Method called on page initialization.
   */
  ngOnInit() {
  
  }

  /**
   * Desc:Method called on page destroy.
   */
  ngOnDestroy(): void {
    this.onDestroy$.next();
    
  }

  

}
