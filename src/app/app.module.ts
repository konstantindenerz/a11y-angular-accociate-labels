import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormFieldComponent} from './components/form-field/form-field.component';

import {AppComponent} from './components/root/app.component';
import {TextFieldComponent} from './components/text-field/text-field.component';
import {FormFieldIdSyncDirective} from './directives/form-field-id-sync.directive';
import {InputDirective} from './directives/input.directive';
import {LabelDirective} from './directives/label.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    InputDirective,
    LabelDirective,
    FormFieldIdSyncDirective,
    TextFieldComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
