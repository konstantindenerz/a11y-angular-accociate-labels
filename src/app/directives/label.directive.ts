import {Directive, ElementRef, Optional} from '@angular/core';
import {FormFieldIdSyncDirective} from './form-field-id-sync.directive';

export const FOR_ATTRIBUTE = 'for';

@Directive({
  selector: 'label',
})
export class LabelDirective {
  public set for(value: string) {
    this.elementRef.nativeElement.setAttribute(FOR_ATTRIBUTE, value);
  }

  constructor(readonly elementRef: ElementRef,
              @Optional() readonly formField: FormFieldIdSyncDirective) {
    if (formField) {
      formField.label.next(this);
    }
  }
}
