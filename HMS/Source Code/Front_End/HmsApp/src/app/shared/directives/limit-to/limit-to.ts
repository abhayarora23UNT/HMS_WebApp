import { Directive, Input, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

/**
 * Generated class for the LimitToDirective directive.
 */
@Directive({
  selector: '[appLimitTo]' // Attribute selector
})
export class LimitToDirective {

  @Input('appLimitTo') limitTo: number;

  constructor(private ngControl: NgControl) {
  }

  @HostListener('keydown', ['$event'])
  onKeyUp(event) {
    this.limitMaxLength();
  }

  /*
    Function which limit the input upto given length.
  */
  limitMaxLength() {
    const elementControl = this.ngControl.control;
    elementControl.valueChanges
      .pipe(map(v => (v || '').slice(0, this.limitTo)))
      .subscribe(v => elementControl.setValue(v, { emitEvent: false }));
  }

}
