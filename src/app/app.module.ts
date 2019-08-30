import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormFieldComponent} from './components/form-field/form-field.component';

import {AppComponent} from './components/root/app.component';
import {TextFieldComponent} from './components/text-field/text-field.component';
import {InputIdToLabelForSyncDirective} from './directives/a11y/input-id-to-label-for-sync.directive';
import {InputProviderDirective} from './directives/a11y/input-provider.directive';
import {LabelProviderDirective} from './directives/a11y/label-provider.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    InputProviderDirective,
    LabelProviderDirective,
    InputIdToLabelForSyncDirective,
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
