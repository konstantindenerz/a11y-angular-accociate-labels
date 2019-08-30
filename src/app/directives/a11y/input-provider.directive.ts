import {Directive, ElementRef, Optional} from '@angular/core';
import {IdProviderService} from '../../services/id-provider.service';
import {InputIdToLabelForSyncDirective} from './input-id-to-label-for-sync.directive';

export const ID_ATTRIBUTE = 'id';

@Directive({
  selector: 'input',
})
export class InputProviderDirective {

  get id(): string {
    return this.elementRef.nativeElement.getAttribute(ID_ATTRIBUTE);
  }

  constructor(readonly idProvider: IdProviderService,
              readonly elementRef: ElementRef,
              @Optional() readonly inputIdToLabelForSyncD: InputIdToLabelForSyncDirective) {
    this.elementRef.nativeElement.setAttribute(ID_ATTRIBUTE, `${this.idProvider.id}`);
    if (inputIdToLabelForSyncD) {
      inputIdToLabelForSyncD.input.next(this);
    }
  }
}
