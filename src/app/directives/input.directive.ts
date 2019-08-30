import {Directive, ElementRef, Optional} from '@angular/core';
import {IdProviderService} from '../services/id-provider.service';
import {FormFieldIdSyncDirective} from './form-field-id-sync.directive';

export const ID_ATTRIBUTE = 'id';

@Directive({
  selector: 'input',
})
export class InputDirective {

  get id(): string {
    return this.elementRef.nativeElement.getAttribute(ID_ATTRIBUTE);
  }

  constructor(readonly idProvider: IdProviderService,
              readonly elementRef: ElementRef,
              @Optional() readonly formField: FormFieldIdSyncDirective) {
    this.elementRef.nativeElement.setAttribute(ID_ATTRIBUTE, `${this.idProvider.id}`);
    if (formField) {
      formField.input.next(this);
    }
  }
}
