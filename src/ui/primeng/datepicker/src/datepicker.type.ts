import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-primeng-datepicker',
  template: `
  <p-calendar 
      [formControl]="formControl"
      [formlyAttributes]="field">
  </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDatePicker extends FieldType {}
