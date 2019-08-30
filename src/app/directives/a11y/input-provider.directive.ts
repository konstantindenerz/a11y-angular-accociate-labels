import {Directive, ElementRef, Optional} from '@angular/core';
import {IdService} from '../../services/id.service';
import {InputIdToLabelForSyncDirective} from './input-id-to-label-for-sync.directive';

export const ID_ATTRIBUTE = 'id';

@Directive({
  selector: 'input',
})
export class InputProviderDirective {

  get id(): string {
    return this.elementRef.nativeElement.getAttribute(ID_ATTRIBUTE);
  }

  constructor(readonly idService: IdService,
              readonly elementRef: ElementRef,
              @Optional() readonly inputIdToLabelForSyncD: InputIdToLabelForSyncDirective) {
    this.elementRef.nativeElement.setAttribute(ID_ATTRIBUTE, `${this.idService.id}`);
    if (inputIdToLabelForSyncD) {
      inputIdToLabelForSyncD.input.next(this);
    }
  }
}
