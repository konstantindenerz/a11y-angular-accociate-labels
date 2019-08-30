import {Directive, OnInit} from '@angular/core';
import {InputDirective} from './input.directive';
import {LabelDirective} from './label.directive';

export const FOR_ATTRIBUTE = 'for';

@Directive({
  selector: 'form-field',
})
export class FormFieldIdSyncDirective implements OnInit {
  label: LabelDirective;
  input: InputDirective;

  public ngOnInit(): void {
    this.label.elementRef.nativeElement.setAttribute(FOR_ATTRIBUTE, this.input.id);
  }
}
