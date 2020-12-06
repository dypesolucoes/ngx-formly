import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Inputnumber',
      type: 'inputnumber',
      templateOptions: {
        label: 'Input Number',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        mode: 'currency',
        format: true,
        locale: 'en-US',
        showButtons: false,
      },
    },
  ];
}
