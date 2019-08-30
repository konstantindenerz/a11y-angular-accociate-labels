import {Directive, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {InputDirective} from './input.directive';
import {LabelDirective} from './label.directive';

@Directive({
  selector: 'form-field',
})
export class FormFieldIdSyncDirective implements OnInit, OnDestroy {

  public label = new BehaviorSubject<LabelDirective>(undefined);
  public input = new BehaviorSubject<InputDirective>(undefined);
  private subscription = Subscription.EMPTY;

  public ngOnInit(): void {
    this.subscription = combineLatest(this.input, this.label).pipe(filter(([input, label]) => !!input && !!label))
      .subscribe(([input, label]) => label.for = input.id);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
