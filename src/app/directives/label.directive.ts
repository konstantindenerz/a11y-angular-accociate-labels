import {Directive, ElementRef, Optional} from '@angular/core';
import {FormFieldIdSyncDirective} from './form-field-id-sync.directive';

@Directive({
  selector: 'label',
})
export class LabelDirective {
  constructor(readonly elementRef: ElementRef,
              @Optional() readonly formField: FormFieldIdSyncDirective) {
    if (formField) {
      formField.label = this;
    }
  }
}
