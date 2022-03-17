import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * Generated class for the AllowSpecialCharactersDirective directive.
 */
@Directive({
  selector: '[appSpecialCharacters]' // Attribute selector
})
export class AllowSpecialCharactersDirective {

  @Input('appSpecialCharacters') regexPattern: string;

  constructor(private ngControl: NgControl) {
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event) {
    this.allowSomeSpecialCharacters(event);
  }

  /**
   * Function which allow all characters except these special characters ' <>& ' .
   * @param:event
   */
  allowSomeSpecialCharacters(event) {
    if (event.target.value) {
      // const regExp = new RegExp('^[^<>&]+$');
      const regExp = new RegExp(this.regexPattern);
      const inputChar = event.target.value;
      if (!regExp.test(inputChar)) {
        this.updateInputField(inputChar.slice(0, -1));
      }
    }
  }

  /**
   * Function to update the input value of ng control element.
   * @param:fieldValue
   */
  updateInputField(fieldValue: string) {
    this.ngControl.control.patchValue(fieldValue);
  }

}
