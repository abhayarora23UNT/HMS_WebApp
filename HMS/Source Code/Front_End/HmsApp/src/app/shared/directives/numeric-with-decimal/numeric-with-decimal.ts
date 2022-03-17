import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';


/**
 * Generated class for the OnlyNumericDirective directive.
 */
@Directive({
  selector: '[appNumericWithDecimal]' // Attribute selector
})
export class NumericWithDecimalDirective {

  constructor(private ngControl: NgControl) {
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event) {
    this.allowNumericCharacters(event);
  }

  /**
   * Function which only allow numeric characters.
   * @param:event
   */
  allowNumericCharacters(event) {
    if (event.target.value) {
      const regExp = new RegExp('^[0-9]+\.?[0-9]*$');
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
